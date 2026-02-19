const services = [
  {
    title: 'Graphic Design',
    desc: 'Bold, creative visuals and branding that make your business stand out.',
    details: '/services/graphic-design',
    icon: '🎨',
  },
  {
    title: 'Website Design & Development',
    desc: 'Modern, scalable websites and web apps built for performance and growth.',
    details: '/services/web-development',
    icon: '🌐',
  },
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Get found online and grow your organic reach with expert SEO.',
    details: '/services/seo',
    icon: '🚀',
  },
  {
    title: 'Social Media Marketing (SMM)',
    desc: 'Strategic campaigns to boost your brand and engage your audience.',
    details: '/services/smm',
    icon: '📱',
  },
  {
    title: 'SaaS (Software as a Service)',
    desc: 'Custom SaaS solutions to power your business and connect your teams.',
    details: '/services/saas',
    icon: '☁️',
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl p-8 bg-neutral-100 dark:bg-neutral-900 shadow-lg hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-fuchsia-500 flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">{service.desc}</p>
            </div>
            <a href={service.details} className="inline-block mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-transform">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
}
