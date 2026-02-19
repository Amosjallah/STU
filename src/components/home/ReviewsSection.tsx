export default function ReviewsSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-brand to-blue-500 text-white text-center">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">★ 4.9</span>
          <span className="text-lg md:text-2xl font-semibold tracking-wide">Trustpilot</span>
        </div>
        <div className="text-3xl md:text-4xl font-bold mb-2">25,000+ Verified Reviews</div>
        <div className="flex gap-1 justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-300 text-3xl md:text-4xl">★</span>
          ))}
        </div>
        <p className="text-white/90 text-lg max-w-2xl mx-auto">Rated by thousands of happy clients worldwide. Our commitment to excellence and results has earned us the trust of brands across industries and continents.</p>
      </div>
    </section>
  );
}
