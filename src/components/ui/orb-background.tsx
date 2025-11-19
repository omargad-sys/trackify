import { useEffect, useRef } from 'react';

interface OrbBackgroundProps {
  className?: string;
}

export const OrbBackground = ({ className = '' }: OrbBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Orb configuration
    const orbs = [
      { x: 0.2, y: 0.3, radius: 300, color: 'rgba(139, 92, 246, 0.15)', dx: 0.3, dy: 0.2 },
      { x: 0.7, y: 0.6, radius: 250, color: 'rgba(236, 72, 153, 0.12)', dx: -0.2, dy: 0.3 },
      { x: 0.5, y: 0.5, radius: 200, color: 'rgba(59, 130, 246, 0.1)', dx: 0.25, dy: -0.25 },
    ];

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      orbs.forEach((orb, index) => {
        const x = canvas.width * orb.x + Math.sin(time + index) * 50;
        const y = canvas.height * orb.y + Math.cos(time + index * 1.5) * 50;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.filter = 'blur(40px)';
        ctx.fillRect(x - orb.radius, y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};
