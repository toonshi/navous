"use client";

import React, { useEffect, useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import { Sparkle, ScatterDots } from "./Doodles";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const featureHighlights = [
    { label: "Clickable demo from your floor plans" },
    { label: "No app download or hardware install" },
    { label: "Built for accessible multi-floor routing", className: "sm:col-span-2" },
  ];
  const featureCardClass = "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 md:border-0 md:bg-transparent md:px-0 md:py-0";

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
    <section className="relative flex min-h-svh flex-col items-center justify-start overflow-hidden bg-[#0B0E14] px-5 pt-6 text-[#F0F6FC] sm:px-6 md:px-12 md:pt-6">
      {/* Background Canvas — walking people */}
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      />

      {/* Doodle accents — floating in background */}
      <Sparkle size={18} color="#0052FF" className="pointer-events-none absolute left-[10%] top-24 opacity-25 doodle-float md:top-28 md:opacity-40" />
      <Sparkle size={13} color="#22D3EE" className="pointer-events-none absolute right-[12%] top-36 opacity-20 doodle-float-offset md:top-44 md:opacity-30" />
      <Sparkle size={10} color="#0052FF" className="pointer-events-none absolute left-[18%] top-56 hidden opacity-30 doodle-float-slow md:block md:top-64" />
      <ScatterDots color="#22D3EE" className="pointer-events-none absolute bottom-24 left-[6%] hidden opacity-25 md:block md:bottom-32" />
      <ScatterDots color="#0052FF" className="pointer-events-none absolute bottom-20 right-[8%] hidden opacity-20 md:block md:bottom-28" />

      <div className="relative z-10 mx-auto mt-4 flex w-full max-w-7xl flex-col items-center text-center md:mt-8">
        <span className="mb-5 inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent sm:text-sm md:mb-6">
          Enterprise Indoor Wayfinding
        </span>
        <h1 className="font-display mb-6 text-[2.8rem] font-bold leading-[0.95] tracking-tight text-white sm:text-5xl md:mb-8 md:text-[5.5rem]">
          Stop losing your visitors
          <br className="hidden md:block" />
          <span> inside your building.</span>
        </h1>

        <p className="mb-8 max-w-3xl text-base font-medium leading-relaxed text-white/60 sm:text-lg md:mb-10 md:text-xl">
          Navous turns your existing floor plans into live, turn-by-turn wayfinding — no hardware, no app downloads, and no complex IT projects. Your front desk gets their time back from day one.
        </p>

        <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
          <a href="#pilot" className="btn-primary w-full sm:min-w-[180px] sm:w-auto">
            Book a Demo
          </a>
          <a href="/how-it-works" className="btn-secondary w-full sm:min-w-[180px] sm:w-auto">
            See the Platform
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-4xl gap-4 text-left sm:grid-cols-2 sm:gap-6 md:mt-12 md:grid-cols-3 md:gap-8">
          {featureHighlights.map((feature) => (
            <div
              key={feature.label}
              className={feature.className ? `${featureCardClass} ${feature.className}` : featureCardClass}
            >
              <span className="text-accent font-bold text-xl">✓</span>
              <span className="text-xs font-bold uppercase tracking-wider text-white/50 sm:text-sm">{feature.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 w-full max-w-5xl rounded-[1.5rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:mt-14 sm:p-4 md:rounded-[2rem] md:p-6">
          <div className="mb-4 flex flex-col gap-3 border-b border-white/10 pb-4 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">Product preview</p>
              <p className="text-sm leading-relaxed text-white/60">Show buyers the actual wayfinding interface before they talk to you.</p>
            </div>
            <a href="#contact" className="inline-flex w-full items-center justify-center rounded-full border border-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:w-auto">
              Request your preview
            </a>
          </div>
          <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-black/30 md:rounded-[1.5rem]">
            <NextImage
              src="/screenshots/home.png"
              alt="Navous product interface preview"
              width={1600}
              height={980}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
