const testimonials = [
  {
    name: 'Kwame Mensah',
    quote: 'STUCCORD transformed our online presence. Their creativity and professionalism are unmatched!'
  },
  {
    name: 'Linda Boateng',
    quote: 'The team delivered a stunning website and branding. We saw results fast!'
  },
  {
    name: 'Samuel Owusu',
    quote: 'Their SaaS and SEO expertise helped us scale globally. Highly recommended.'
  },
];

export default function TestimonialsCarousel() {
  // Placeholder for carousel animation
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
        <div className="relative flex flex-col gap-8 items-center">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 shadow-md max-w-xl mx-auto animate-fade-in">
              <p className="text-lg md:text-xl font-medium mb-4">“{t.quote}”</p>
              <footer className="text-sm text-neutral-500">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
