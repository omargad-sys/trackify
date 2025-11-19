interface OrbBackgroundProps {
  className?: string;
}

export const OrbBackground = ({ className = '' }: OrbBackgroundProps) => {
  return (
    <>
      {/* Base gradient */}
      <div
        className={`fixed inset-0 -z-10 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-950 dark:to-pink-950 ${className}`}
        style={{ pointerEvents: 'none' }}
      />

      {/* Subtle floating orbs */}
      <div
        className="fixed inset-0 -z-10 opacity-40"
        style={{
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 85% 80%, rgba(236, 72, 153, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 35%)
          `,
          animation: 'orbFloat 25s ease-in-out infinite'
        }}
      />

      {/* Mesh gradient overlay for depth */}
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(236, 72, 153, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      <style>{`
        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            filter: blur(60px);
          }
          25% {
            transform: translate(50px, -40px) scale(1.15);
            filter: blur(80px);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.95);
            filter: blur(70px);
          }
          75% {
            transform: translate(40px, 20px) scale(1.05);
            filter: blur(75px);
          }
        }
      `}</style>
    </>
  );
};
