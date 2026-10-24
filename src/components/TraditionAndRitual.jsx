import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function TraditionAndRitual() {
  return (
    <section className="relative my-12 px-4">
      <div className="max-w-2xl mx-auto rounded-3xl pastel-card p-6 sm:p-8 border-2 border-pink-200 shadow-xl overflow-hidden text-center">
        {/* Section Heading */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold mb-3 border border-pink-200">
          <span>🥛</span>
          <span>पारंपरिक दूध घुटने का पावन संस्कार</span>
          <span>🌸</span>
        </div>

        <h2 className="font-rozha text-3xl sm:text-4xl text-[#BE185D] mb-3 drop-shadow-xs">
          हमारी परंपरा, हमारी खुशियाँ! 🌸
        </h2>

        <p className="font-baloo text-base sm:text-lg text-stone-700 leading-relaxed max-w-lg mx-auto mb-6 font-medium">
          नन्हे बच्चों की मुस्कान, पारंपरिक गीतों की मिठास और अपनों के साथ मिलकर इस खूबसूरत परंपरा का आनंद उठाएँ!
        </p>

        {/* Symbolic Silver Bowl of Milk (दूध घुटने) Image Showcase */}
        <div className="relative mx-auto max-w-lg rounded-2xl overflow-hidden border-4 border-amber-300 shadow-xl bg-white p-2">
          <img
            src="/assets/doodh_ghutne.jpg"
            alt="पारंपरिक दूध घुटने का शुभ संस्कार"
            className="w-full h-auto max-h-[360px] object-cover rounded-xl"
          />
          <div className="p-3 bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 rounded-b-xl border-t border-pink-100 text-xs text-stone-700 font-baloo text-left flex items-center justify-between">
            <span className="font-bold text-pink-900 flex items-center gap-1.5">
              <span>🥛</span>
              केसर युक्त मीठा दूध, सूखे मेवे व गुलाब की पंखुड़ियाँ
            </span>
            <span className="text-amber-600 font-bold">✨ पवित्र रस्म</span>
          </div>
        </div>

        {/* Traditional Elements Explanation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
          <div className="p-3.5 rounded-2xl bg-white/80 border border-pink-100 shadow-xs text-center">
            <span className="text-3xl block mb-1">🎶</span>
            <h4 className="font-baloo font-bold text-pink-900 text-sm">भुलाबाई के पारंपरिक गीत</h4>
            <p className="text-[11px] text-stone-600 font-baloo mt-0.5">
              बच्चों द्वारा गाए जाने वाले बालगीत व पारंपरिक उखाणे
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 border border-pink-100 shadow-xs text-center">
            <span className="text-3xl block mb-1">🥛</span>
            <h4 className="font-baloo font-bold text-pink-900 text-sm">दूध घुटने का अमृत</h4>
            <p className="text-[11px] text-stone-600 font-baloo mt-0.5">
              नन्ही मिष्टी के दीर्घायु व आरोग्य का मंगल आशीर्वाद
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/80 border border-pink-100 shadow-xs text-center">
            <span className="text-3xl block mb-1">🌼</span>
            <h4 className="font-baloo font-bold text-pink-900 text-sm">प्रसादम व खिलखिलाहट</h4>
            <p className="text-[11px] text-stone-600 font-baloo mt-0.5">
              सभी बच्चों व परिजनों में मिठास और खुशियों का वितरण
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
