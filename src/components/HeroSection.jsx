import React from 'react';
import { Sparkles, Heart, Camera, Crown } from 'lucide-react';

export default function HeroSection({ babyPhoto, onOpenEdit }) {
  return (
    <section className="relative pt-12 pb-16 px-4 text-center overflow-hidden">
      {/* Decorative Cloud Accents */}
      <div className="absolute top-4 left-10 text-4xl opacity-50 animate-float-slow select-none pointer-events-none">☁️</div>
      <div className="absolute top-16 right-8 text-5xl opacity-40 animate-float-gentle select-none pointer-events-none">☁️</div>
      <div className="absolute bottom-6 left-1/4 text-3xl opacity-50 animate-float-slow select-none pointer-events-none">🌸</div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Cute Baby Milestone Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-200 via-rose-100 to-amber-200 border border-pink-300/80 shadow-xs mb-6 animate-pulse">
          <span className="text-base">✨</span>
          <span className="font-baloo text-sm sm:text-base font-bold text-pink-900">
            ५ महीने की हमारी लाडली परी • Little Princess Mishti
          </span>
          <span className="text-base">✨</span>
        </div>

        {/* Baby Photo in Scalloped Flower Frame with Crown */}
        <div className="relative inline-block my-4">
          {/* Decorative Floral Halo / Golden Tiara Crown */}
          <div className="absolute -top-7 inset-x-0 flex justify-center z-20 pointer-events-none animate-bounce">
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 border border-amber-300 shadow-md flex items-center gap-1 text-amber-900 font-bold text-xs">
              <span>👑</span>
              <span className="font-baloo">नन्ही राजकुमारी</span>
              <span>🌸</span>
            </div>
          </div>

          {/* Scalloped Floral Outer Frame with Petals */}
          <div className="relative p-3 sm:p-4 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 shadow-2xl animate-float-gentle">
            {/* Scallop Petal SVG Ring or CSS Petals */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-inner bg-pink-100 group">
              <img
                src={babyPhoto || '/assets/baby_mishti.jpg'}
                alt="Baby Mishti"
                className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay to easily change photo */}
              <button
                type="button"
                onClick={onOpenEdit}
                className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center text-white cursor-pointer"
                title="फोटो बदलें या अपलोड करें"
              >
                <Camera className="w-8 h-8 mb-1 drop-shadow" />
                <span className="font-baloo text-xs font-bold drop-shadow">फोटो बदलें / अपलोड करें</span>
              </button>
            </div>

            {/* Floating butterflies & hearts around frame */}
            <span className="absolute -left-3 top-1/4 text-3xl animate-butterfly pointer-events-none select-none">
              🦋
            </span>
            <span className="absolute -right-3 top-1/3 text-2xl animate-sparkle pointer-events-none select-none">
              ✨
            </span>
            <span className="absolute left-6 -bottom-2 text-2xl animate-float-slow pointer-events-none select-none">
              💖
            </span>
            <span className="absolute right-6 -bottom-2 text-2xl animate-float-gentle pointer-events-none select-none">
              🌸
            </span>
          </div>

          {/* Quick Photo Upload Button below on mobile */}
          <div className="mt-3 sm:hidden">
            <button
              type="button"
              onClick={onOpenEdit}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-baloo font-bold border border-pink-200 hover:bg-pink-200"
            >
              <Camera className="w-3.5 h-3.5" /> फोटो बदलें
            </button>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-rozha text-4xl sm:text-5xl text-[#BE185D] mt-6 mb-3 drop-shadow-xs">
          हमारी प्यारी मिष्टी 💗
        </h1>

        {/* Subtitle Message */}
        <p className="font-baloo text-lg sm:text-xl text-stone-700 leading-relaxed max-w-lg mx-auto font-medium">
          नन्ही मिष्टी की भुलाबाई के इस खास उत्सव में आपका प्यार और आशीर्वाद चाहिए!
        </p>

        {/* Gentle Decorative Ribbon Accent */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-pink-400" />
          <span className="text-xl">🌸 🍼 🌸</span>
          <div className="h-[1.5px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-pink-400" />
        </div>
      </div>
    </section>
  );
}
