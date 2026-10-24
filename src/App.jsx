import React, { useState, useEffect } from 'react';
import InteractiveEffects from './components/InteractiveEffects';
import MusicPlayer from './components/MusicPlayer';
import OpeningEnvelope from './components/OpeningEnvelope';
import HeroSection from './components/HeroSection';
import BhulabaiSection from './components/BhulabaiSection';
import MainInvitationCard from './components/MainInvitationCard';
import CalendarCard from './components/CalendarCard';
import TraditionAndRitual from './components/TraditionAndRitual';
import KidsFunZone from './components/KidsFunZone';
import FinalRsvpSection from './components/FinalRsvpSection';
import EditDetailsModal from './components/EditDetailsModal';
import { Mail, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Load customizable details from localStorage or use defaults
  const [details, setDetails] = useState(() => {
    const saved = localStorage.getItem('mishti_invitation_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...parsed,
          babyPhoto: parsed.babyPhoto?.startsWith('data:') ? parsed.babyPhoto : '/assets/baby_mishti.jpg',
          whatsappNumber: parsed.whatsappNumber || '9021397284'
        };
      } catch {
        // fallback
      }
    }
    return {
      babyPhoto: '/assets/baby_mishti.jpg',
      eventTime: 'शाम 6:00 बजे (6:00 PM)',
      venueAddress: 'श्री गणेश कृपा, [यहाँ कार्यक्रम का पूरा पता लिखें], पुणे',
      whatsappNumber: '9021397284',
      hostFamily: 'समस्त स्नेहीजन एवं परिवार'
    };
  });

  const handleSaveDetails = (newDetails) => {
    setDetails(newDetails);
    localStorage.setItem('mishti_invitation_config', JSON.stringify(newDetails));
  };

  return (
    <div className="relative min-h-screen text-stone-800">
      {/* Background Interactive Effects (Falling Petals, Taps, Butterflies) */}
      <InteractiveEffects />

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Opening Screen - 3D Envelope */}
      {!isEnvelopeOpen && (
        <OpeningEnvelope
          onOpen={() => setIsEnvelopeOpen(true)}
          babyPhoto={details.babyPhoto}
        />
      )}

      {/* Main Invitation Content (Visible after envelope opens) */}
      {isEnvelopeOpen && (
        <main className="relative z-20 pb-20 transition-opacity duration-1000 animate-fade-in">
          {/* Top Traditional Hanging Toran Garland */}
          <header className="sticky top-0 z-30 flex justify-center pointer-events-none select-none">
            <div className="flex items-center space-x-1 sm:space-x-2 px-6 py-2 bg-gradient-to-r from-amber-400 via-rose-300 to-amber-400 rounded-b-3xl shadow-lg border-b-2 border-amber-300 animate-sway pointer-events-auto">
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
          </header>

          {/* Re-fold Envelope Control for User Experience */}
          <div className="text-center pt-3 pb-1">
            <button
              type="button"
              onClick={() => setIsEnvelopeOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 hover:bg-pink-200 border border-pink-200 text-pink-700 text-xs font-baloo font-semibold transition-all shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>लिफ़ाफ़ा दोबारा बंद करें (Re-fold Envelope)</span>
            </button>
          </div>

          {/* 1. Hero Section - Our Little Princess */}
          <HeroSection
            babyPhoto={details.babyPhoto}
            onOpenEdit={() => setIsEditModalOpen(true)}
          />

          {/* 2. Bhulabai Tradition & Setup */}
          <BhulabaiSection />

          {/* 3. Main Invitation Card (Exact Hindi Text) */}
          <MainInvitationCard
            hostFamily={details.hostFamily}
          />

          {/* 4. Event Details & Live Countdown */}
          <CalendarCard
            eventTime={details.eventTime}
            venueAddress={details.venueAddress}
            onOpenEdit={() => setIsEditModalOpen(true)}
          />

          {/* 5. Traditional Celebration & Doodh Ghutne Ritual */}
          <TraditionAndRitual />

          {/* 6. Children's Fun Zone */}
          <KidsFunZone />

          {/* 7. Final RSVP & WhatsApp Sharing */}
          <FinalRsvpSection
            babyPhoto={details.babyPhoto}
            whatsappNumber={details.whatsappNumber}
            onOpenEdit={() => setIsEditModalOpen(true)}
          />

          {/* Footer */}
          <footer className="text-center py-8 px-4 text-xs font-baloo text-stone-500 border-t border-pink-200/50 bg-white/40">
            <p className="flex items-center justify-center gap-1.5 text-pink-700 font-semibold mb-1">
              <span>🌸</span>
              <span>॥ नन्ही मिष्टी की भुलाबाई • २८ अक्टूबर २०२६ ॥</span>
              <span>🌸</span>
            </p>
            <p className="text-[11px] text-stone-500">
              प्यार और परंपरा के संगम के साथ तैयार किया गया डिजिटल निमंत्रण पत्र
            </p>
          </footer>
        </main>
      )}

      {/* Edit Details Modal */}
      <EditDetailsModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        details={details}
        onSave={handleSaveDetails}
      />
    </div>
  );
}
