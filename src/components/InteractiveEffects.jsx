import React, { useEffect, useState, useRef } from 'react';

export default function InteractiveEffects() {
  const [particles, setParticles] = useState([]);
  const canvasRef = useRef(null);

  // Handle click or touch anywhere on screen to spawn cute hearts/stars/flowers
  const handleScreenClick = (e) => {
    const x = e.clientX || (e.touches && e.touches[0]?.clientX) || window.innerWidth / 2;
    const y = e.clientY || (e.touches && e.touches[0]?.clientY) || window.innerHeight / 2;

    const symbols = ['🌸', '💗', '✨', '🌼', '💖', '👶', '🧸', '⭐'];
    const newParticles = Array.from({ length: 4 }).map((_, i) => ({
      id: Date.now() + Math.random() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 40 - 20),
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      angle: Math.random() * 360,
      scale: 0.8 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 60,
      vy: -40 - Math.random() * 50
    }));

    setParticles((prev) => [...prev.slice(-20), ...newParticles]);
  };

  useEffect(() => {
    window.addEventListener('click', handleScreenClick);
    return () => window.removeEventListener('click', handleScreenClick);
  }, []);

  // Remove old particles after 1.4 seconds
  useEffect(() => {
    if (particles.length === 0) return;
    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(4));
    }, 1200);
    return () => clearTimeout(timer);
  }, [particles]);

  // Gentle falling petals and sparkles on a lightweight canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle drifting marigold and jasmine petals
    const petals = Array.from({ length: 24 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 5 + Math.random() * 7,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: 0.4 + Math.random() * 0.8,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      // Rose petal pink, marigold orange-yellow, or jasmine white
      color: Math.random() > 0.5 
        ? 'rgba(244, 114, 182, 0.45)' 
        : Math.random() > 0.5 
          ? 'rgba(251, 191, 36, 0.4)' 
          : 'rgba(254, 240, 138, 0.5)'
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background Petal Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-10 opacity-70"
      />

      {/* Interactive Tap Particles */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute select-none pointer-events-none transition-all duration-1000 ease-out transform"
            style={{
              left: `${p.x}px`,
              top: `${p.y}px`,
              transform: `translate(${p.vx}px, ${p.vy}px) scale(${p.scale})`,
              fontSize: '22px',
              opacity: 0.9,
              animation: 'floatGentle 1.2s forwards'
            }}
          >
            {p.symbol}
          </div>
        ))}
      </div>

      {/* Floating Gentle Butterflies (Mobile & Desktop) */}
      <div className="fixed top-24 left-6 pointer-events-none z-20 animate-butterfly opacity-75 hidden sm:block">
        <span className="text-3xl filter drop-shadow-md">🦋</span>
      </div>
      <div 
        className="fixed bottom-36 right-8 pointer-events-none z-20 animate-butterfly opacity-70" 
        style={{ animationDelay: '-3.5s', animationDuration: '9s' }}
      >
        <span className="text-2xl filter drop-shadow-md">🦋</span>
      </div>
    </>
  );
}
