"use client";
import React from "react";
import SwipeCards from "./swipe-cards";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-neutral-900 min-h-[calc(100vh-4rem)] flex items-center py-12 mt-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="text-center lg:text-left lg:max-w-xl">
            <h1 className="relative text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mt-16 md:mt-20">
              <span className="block">池袋で始める</span>
              <span className="block bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text">
                バイクのある生活
              </span>
              <div className="flex items-center absolute -top-16 -right-4 md:-top-14 md:-right-2 lg:-top-16 lg:right-0 transform rotate-12 bg-gradient-to-br from-black to-green-500 text-white px-4 py-2 rounded-lg shadow-md">
                <span className="text-sm md:text-base font-bold whitespace-nowrap">
                  ジモティーで掲載中！
                </span>
              </div>
            </h1>
            <p className="mt-4 text-lg text-gray-300 sm:text-xl lg:text-2xl">
              小回りと小さな移動が多い東京生活。50㏄バイクで楽しちゃおう。
            </p>
            <div className="mt-8">
              <button
                className="bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  (window.location.href = "https://line.me/R/ti/p/@273smptm")
                }
              >
                LINEで申し込む
              </button>
            </div>
          </div>
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-neutral-900"></div>
            <SwipeCards />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
