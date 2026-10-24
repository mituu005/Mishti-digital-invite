import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

export default function BhulabaiSection() {
  const [bloomed, setBloomed] = useState(false);

  const handleBloomClick = () => {
    setBloomed(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F59E0B', '#F43F5E', '#10B981', '#FCD34D']
      });
    } catch {
      // ignore
    }
    setTimeout(() => setBloomed(false), 2000);
  };

  return (
    <section className="relative my-12 px-4">
      <div className="max-w-2xl mx-auto rounded-3xl pastel-card p-6 sm:p-8 border-2 border-amber-200/80 shadow-xl overflow-hidden text-center">
        {/* Top Toran Border Accent */}
        <div className="flex justify-center items-center gap-2 mb-4 text-amber-500">
          <span>🍃</span>
          <span className="text-xl">🌼</span>
          <span>🍃</span>
          <span className="text-xl">🪔</span>
          <span>🍃</span>
          <span className="text-xl">🌼</span>
          <span>🍃</span>
        </div>

        {/* Section Heading */}
        <h2 className="font-rozha text-3xl sm:text-4xl text-[#BE185D] mb-3 drop-shadow-xs">
          भुलाबाई का प्यारा उत्सव 🌼
        </h2>

        {/* Supporting Text */}
        <p className="font-baloo text-base sm:text-lg text-stone-700 leading-relaxed max-w-lg mx-auto mb-6 font-medium">
          परंपराओं की मिठास, खुशियों भरी रात और अपनों का ढेर सारा प्यार!
        </p>

        {/* Traditional Authentic Bhulabai Setup Showcase */}
        <div className="relative mx-auto max-w-lg rounded-2xl overflow-hidden border-4 border-amber-300 shadow-2xl bg-gradient-to-b from-amber-50 to-rose-50 p-2 sm:p-3">
          {/* Traditional Arch Frame */}
          <div className="relative rounded-xl overflow-hidden shadow-inner group">
            <img
              src="/assets/bhulabai_setup.jpg"
              alt="पारंपरिक भुलाबाई-भुलोजी उत्सव"
              className="w-full h-auto max-h-[380px] object-cover rounded-lg transition-transform duration-700 group-hover:scale-102"
            />

            {/* Glowing Corner Samai/Diyas Badges */}
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400 text-amber-300 text-xs font-baloo font-bold flex items-center gap-1.5 shadow-md">
              <span>🪔</span>
              <span>पारंपरिक भुलाबाई-भुलोजी पूजन</span>
            </div>

            {/* Interactive Flower Shower Button */}
            <button
              type="button"
              onClick={handleBloomClick}
              className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-300 text-pink-700 hover:text-pink-900 text-xs font-baloo font-bold shadow-md hover:bg-white active:scale-95 transition-all flex items-center gap-1"
            >
              <span>{bloomed ? '🌸 फूल बरसे!' : '🌼 फूल बरसाएँ'}</span>
            </button>
          </div>

          {/* Cultural Subtext */}
          <div className="mt-4 p-3 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-stone-700 font-baloo leading-relaxed text-left flex items-start gap-2.5">
            <span className="text-xl shrink-0 mt-0.5">🌸</span>
            <div>
              <strong className="text-amber-900 block font-bold text-sm">
                महाराष्ट्र की पावन सांस्कृतिक परंपरा:
              </strong>
              भाद्रपद व आश्विन मास में स्थापित होने वाली भुलाबाई-भुलोजी का यह उत्सव बच्चों की मधुर हँसी, पारंपरिक गीतों और 'दूध घुटने' की स्नेहिल रस्म से परिपूर्ण होता है।
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
