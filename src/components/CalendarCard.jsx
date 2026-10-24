import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Heart, Sparkles, Bell, Compass } from 'lucide-react';

export default function CalendarCard({ eventTime, venueAddress, onOpenEdit }) {
  // Target date: 25 October 2026
  const targetDate = new Date('2026-10-25T18:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Add to Google Calendar handler
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("नन्ही मिष्टी की भुलाबाई — दूध घुटने का उत्सव");
    const details = encodeURIComponent("हमारी लाडली मिष्टी की भुलाबाई के शुभ अवसर पर दूध घुटने का पारंपरिक उत्सव।");
    const location = encodeURIComponent(venueAddress || "श्री गणेश कृपा, पुणे");
    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20261025T123000Z/20261025T163000Z&details=${details}&location=${location}`;
    window.open(gcalUrl, '_blank');
  };

  // Open Maps handler
  const handleOpenMaps = () => {
    const query = encodeURIComponent(venueAddress || "पुणे, महाराष्ट्र");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  // Calendar days for October 2026
  // October 1, 2026 is a Thursday (Sun=0, Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6)
  const daysInOctober = 31;
  const startDay = 4; // Thursday

  return (
    <section className="relative my-12 px-4">
      <div className="max-w-xl mx-auto rounded-3xl pastel-card p-6 sm:p-8 border-2 border-pink-200 shadow-xl relative overflow-hidden">
        {/* Soft Background Ornaments */}
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-pink-100/50 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-amber-100/50 blur-2xl pointer-events-none" />

        {/* Section Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100/80 text-rose-800 text-xs font-bold mb-2">
            <span>🌙</span>
            <span>शुभ मुहूर्त एवं विवरण</span>
            <span>🌸</span>
          </div>
          <h2 className="font-rozha text-3xl sm:text-4xl text-[#BE185D] drop-shadow-xs">
            कार्यक्रम विवरण 📅
          </h2>
          <p className="font-baloo text-sm text-stone-600 mt-1">
            कृपया तारीख और समय नोट कर लें और सपरिवार पधारें
          </p>
        </div>

        {/* Adorable October 2026 Mini Calendar Grid */}
        <div className="mb-6 bg-gradient-to-br from-pink-50/80 via-white to-rose-50/80 rounded-2xl p-4 border border-pink-100 shadow-inner">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-pink-200/60">
            <span className="font-baloo font-bold text-pink-800 text-base flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4 text-pink-500" />
              अक्टूबर २०२६ (October 2026)
            </span>
            <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full border border-amber-300">
              शुभ रविवार 🌸
            </span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-baloo text-xs font-semibold text-stone-500 mb-1">
            <span className="text-rose-600">रवि</span>
            <span>सोम</span>
            <span>मंगल</span>
            <span>बुध</span>
            <span>गुरु</span>
            <span>शुक्र</span>
            <span>शनि</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center font-baloo text-xs">
            {/* Blank offset days */}
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="p-1.5" />
            ))}

            {/* October days */}
            {Array.from({ length: daysInOctober }).map((_, i) => {
              const day = i + 1;
              const isEventDay = day === 25;

              return (
                <div
                  key={day}
                  className={`p-1.5 rounded-lg transition-all relative flex flex-col items-center justify-center ${
                    isEventDay
                      ? 'bg-gradient-to-br from-pink-500 to-rose-600 text-white font-extrabold shadow-md transform scale-110 z-10 animate-pulse'
                      : 'text-stone-700 hover:bg-pink-100/60'
                  }`}
                >
                  <span>{day}</span>
                  {isEventDay && (
                    <span className="text-[9px] -mt-0.5 leading-none">❤️</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Details Cards */}
        <div className="space-y-3.5 mb-6">
          {/* Date */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-pink-100 shadow-xs">
            <div className="p-2.5 rounded-xl bg-pink-100 text-pink-600 shrink-0">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-pink-500 block">तारीख (Date):</span>
              <p className="font-baloo font-bold text-base sm:text-lg text-stone-800">
                २५ अक्टूबर २०२६, रविवार (Sunday, 25 Oct 2026)
              </p>
            </div>
          </div>

          {/* Event Name */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-pink-100 shadow-xs">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 shrink-0">
              <span className="text-lg">🌙</span>
            </div>
            <div>
              <span className="text-xs font-bold text-purple-500 block">कार्यक्रम (Event):</span>
              <p className="font-baloo font-bold text-base sm:text-lg text-stone-800">
                भुलाबाई का दूध घुटने का पारंपरिक उत्सव
              </p>
              <p className="text-xs text-stone-500 font-baloo mt-0.5">
                (पारंपरिक गीत, भुलाबाई-भुलोजी पूजन व प्रसादम)
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-pink-100 shadow-xs relative group">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-amber-600 block">समय (Time):</span>
              <p className="font-baloo font-bold text-base sm:text-lg text-stone-800">
                {eventTime || "शाम 6:00 बजे (6:00 PM)"}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenEdit}
              className="text-xs font-baloo text-pink-600 hover:text-pink-800 underline self-center px-2 py-1"
            >
              बदलें
            </button>
          </div>

          {/* Venue */}
          <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/90 border border-pink-100 shadow-xs relative group">
            <div className="p-2.5 rounded-xl bg-rose-100 text-rose-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-rose-600 block">स्थान (Venue / Address):</span>
              <p className="font-baloo font-bold text-base text-stone-800 leading-snug">
                {venueAddress || "[यहाँ कार्यक्रम का पूरा पता लिखें] — श्री गणेश कृपा, पुणे"}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenEdit}
              className="text-xs font-baloo text-pink-600 hover:text-pink-800 underline self-center px-2 py-1"
            >
              बदलें
            </button>
          </div>
        </div>

        {/* Live Countdown to 25 October 2026 */}
        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white p-4 shadow-lg text-center mb-6">
          <div className="text-xs font-bold tracking-wider uppercase text-pink-100 mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            उत्सव शुरू होने में शेष समय (Countdown)
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          </div>

          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30">
              <span className="block font-rozha text-2xl sm:text-3xl font-bold leading-tight">
                {timeLeft.days}
              </span>
              <span className="text-[11px] font-baloo text-pink-100">दिन</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30">
              <span className="block font-rozha text-2xl sm:text-3xl font-bold leading-tight">
                {timeLeft.hours}
              </span>
              <span className="text-[11px] font-baloo text-pink-100">घंटे</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30">
              <span className="block font-rozha text-2xl sm:text-3xl font-bold leading-tight">
                {timeLeft.minutes}
              </span>
              <span className="text-[11px] font-baloo text-pink-100">मिनट</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 border border-white/30">
              <span className="block font-rozha text-2xl sm:text-3xl font-bold leading-tight">
                {timeLeft.seconds}
              </span>
              <span className="text-[11px] font-baloo text-pink-100">सेकंड</span>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            type="button"
            onClick={handleAddToCalendar}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-pink-100 hover:bg-pink-200 text-pink-800 font-baloo font-bold text-sm shadow-xs transition-colors"
          >
            <Bell className="w-4 h-4 text-pink-600" />
            कैलेंडर में जोड़ें (Add to Cal)
          </button>
          <button
            type="button"
            onClick={handleOpenMaps}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-baloo font-bold text-sm shadow-xs transition-colors"
          >
            <Compass className="w-4 h-4 text-amber-600" />
            स्थान का नक्शा देखें (Maps)
          </button>
        </div>
      </div>
    </section>
  );
}
