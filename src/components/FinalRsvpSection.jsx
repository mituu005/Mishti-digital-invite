import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Share2, Heart, MessageCircle, Check, Sparkles, Settings } from 'lucide-react';

export default function FinalRsvpSection({ babyPhoto, whatsappNumber, onOpenEdit }) {
  const [copied, setCopied] = useState(false);

  const rsvpMessage = "नमस्ते! हम मिष्टी की भुलाबाई के दूध घुटने के कार्यक्रम में ज़रूर आएँगे। 💗🌸";

  const handleWhatsAppRsvp = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#22C55E', '#EC4899', '#FBBF24']
      });
    } catch {
      // ignore
    }

    const encodedText = encodeURIComponent(rsvpMessage);
    let cleanNumber = whatsappNumber ? whatsappNumber.replace(/[^0-9]/g, '') : '';
    if (cleanNumber.length === 10) {
      cleanNumber = '91' + cleanNumber;
    }

    if (cleanNumber) {
      window.open(`https://wa.me/${cleanNumber}?text=${encodedText}`, '_blank');
    } else {
      window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
    }
  };

  const handleShareInvitation = async () => {
    const shareData = {
      title: "॥ स्नेह निमंत्रण ॥ नन्ही मिष्टी की भुलाबाई",
      text: "हमारी नन्ही मिष्टी की भुलाबाई के पारंपरिक दूध घुटने के उत्सव में आप सपरिवार सादर आमंत्रित हैं! 🌸 25 अक्टूबर 2026",
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share skipped", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } catch (err) {
        alert("निमंत्रण लिंक: " + window.location.href);
      }
    }
  };

  return (
    <section className="relative my-12 px-4 pb-16 text-center">
      <div className="max-w-xl mx-auto rounded-3xl pastel-card p-6 sm:p-10 border-2 border-pink-200 shadow-2xl relative overflow-hidden">
        {/* Soft Pink Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-200/40 via-amber-100/30 to-purple-200/40 blur-xl pointer-events-none" />

        <div className="relative z-10">
          {/* Small Decorative Floral Frame for Mishti's Photo */}
          <div className="relative inline-block mb-4">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-2 bg-gradient-to-tr from-pink-400 via-rose-300 to-amber-300 shadow-xl mx-auto animate-float-gentle">
              <img
                src={babyPhoto || '/assets/baby_mishti.jpg'}
                alt="नन्ही मिष्टी"
                className="w-full h-full object-cover object-[center_20%] rounded-full border-2 border-white"
              />
            </div>
            <span className="absolute -top-1 right-2 text-2xl select-none animate-bounce">
              👑
            </span>
            <span className="absolute bottom-1 -left-1 text-xl select-none animate-sparkle">
              ✨
            </span>
          </div>

          {/* Heading in Hindi */}
          <h2 className="font-rozha text-2xl sm:text-3xl text-[#BE185D] mb-2 leading-snug">
            नन्ही मिष्टी आपका इंतज़ार कर रही है! 🥹💗
          </h2>

          <p className="font-baloo text-base sm:text-lg text-stone-700 max-w-sm mx-auto mb-8 font-medium">
            तो फिर मिलते हैं भुलाबाई के इस प्यारे से उत्सव में!
          </p>

          {/* Action Buttons */}
          <div className="space-y-3.5 max-w-sm mx-auto">
            {/* Share Invitation Button */}
            <button
              type="button"
              id="share-invitation-btn"
              onClick={handleShareInvitation}
              className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-baloo text-base font-bold shadow-[0_8px_20px_rgba(244,114,182,0.35)] hover:shadow-[0_12px_25px_rgba(244,114,182,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all border border-pink-300"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-amber-200" />
                  <span>लिंक कॉपी हो गया! परिजनों को भेजें 🌸</span>
                </>
              ) : (
                <>
                  <Share2 className="w-5 h-5 text-amber-200" />
                  <span>निमंत्रण शेयर करें 🌸</span>
                </>
              )}
            </button>
          </div>

          {/* Family Settings Link */}
          <div className="mt-8 pt-6 border-t border-pink-200/60 flex items-center justify-center">
            <button
              type="button"
              onClick={onOpenEdit}
              className="inline-flex items-center gap-1.5 text-xs text-pink-700/80 hover:text-pink-900 font-baloo font-semibold px-3 py-1.5 rounded-full bg-pink-100/70 hover:bg-pink-100 transition-colors"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>परिवार हेतु: फोटो, समय व पता बदलें (Settings)</span>
            </button>
          </div>

          <p className="mt-4 text-[11px] text-stone-500 font-baloo">
            ॥ श्री गणेशाय नमः ॥ • २६ अक्टूबर २०२६ को विसर्जन
          </p>
        </div>
      </div>
    </section>
  );
}
