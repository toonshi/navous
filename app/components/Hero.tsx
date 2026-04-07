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
      const offsetY = 30 - 180 * gsap.parseEase("power2.in")(Math.random());
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
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden flex flex-col items-center pt-6 px-12 text-center"
      style={{ background: "radial-gradient(circle at 0% 0%, #e0f7fc 0%, #f0feff 40%, #fff8f0 75%, #fef3e2 100%)" }}
    >
      {/* Vibrant background blobs with more saturation */}
      <div className="absolute top-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-40 blur-[100px] pointer-events-none animate-pulse"
        style={{ background: "radial-gradient(circle, #00E5FF 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-[400px] h-[400px] rounded-full opacity-30 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FB7185 0%, transparent 70%)" }} />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full opacity-20 blur-[60px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FCD34D 0%, transparent 70%)" }} />

      {/* Background Canvas — walking people */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center">
        <h1 className="font-bold tracking-tighter text-slate-900 leading-[0.98] mb-8"
          style={{ fontSize: "48.1788px", fontFamily: "Clarkson, Helvetica, Sans-serif" }}>
          Stop losing people in the hallways.
        </h1>

        <p className="text-slate-800 font-semibold leading-relaxed max-w-2xl mb-6"
          style={{ fontSize: "26px" }}>
          Navous transforms your space into a searchable, intelligent environment. Make sure your visitors find exactly what they need, the moment they enter your doors.
        </p>

        <p className="text-slate-600 text-base md:text-lg font-bold tracking-wide leading-relaxed max-w-xl mb-12 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          Turn-by-turn guidance · Spatial intelligence · Universal accessibility
        </p>

        <div className="flex flex-wrap gap-5">
          <a href="/how-it-works" className="bg-primary text-slate-900 px-12 py-5 rounded-xl font-black text-lg hover:brightness-110 transition-all hover:scale-[1.02] cursor-pointer no-underline shadow-[0_20px_40px_-15px_rgba(0,229,255,0.4)]">
            See How It Works
          </a>
          <a href="/features" className="glass border-2 border-slate-900/10 text-slate-900 px-12 py-5 rounded-xl font-black text-lg hover:bg-slate-900 hover:text-white transition-all hover:scale-[1.02] cursor-pointer no-underline">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}
