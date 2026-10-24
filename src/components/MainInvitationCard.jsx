import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function MainInvitationCard({ hostFamily }) {
  return (
    <section className="relative my-12 px-4">
      <div className="max-w-xl mx-auto rounded-3xl pastel-card-gold p-6 sm:p-10 relative overflow-hidden shadow-2xl">
        {/* Subtle Ornamental Corner Details */}
        <div className="absolute top-4 left-4 text-amber-500 text-lg select-none">⚜️</div>
        <div className="absolute top-4 right-4 text-amber-500 text-lg select-none">⚜️</div>
        <div className="absolute bottom-4 left-4 text-amber-500 text-lg select-none">⚜️</div>
        <div className="absolute bottom-4 right-4 text-amber-500 text-lg select-none">⚜️</div>

        {/* Traditional Auspicious Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold mb-3 border border-pink-200">
            <span>🌸</span>
            <span>॥ श्री गणेशाय नमः ॥</span>
            <span>🌸</span>
          </div>

          <h2 className="font-rozha text-3xl sm:text-4xl text-[#BE185D] tracking-wide mb-1 drop-shadow-xs">
            ॥ सप्रेम निमंत्रण ॥
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto my-2" />
        </div>

        {/* The Exact Hindi Invitation Body */}
        <div className="font-tiro text-base sm:text-lg text-stone-800 leading-relaxed sm:leading-loose text-center space-y-4 px-2">
          <p className="font-medium text-pink-950">
            हमारी लाडली मिष्टी की भुलाबाई विराजमान हुई हैं। इस शुभ अवसर पर आयोजित पारंपरिक दूध घुटने के कार्यक्रम में आप सपरिवार सादर आमंत्रित हैं।
          </p>

          <p className="font-medium text-stone-700">
            आप सभी से विनम्र निवेदन है कि पधारकर इस खुशी को हमारे साथ बाँटें और नन्ही मिष्टी को अपना ढेर सारा प्यार और आशीर्वाद दें।
          </p>

          <p className="font-semibold text-rose-700 text-lg sm:text-xl font-baloo pt-1">
            आपकी उपस्थिति हमारे उत्सव की खुशियों को और भी बढ़ा देगी! 💕
          </p>
        </div>

        {/* Traditional Toran Floral Divider */}
        <div className="my-6 flex items-center justify-center gap-2 text-stone-400">
          <div className="h-px w-12 bg-amber-300" />
          <span className="text-amber-500">🌼 🌸 🌼</span>
          <div className="h-px w-12 bg-amber-300" />
        </div>

        {/* Host Family Signature */}
        <div className="text-center pt-1">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-widest font-baloo block mb-1">
            — निमंत्रक —
          </span>
          <p className="font-rozha text-lg sm:text-xl text-stone-800">
            {hostFamily || "समस्त स्नेहीजन एवं परिवार"}
          </p>
          <p className="font-baloo text-xs text-pink-600 mt-1">
            (मिष्टी के माता-पिता एवं समस्त परिजन)
          </p>
        </div>
      </div>
    </section>
  );
}
