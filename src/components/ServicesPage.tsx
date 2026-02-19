const services = [
  {
    title: 'Graphic Design',
    desc: 'Bold, creative visuals and branding that make your business unforgettable. From logos to full brand systems, we deliver design that inspires and converts.',
    details: '/services/graphic-design',
    icon: '🎨',
    features: [
      'Brand Identity & Logo Design',
      'Marketing Collateral',
      'Digital & Print Assets',
      'Motion Graphics',
    ],
  },
  {
    title: 'Website Design & Development',
    desc: 'Modern, scalable websites and web apps built for performance, security, and growth. We use the latest technologies to ensure your brand stands out online.',
    details: '/services/web-development',
    icon: '🌐',
    features: [
      'Next.js, React, API Integration',
      'E-commerce & CMS',
      'Performance Optimization',
      'Accessibility & Security',
    ],
  },
  {
    title: 'Search Engine Optimization (SEO)',
    desc: 'Get found online and grow your organic reach with expert SEO. We combine technical, on-page, and content strategies for real results.',
    details: '/services/seo',
    icon: '🚀',
    features: [
      'Technical SEO Audits',
      'Content Strategy',
      'Analytics & Reporting',
      'Local & Global SEO',
    ],
  },
  {
    title: 'Social Media Marketing (SMM)',
    desc: 'Strategic campaigns to boost your brand, engage your audience, and drive measurable growth across all platforms.',
    details: '/services/smm',
    icon: '📱',
    features: [
      'Strategy & Planning',
      'Content Creation',
      'Paid Ads & Analytics',
      'Community Management',
    ],
  },
  {
    title: 'SaaS (Software as a Service)',
    desc: 'Custom SaaS solutions to power your business, automate workflows, and connect your teams. Scalable, secure, and future-ready.',
    details: '/services/saas',
    icon: '☁️',
    features: [
      'Multi-tenant Platforms',
      'API & Cloud Integrations',
      'User Management',
      'Ongoing Support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl p-10 bg-white dark:bg-neutral-900 shadow-xl hover:scale-105 transition-transform cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-brand/60 flex flex-col justify-between min-h-[340px]"
          >
            <div>
              <div className="text-5xl mb-4 drop-shadow-lg">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-brand group-hover:text-blue-500 transition-colors">{service.title}</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-300 mb-4">{service.desc}</p>
              <ul className="text-sm text-blue-500 font-medium mb-2 list-disc list-inside text-left mx-auto max-w-xs">
                {service.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <a href={service.details} className="inline-block mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-brand to-blue-500 text-white font-bold shadow hover:scale-105 transition-transform">View Details</a>
          </div>
        ))}
      </div>
    </section>
  );
}
