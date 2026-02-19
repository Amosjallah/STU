const testimonials = [
  {
    name: 'Kwame Mensah',
    title: 'CEO, GoldTech Solutions',
    quote: 'STUCCORD transformed our online presence. Their creativity and professionalism are unmatched! We saw a 200% increase in engagement within months.'
  },
  {
    name: 'Linda Boateng',
    title: 'Marketing Lead, KofCity Brands',
    quote: 'The team delivered a stunning website and branding. We saw results fast! Their process was smooth, transparent, and truly collaborative.'
  },
  {
    name: 'Samuel Owusu',
    title: 'Founder, SaaSify Africa',
    quote: 'Their SaaS and SEO expertise helped us scale globally. Highly recommended for any business looking to grow beyond boundaries.'
  },
  {
    name: 'Fatima Sarpong',
    title: 'COO, Creative Ghana',
    quote: 'STUCCORD’s UI/UX and marketing strategy took our product to the next level. The results speak for themselves!'
  },
  {
    name: 'John Mensah',
    title: 'Director, EduConnect',
    quote: 'Professional, innovative, and always on time. STUCCORD is our go-to partner for all things digital.'
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-blue-950 dark:to-black">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">What Our Clients Say</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="bg-white dark:bg-neutral-900 rounded-3xl p-10 shadow-xl border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between h-full animate-fade-in">
              <p className="text-xl md:text-2xl font-medium mb-6 text-neutral-700 dark:text-neutral-200">“{t.quote}”</p>
              <footer className="text-left mt-auto">
                <span className="block font-bold text-brand text-lg">{t.name}</span>
                <span className="block text-sm text-blue-500 font-medium">{t.title}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
