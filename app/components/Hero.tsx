"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const config = {
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png",
      rows: 15,
      cols: 7,
    };

    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
    const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
    const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
    const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

    class Peep {
      image: HTMLImageElement;
      rect: number[];
      width: number;
      height: number;
      drawArgs: any[];
      x: number;
      y: number;
      anchorY: number;
      scaleX: number;
      walk: any;

      constructor({ image, rect }: { image: HTMLImageElement; rect: number[] }) {
        this.image = image;
        this.x = 0;
        this.y = 0;
        this.anchorY = 0;
        this.scaleX = 1;
        this.walk = null;
        
        this.rect = rect;
        this.width = rect[2];
        this.height = rect[3];
        this.drawArgs = [this.image, ...rect, 0, 0, this.width, this.height];
      }

      setRect(rect: number[]) {
        this.rect = rect;
        this.width = rect[2];
        this.height = rect[3];
        this.drawArgs = [this.image, ...rect, 0, 0, this.width, this.height];
      }

      render(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scaleX, 1);
        ctx.drawImage(
          this.image,
          this.rect[0], this.rect[1], this.rect[2], this.rect[3],
          0, 0, this.width, this.height
        );
        ctx.restore();
      }
    }

    const stage = { width: 0, height: 0 };
    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const resetPeep = ({ stage, peep }: { stage: any; peep: Peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 120 - 150 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - peep.height + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -peep.width;
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + peep.width;
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }: { peep: Peep; props: any }) => {
      const { startX, startY, endX } = props;
      const xDuration = 10;
      const yDuration = 0.25;

      const tl = gsap.timeline();
      tl.timeScale(randomRange(0.5, 1.5));
      tl.to(peep, {
        duration: xDuration,
        x: endX,
        ease: "none",
      }, 0);
      tl.to(peep, {
        duration: yDuration,
        repeat: xDuration / yDuration,
        yoyo: true,
        y: startY - 10,
      }, 0);

      return tl;
    };

    const walks = [normalWalk];

    const addPeepToCrowd = () => {
      const peep = removeRandomFromArray(availablePeeps);
      const walk = getRandomFromArray(walks)({
        peep,
        props: resetPeep({ peep, stage }),
      }).eventCallback("onComplete", () => {
        removePeepFromCrowd(peep);
        addPeepToCrowd();
      });

      peep.walk = walk;
      crowd.push(peep);
      crowd.sort((a, b) => a.anchorY - b.anchorY);
      return peep;
    };

    const removePeepFromCrowd = (peep: Peep) => {
      removeItemFromArray(crowd, peep);
      availablePeeps.push(peep);
    };

    const initCrowd = () => {
      while (availablePeeps.length) {
        addPeepToCrowd().walk.progress(Math.random());
      }
    };

    const render = () => {
      canvas.width = canvas.width; // Clear canvas
      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      crowd.forEach((peep) => peep.render(ctx));
      ctx.restore();
    };

    const resize = () => {
      stage.width = canvas.clientWidth;
      stage.height = canvas.clientHeight;
      canvas.width = stage.width * window.devicePixelRatio;
      canvas.height = stage.height * window.devicePixelRatio;

      crowd.forEach((peep) => {
        if (peep.walk) peep.walk.kill();
      });

      crowd.length = 0;
      availablePeeps.length = 0;
      availablePeeps.push(...allPeeps);
      initCrowd();
    };

    const img = new Image();
    img.onload = () => {
      const { rows, cols } = config;
      const { naturalWidth: width, naturalHeight: height } = img;
      const total = rows * cols;
      const rectWidth = width / rows;
      const rectHeight = height / cols;

      for (let i = 0; i < total; i++) {
        allPeeps.push(
          new Peep({
            image: img,
            rect: [
              (i % rows) * rectWidth,
              ((i / rows) | 0) * rectHeight,
              rectWidth,
              rectHeight,
            ],
          })
        );
      }
      resize();
      gsap.ticker.add(render);
      window.addEventListener("resize", resize);
    };
    img.src = config.src;

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-center px-12 bg-black">
      {/* High-End Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/anna-dziubinska-mVhd5QVlDWw-unsplash.jpg" 
          alt="Architectural space" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Subtle Peeps Layer */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-10"
      />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-white text-[12px] font-medium uppercase tracking-[0.4em] mb-12 opacity-80">
          Indoor Wayfinding
        </span>

        <h1 className="font-sans text-[4.5rem] md:text-[7.5rem] lg:text-[10rem] font-medium tracking-[-0.05em] text-white leading-[0.9] mb-16">
          The building,
          <br />
          perfectly searchable.
        </h1>

        <button className="bg-white text-black px-12 py-5 rounded-full font-bold text-[14px] uppercase tracking-[0.15em] hover:bg-slate-100 transition-all hover:scale-[1.05] cursor-pointer shadow-2xl">
          Get Started
        </button>
      </div>

      {/* Floating Pill Bar (Bottom) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <nav className="flex items-center gap-10 px-10 py-5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 whitespace-nowrap">
          <a href="#" className="hover:text-white transition">Templates</a>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <a href="#" className="hover:text-white transition">Experiences</a>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <a href="#" className="hover:text-white transition">Commerce</a>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <a href="#" className="hover:text-white transition">Domains</a>
        </nav>
      </div>
    </section>
  );
}
