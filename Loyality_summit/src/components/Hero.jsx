import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center py-16 min-h-screen w-full bg-gray-50 overflow-hidden"
    >
      {/* soft radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_60%)]" />

      {/* floating blob for subtle motion */}
      <div className="pointer-events-none absolute -left-24 top-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />

      {/* main content */}
      <div className="relative z-10 flex flex-col items-center px-6 flex-grow justify-center text-center">
        {/* logo fade/slide in */}
        <img
          src={logo}
          alt="Event Logo"
          className="w-4/5 md:w-3/5 max-w-2xl object-contain mb-10
                     opacity-0 translate-y-4 animate-heroFadeIn"
        />

        {/* tagline */}
        <p
          className="text-lg md:text-2xl font-medium text-indigo-600 mb-8 max-w-3xl
                     opacity-0 translate-y-4 animate-heroFadeIn delay-150"
        >
          Driving revenue &amp; building relations through CX transformation &amp; increased
          brand loyalty
        </p>

        {/* date + location */}
        <div
          className="flex flex-col items-center mb-10
                     opacity-0 translate-y-4 animate-heroFadeIn delay-300"
        >
          <p className="text-xl md:text-3xl font-bold text-gray-800 tracking-wider">
            1st - 2nd November 2023
          </p>
          <p className="text-lg md:text-xl font-medium text-gray-600 tracking-widest uppercase mt-2">
            Dubai, UAE
          </p>
        </div>

        {/* CTA button with pulse + hover */}
        <div
          className="mt-4 opacity-0 translate-y-4 animate-heroFadeIn delay-500"
        >
          <button
            className="px-10 py-4 text-xl font-extrabold text-white bg-red-600 rounded-full
                       shadow-[0_20px_40px_rgba(220,38,38,0.4)]
                       transition-transform transition-shadow duration-300
                       hover:bg-red-700 hover:scale-105 hover:shadow-[0_25px_55px_rgba(220,38,38,0.5)]
                       focus:outline-none focus:ring-4 focus:ring-red-300
                       animate-heroPulse"
          >
            REGISTER TODAY
          </button>
        </div>
      </div>

      {/* keyframes (can move to global CSS if preferred) */}
      <style jsx>{`
        @keyframes heroFadeIn {
          0% {
            opacity: 0;
            transform: translateY(1rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroPulse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        .animate-heroFadeIn {
          animation: heroFadeIn 0.7s ease-out forwards;
        }
        .animate-heroPulse {
          animation: heroPulse 2.4s ease-in-out infinite;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}
