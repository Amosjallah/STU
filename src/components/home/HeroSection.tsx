export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] py-28 text-center bg-gradient-to-b from-black via-brand/80 to-white dark:from-black dark:via-brand/80 dark:to-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-r from-brand/30 via-blue-500/20 to-transparent blur-3xl opacity-60" />
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-r from-white via-brand to-blue-500 bg-clip-text text-transparent drop-shadow-xl">
        WE'RE CREATIVE
        <span className="block text-3xl md:text-5xl font-light mt-2">Grow Your Brand Beyond Boundaries</span>
      </h1>
      <p className="max-w-2xl mx-auto text-xl md:text-2xl text-neutral-200 mb-10 font-medium">
        STUCCORD is your trusted partner in maintaining and enhancing performance. We help ambitious brands and teams connect, innovate, and thrive in a digital-first world.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a href="/services" className="px-10 py-4 rounded-full bg-gradient-to-r from-brand to-blue-500 text-white font-bold shadow-xl hover:scale-105 transition-transform text-lg">Get Started</a>
        <a href="/contact" className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-brand transition-colors text-lg">Contact Us</a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <span className="inline-block px-6 py-2 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 shadow">Web Development</span>
        <span className="inline-block px-6 py-2 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 shadow">UI/UX Design</span>
        <span className="inline-block px-6 py-2 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 shadow">SaaS Solutions</span>
        <span className="inline-block px-6 py-2 rounded-full bg-white/10 text-white font-semibold text-base border border-white/20 shadow">SEO & Marketing</span>
      </div>
    </section>
  );
}
