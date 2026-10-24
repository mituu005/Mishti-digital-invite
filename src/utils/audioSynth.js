// Web Audio API Synthesizer for gentle, soothing traditional festive lullaby (Raag Bhupali / Yaman baby melody)

let audioCtx = null;
let isPlaying = false;
let masterGain = null;
let intervalId = null;

// Auspicious pentatonic festive notes (Sa, Re, Ga, Pa, Dha - C, D, E, G, A)
const notes = [
  261.63, // C4 (Sa)
  293.66, // D4 (Re)
  329.63, // E4 (Ga)
  392.00, // G4 (Pa)
  440.00, // A4 (Dha)
  523.25, // C5 (Taar Sa)
  587.33, // D5 (Taar Re)
  659.25  // E5 (Taar Ga)
];

// Soothing lullaby note sequence
const melodyPattern = [
  0, 2, 4, 2, 1, 3, 2, 0,
  4, 5, 4, 3, 2, 1, 0, 2,
  3, 4, 2, 0, 1, 2, 4, 5,
  4, 3, 2, 1, 0, 2, 1, 0
];

function playBellTone(freq, time, duration = 1.2, volume = 0.15) {
  if (!audioCtx || !masterGain) return;

  const osc = audioCtx.createOscillator();
  const noteGain = audioCtx.createGain();

  // Gentle flute/harp style sound with sine and triangle waves
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, time);

  // Soft envelope
  noteGain.gain.setValueAtTime(0.001, time);
  noteGain.gain.exponentialRampToValueAtTime(volume, time + 0.08);
  noteGain.gain.exponentialRampToValueAtTime(0.001, time + duration);

  osc.connect(noteGain);
  noteGain.connect(masterGain);

  osc.start(time);
  osc.stop(time + duration);
}

function playTanpuraDrone(time) {
  if (!audioCtx || !masterGain) return;

  // Drone notes Sa & Pa
  [130.81, 196.00].forEach((freq) => {
    const osc = audioCtx.createOscillator();
    const droneGain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    droneGain.gain.setValueAtTime(0.001, time);
    droneGain.gain.linearRampToValueAtTime(0.03, time + 1.0);
    droneGain.gain.exponentialRampToValueAtTime(0.001, time + 4.0);

    osc.connect(droneGain);
    droneGain.connect(masterGain);

    osc.start(time);
    osc.stop(time + 4.2);
  });
}

export function startMusic() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (masterGain) {
      masterGain.disconnect();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    isPlaying = true;
    let step = 0;

    const playNext = () => {
      if (!isPlaying || !audioCtx) return;

      const now = audioCtx.currentTime;
      const noteIdx = melodyPattern[step % melodyPattern.length];
      const freq = notes[noteIdx];

      playBellTone(freq, now, 1.4, 0.18);

      // Add soft tanpura drone every 8 steps
      if (step % 8 === 0) {
        playTanpuraDrone(now);
      }

      step++;
    };

    // Play every 750ms for a peaceful, tranquil lullaby pace
    playNext();
    intervalId = setInterval(playNext, 750);
    return true;
  } catch (e) {
    console.error('Audio synthesizer error:', e);
    return false;
  }
}

export function stopMusic() {
  isPlaying = false;
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (masterGain && audioCtx) {
    try {
      masterGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
    } catch {
      // ignore
    }
  }
}

export function toggleMusic(callback) {
  if (isPlaying) {
    stopMusic();
    if (callback) callback(false);
    return false;
  } else {
    const success = startMusic();
    if (callback) callback(success);
    return success;
  }
}

export function getIsPlaying() {
  return isPlaying;
}
