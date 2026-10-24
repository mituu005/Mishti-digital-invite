import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Smile, Star } from 'lucide-react';

export default function KidsFunZone() {
  const [elephantHappy, setElephantHappy] = useState(false);
  const [bunnyHappy, setBunnyHappy] = useState(false);
  const [cradleRocking, setCradleRocking] = useState(false);

  const handleElephantClick = () => {
    setElephantHappy(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#FDE047', '#F472B6', '#60A5FA']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setElephantHappy(false), 1500);
  };

  const handleBunnyClick = () => {
    setBunnyHappy(true);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.8 },
        colors: ['#F472B6', '#FBBF24', '#34D399']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setBunnyHappy(false), 1500);
  };

  const handleCradleClick = () => {
    setCradleRocking(true);
    setTimeout(() => setCradleRocking(false), 2000);
  };

  return (
    <section className="relative my-12 px-4">
      <div className="max-w-2xl mx-auto rounded-3xl pastel-card p-6 sm:p-8 border-2 border-pink-200/80 shadow-xl overflow-hidden text-center">
        {/* Header Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-yellow-100 text-amber-800 text-xs font-bold mb-2 border border-yellow-200">
          <span>🎈</span>
          <span>बच्चों का प्यारा कोना • Playful Magic Corner</span>
          <span>🧸</span>
        </div>

        <h3 className="font-rozha text-2xl sm:text-3xl text-[#BE185D] mb-1">
          नन्हे दोस्तों के लिए खिलौने व जादू! ✨
        </h3>
        <p className="font-baloo text-xs sm:text-sm text-stone-600 mb-6">
          (नीचे दिए गए खिलौनों पर टैप करें और जादू देखें)
        </p>

        {/* 3 Interactive Cards: Elephant, Cradle, Bunny */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 1. Baby Elephant with Flower */}
          <div
            onClick={handleElephantClick}
            className="p-4 rounded-2xl bg-gradient-to-b from-blue-50 to-pink-50 border-2 border-blue-200 shadow-sm cursor-pointer transform hover:-translate-y-1 active:scale-95 transition-all text-center select-none"
          >
            <div className={`text-5xl my-2 inline-block transition-transform duration-300 ${
              elephantHappy ? 'scale-125 rotate-6 animate-bounce' : 'animate-float-gentle'
            }`}>
              🐘
            </div>
            <div className="text-xl -mt-2 mb-1">🌸</div>
            <h4 className="font-baloo font-bold text-sm text-blue-900">
              हाथी दादा (Gajraj)
            </h4>
            <p className="text-[11px] font-baloo text-stone-500 mt-0.5">
              {elephantHappy ? '🎉 हाथी दादा खुश हुए!' : 'टैप करें: फूल लहराएँ 🌼'}
            </p>
          </div>

          {/* 2. Floral Swinging Cradle (पालना) */}
          <div
            onClick={handleCradleClick}
            className="p-4 rounded-2xl bg-gradient-to-b from-pink-50 to-rose-50 border-2 border-pink-200 shadow-sm cursor-pointer transform hover:-translate-y-1 active:scale-95 transition-all text-center select-none"
          >
            <div className={`text-5xl my-2 inline-block transition-transform duration-700 ${
              cradleRocking ? 'rotate-12 animate-wiggle' : 'animate-float-slow'
            }`}>
              🪅
            </div>
            <div className="text-xl -mt-2 mb-1">👶💤</div>
            <h4 className="font-baloo font-bold text-sm text-pink-900">
              फूलों का पालना (Cradle)
            </h4>
            <p className="text-[11px] font-baloo text-stone-500 mt-0.5">
              {cradleRocking ? '🌸 पालना झूल रहा है!' : 'टैप करें: झूला झुलाएँ 💕'}
            </p>
          </div>

          {/* 3. Cute Bunny with Flower */}
          <div
            onClick={handleBunnyClick}
            className="p-4 rounded-2xl bg-gradient-to-b from-emerald-50 to-amber-50 border-2 border-emerald-200 shadow-sm cursor-pointer transform hover:-translate-y-1 active:scale-95 transition-all text-center select-none"
          >
            <div className={`text-5xl my-2 inline-block transition-transform duration-300 ${
              bunnyHappy ? 'scale-125 -rotate-6 animate-bounce' : 'animate-float-gentle'
            }`}>
              🐰
            </div>
            <div className="text-xl -mt-2 mb-1">🌷</div>
            <h4 className="font-baloo font-bold text-sm text-emerald-900">
              नन्हा खरगोश (Bunny)
            </h4>
            <p className="text-[11px] font-baloo text-stone-500 mt-0.5">
              {bunnyHappy ? '✨ खरगोश ने नमस्ते किया!' : 'टैप करें: नमस्ते करें 🌸'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
