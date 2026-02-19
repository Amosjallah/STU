export default function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-brand to-blue-500 text-white text-center mt-20 rounded-3xl shadow-2xl mx-4 md:mx-0">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Ready to grow your brand?</h2>
        <p className="mb-8 text-lg md:text-2xl max-w-2xl mx-auto font-medium">Let’s take your business beyond boundaries. Partner with <span className="font-bold text-white underline underline-offset-4">STUCCORD</span> and experience the power of creative technology, strategy, and design.</p>
        <a href="/contact" className="inline-block px-12 py-4 rounded-full bg-white text-brand font-bold text-lg shadow-xl hover:scale-105 hover:bg-blue-100 transition-transform">Start a Conversation</a>
        <p className="mt-6 text-sm opacity-80">No obligation. Just a friendly chat about your goals.</p>
      </div>
    </section>
  );
}
