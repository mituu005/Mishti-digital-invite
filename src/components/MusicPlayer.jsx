import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { toggleMusic, getIsPlaying } from '../utils/audioSynth';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    toggleMusic((playing) => {
      setIsPlaying(playing);
    });
  };

  useEffect(() => {
    const checkState = () => setIsPlaying(getIsPlaying());
    const interval = setInterval(checkState, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 select-none">
      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full border shadow-lg backdrop-blur-md transition-all duration-300 transform active:scale-95 ${
          isPlaying
            ? 'bg-pink-600/90 border-pink-300 text-white shadow-[0_0_20px_rgba(244,114,182,0.6)] animate-pulse'
            : 'bg-white/85 border-pink-200 text-stone-700 hover:text-pink-600 hover:border-pink-400 hover:bg-white'
        }`}
        title={isPlaying ? 'संगीत बंद करें' : 'मधुर बाल संगीत चालू करें'}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-pink-100 animate-spin-slow" />
            <span className="text-xs font-semibold tracking-wide font-baloo">संगीत चालू 🌸</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-medium tracking-wide font-baloo text-stone-600">मधुर धुन 🎵</span>
          </>
        )}
      </button>
    </div>
  );
}
