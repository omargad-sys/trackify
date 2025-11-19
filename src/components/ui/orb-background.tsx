interface OrbBackgroundProps {
  className?: string;
}

export const OrbBackground = ({ className = '' }: OrbBackgroundProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 -z-10 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 ${className}`}
        style={{ pointerEvents: 'none' }}
      />
      <div
        className="fixed inset-0 -z-10"
        style={{
          pointerEvents: 'none',
          background: `
            radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%)
          `,
          animation: 'orbFloat 20s ease-in-out infinite'
        }}
      />
      <style>{`
        @keyframes orbFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </>
  );
};
