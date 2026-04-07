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

    // UTILS
    const randomRange = (min: number, max: number) => min + Math.random() * (max - min);
    const randomIndex = (array: any[]) => randomRange(0, array.length) | 0;
    const removeFromArray = (array: any[], i: number) => array.splice(i, 1)[0];
    const removeItemFromArray = (array: any[], item: any) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = (array: any[]) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = (array: any[]) => array[randomIndex(array) | 0];

    // CLASSES
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
      const offsetY = 100 - 250 * gsap.parseEase("power2.in")(Math.random());
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
    <section className="relative h-[calc(100vh-5rem)] overflow-hidden flex flex-col items-start pt-16 px-12 text-left"
      style={{ background: "linear-gradient(135deg, #e0f7fc 0%, #f0feff 40%, #fff8f0 75%, #fef3e2 100%)" }}
    >
      {/* Vibrant background blobs */}
      <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #13B7DA 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FB7185 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #FCD34D 0%, transparent 70%)" }} />

      {/* Background Canvas — walking people */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          Indoor Navigation Platform
        </span>

        <h1 className="font-space-grotesque text-[3.2rem] md:text-[4.4rem] lg:text-[5.5rem] font-bold tracking-tighter text-secondary leading-[1.04] mb-6">
          Stop losing people
          <br />
          <span style={{ color: "#13B7DA" }}>in the hallways.</span>
        </h1>

        <p className="text-secondary/70 text-xl md:text-2xl leading-relaxed max-w-2xl mb-4">
          Navous transforms your space into a searchable, intelligent environment — so visitors find exactly what they need, the moment they walk in.
        </p>

        <p className="text-secondary/50 text-base md:text-lg leading-relaxed max-w-xl mb-10">
          Real-time wayfinding · Movement analytics · Visitor satisfaction
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="/how-it-works" className="bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-[#0fa3c4] transition cursor-pointer no-underline">
            See How It Works
          </a>
          <a href="/features" className="border-2 border-primary/40 text-primary px-10 py-4 rounded-md font-bold text-lg hover:border-primary hover:bg-primary/5 transition cursor-pointer no-underline">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
