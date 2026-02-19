export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] py-20 text-center bg-gradient-to-b from-black via-neutral-900 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
        WE'RE CREATIVE – <span className="block">Grow Your Brand Beyond Boundaries</span>
      </h1>
      <p className="max-w-xl mx-auto text-lg md:text-2xl text-neutral-200 mb-8">
        Connecting Teams Around The World
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/services" className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Get Started</a>
        <a href="/contact" className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition-colors">Contact Us</a>
      </div>
    </section>
  );
}
