export default function CTABanner() {
  return (
    <section className="py-12 bg-black dark:bg-neutral-900 text-white text-center mt-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to grow your brand?</h2>
        <p className="mb-6 text-lg">Let’s take your business beyond boundaries. Partner with STUCCORD today.</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Start a Conversation</a>
      </div>
    </section>
  );
}
