import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, MailOpen, Baby, Stars } from 'lucide-react';

export default function OpeningEnvelope({ onOpen, babyPhoto }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);

    // Burst of pastel & golden celebratory sparkles
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F472B6', '#FBBF24', '#C084FC', '#FDE047', '#FDA4AF', '#A7F3D0']
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      onOpen();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gradient-to-br from-[#FFF0F5] via-[#FFFDF8] to-[#FCE7F3] overflow-hidden">
      {/* Decorative Traditional Toran Hanging from Top */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none select-none z-10 animate-sway">
        <div className="flex items-center space-x-1 sm:space-x-2 px-4 py-1.5 bg-gradient-to-r from-amber-400 via-rose-300 to-amber-400 rounded-b-2xl shadow-md border-b-2 border-amber-300/80">
          <span className="text-xl sm:text-2xl">🍃</span>
          <span className="text-xl sm:text-2xl">🌼</span>
          <span className="text-xl sm:text-2xl">🍃</span>
          <span className="text-xl sm:text-2xl">🌸</span>
          <span className="text-xl sm:text-2xl">🍃</span>
          <span className="text-xl sm:text-2xl">🌼</span>
          <span className="text-xl sm:text-2xl">🍃</span>
          <span className="text-xl sm:text-2xl">🌸</span>
          <span className="text-xl sm:text-2xl">🍃</span>
        </div>
      </div>

      {/* Floating Background Sparkles & Clouds */}
      <div className="absolute top-12 left-8 text-pink-300 text-3xl animate-float-slow opacity-60">☁️</div>
      <div className="absolute top-20 right-10 text-pink-300 text-4xl animate-float-gentle opacity-60">☁️</div>
      <div className="absolute bottom-16 left-12 text-yellow-300 text-2xl animate-sparkle">✨</div>
      <div className="absolute bottom-24 right-16 text-pink-400 text-2xl animate-bounce">💖</div>

      {/* The Envelope Container */}
      <div 
        className={`relative w-full max-w-md mx-auto transition-all duration-700 transform perspective-1000 ${
          isOpening ? 'scale-105 opacity-0 -translate-y-8' : 'scale-100 opacity-100'
        }`}
      >
        {/* Adorable Outer Halo / Glow */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-pink-300 via-amber-200 to-purple-300 opacity-60 blur-xl animate-pulse-glow" />

        {/* The Pastel Pink Physical Envelope Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#FFF5F7] to-[#FED7E2] p-6 sm:p-8 border-4 border-[#FBCFE8] shadow-2xl text-center overflow-hidden">
          {/* Gold Decorative Corner Corners */}
          <div className="absolute top-3 left-3 text-amber-400 text-base">⚜️</div>
          <div className="absolute top-3 right-3 text-amber-400 text-base">⚜️</div>
          <div className="absolute bottom-3 left-3 text-amber-400 text-base">⚜️</div>
          <div className="absolute bottom-3 right-3 text-amber-400 text-base">⚜️</div>

          {/* Traditional Auspicious Invocation */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100/90 border border-pink-200 text-pink-700 text-sm font-semibold tracking-wide mb-3 shadow-sm">
            <span>🌸</span>
            <span className="font-baloo text-base">॥ श्री गणेशाय नमः ॥</span>
            <span>🌸</span>
          </div>

          {/* Heading */}
          <h1 className="font-rozha text-3xl sm:text-4xl text-[#BE185D] tracking-wide mb-3 drop-shadow-sm">
            ॥ स्नेह निमंत्रण ॥ 🌸
          </h1>

          {/* Subheading in Hindi */}
          <p className="font-baloo text-base sm:text-lg text-stone-700 leading-relaxed max-w-xs mx-auto mb-6">
            हमारी नन्ही मिष्टी की भुलाबाई के उत्सव में आपका हार्दिक स्वागत है!
          </p>

          {/* Cute Center Envelope Photo Medallion & Crown */}
          <div className="relative my-4 flex justify-center items-center">
            {/* Little Floral Halo / Tiara */}
            <div className="absolute -top-3.5 z-20 text-2xl select-none animate-bounce">
              👑
            </div>

            <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-pink-300 via-rose-200 to-amber-200 p-1.5 shadow-xl border-2 border-white flex items-center justify-center animate-float-gentle">
              <img
                src={babyPhoto || '/assets/baby_mishti.jpg'}
                alt="नन्ही मिष्टी"
                className="w-full h-full object-cover object-[center_20%] rounded-full shadow-inner"
              />
            </div>

            {/* Baby tag */}
            <span className="absolute -bottom-2 z-20 inline-block text-xs font-bold text-pink-700 bg-white/95 px-3 py-0.5 rounded-full border border-pink-300 shadow-md whitespace-nowrap">
              नन्ही मिष्टी • ५ माह 🌸
            </span>

            {/* Little floating accessories */}
            <span className="absolute -left-2 top-10 text-2xl animate-butterfly">🦋</span>
            <span className="absolute -right-2 bottom-6 text-xl animate-sparkle">⭐</span>
          </div>

          {/* Little Cultural Details Badge */}
          <div className="text-xs text-rose-800/80 font-medium mb-6 flex items-center justify-center gap-2">
            <span>🌼 पारंपरिक दूध घुटने का उत्सव</span>
            <span>•</span>
            <span>२५ अक्टूबर २०२६ 📅</span>
          </div>

          {/* Open Invitation CTA Button */}
          <button
            type="button"
            id="open-invitation-btn"
            onClick={handleOpenClick}
            disabled={isOpening}
            className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-baloo text-lg sm:text-xl font-bold shadow-[0_8px_25px_rgba(244,114,182,0.6)] hover:shadow-[0_12px_30px_rgba(244,114,182,0.8)] transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 border-2 border-pink-300"
          >
            <MailOpen className="w-6 h-6 text-amber-200 group-hover:rotate-12 transition-transform duration-300" />
            <span>प्यार से निमंत्रण खोलें 💌</span>
            <Sparkles className="w-5 h-5 text-amber-200 animate-spin-slow" />
          </button>

          <p className="mt-3 text-[11px] text-pink-600/70 font-medium tracking-wide">
            (कार्ड खोलने के लिए यहाँ टैप करें)
          </p>
        </div>
      </div>
    </div>
  );
}
