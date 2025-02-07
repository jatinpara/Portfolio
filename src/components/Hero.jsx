import { HERO_CONTENT } from '../constants';

function Hero() {
  return (
    <div className="border-b pb-12 lg:mb-20 flex justify-center">
      {/* Centered Container */}
      <div className="flex flex-col items-center text-center max-w-6xl">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Jatin <span className="text-purple-500">Parashar</span>
        </h1>
        <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl sm:text-4xl font-semibold text-transparent mt-4">
          Aspiring Full Stack Developer
        </span>
        <p className="mt-6 text-lg sm:text-2xl font-light leading-relaxed text-neutral-600">
          {HERO_CONTENT}
        </p>
      </div>
    </div>
  );
}

export default Hero;
