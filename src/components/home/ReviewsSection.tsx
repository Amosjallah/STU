export default function ReviewsSection() {
  return (
    <section className="py-10 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-2">
          <span className="text-3xl font-bold">★ 4.9</span>
          <span className="text-lg">Trustpilot</span>
        </div>
        <div className="text-2xl font-semibold mb-2">25,000+ Reviews</div>
        <div className="flex gap-1 justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-300 text-2xl">★</span>
          ))}
        </div>
        <p className="text-white/90">Rated by thousands of happy clients worldwide</p>
      </div>
    </section>
  );
}
