"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Sparkle, ScatterDots } from "./Doodles";

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
    const randomIndex = <T,>(array: T[]) => (randomRange(0, array.length)) | 0;
    const removeFromArray = <T,>(array: T[], i: number): T => array.splice(i, 1)[0];
    const removeItemFromArray = <T,>(array: T[], item: T) => removeFromArray(array, array.indexOf(item));
    const removeRandomFromArray = <T,>(array: T[]) => removeFromArray(array, randomIndex(array));
    const getRandomFromArray = <T,>(array: T[]): T => array[randomIndex(array) | 0];

    const stage = { width: 0, height: 0 };
    let peepScale = 1;

    // CLASSES
    class Peep {
      image: HTMLImageElement;
      rect: number[];
      width: number;
      height: number;
      drawArgs: (CanvasImageSource | number)[];
      x: number;
      y: number;
      anchorY: number;
      scaleX: number;
      walk: gsap.core.Timeline | null;

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
        ctx.scale(this.scaleX * peepScale, peepScale);
        ctx.drawImage(
          this.image,
          this.rect[0], this.rect[1], this.rect[2], this.rect[3],
          0, 0, this.width, this.height
        );
        ctx.restore();
      }
    }

    const allPeeps: Peep[] = [];
    const availablePeeps: Peep[] = [];
    const crowd: Peep[] = [];

    const resetPeep = ({ stage, peep }: { stage: { width: number; height: number }; peep: Peep }) => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const offsetY = 30 - 180 * gsap.parseEase("power2.in")(Math.random());
      const startY = stage.height - (peep.height * peepScale) + offsetY;
      let startX;
      let endX;

      if (direction === 1) {
        startX = -(peep.width * peepScale);
        endX = stage.width;
        peep.scaleX = 1;
      } else {
        startX = stage.width + (peep.width * peepScale);
        endX = 0;
        peep.scaleX = -1;
      }

      peep.x = startX;
      peep.y = startY;
      peep.anchorY = startY;

      return { startX, startY, endX };
    };

    const normalWalk = ({ peep, props }: { peep: Peep; props: { startX: number; startY: number; endX: number } }) => {
      const { startY, endX } = props;
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
        y: startY - (10 * peepScale),
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
        addPeepToCrowd().walk!.progress(Math.random());
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

      // Update peepScale based on width - smaller on mobile
      peepScale = stage.width < 768 ? 0.45 : 1;

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
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start pt-12 md:pt-16 px-6 md:px-12 bg-[#F9F8F6] text-primary">
      {/* Background Canvas — walking people */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
      />

      {/* Doodle accents — floating in background */}
      <Sparkle size={18} color="#2563EB" className="absolute top-28 left-[10%] doodle-float pointer-events-none opacity-30" />
      <Sparkle size={13} color="#00A896" className="absolute top-44 right-[12%] doodle-float-offset pointer-events-none opacity-20" />
      <Sparkle size={10} color="#2563EB" className="absolute top-64 left-[18%] doodle-float-slow pointer-events-none opacity-20" />
      <ScatterDots color="#00A896" className="absolute bottom-32 left-[6%] pointer-events-none opacity-15" />
      <ScatterDots color="#2563EB" className="absolute bottom-28 right-[8%] pointer-events-none opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center mt-12 md:mt-24">
        <span className="inline-block text-accent text-sm font-bold uppercase tracking-[0.2em] mb-6">
          Enterprise Indoor Wayfinding
        </span>
        <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tight text-primary leading-[0.95] mb-8 font-fraunces">
          Stop losing your visitors <br />inside your building.
        </h1>

        <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-3xl mb-10">
          Navous turns your existing floor plans into live, turn-by-turn wayfinding — no hardware, no app downloads, and no complex IT projects. Your front desk gets their time back from day one.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a href="mailto:hello@navous.com" className="btn-primary min-w-[180px]">
            Book a Demo
          </a>
          <a href="/how-it-works" className="btn-secondary min-w-[180px]">
            See the Platform
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <span className="text-teal font-bold text-xl">✓</span>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Cut staff interruptions by 30%+</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-teal font-bold text-xl">✓</span>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Go live in under 24 hours</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-teal font-bold text-xl">✓</span>
            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">SOC 2 & WCAG Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
