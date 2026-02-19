const services = [
  {
    title: 'Web Development',
    desc: 'Modern, scalable websites and web apps built for performance and growth.',
    icon: '🌐',
  },
  {
    title: 'Graphic Design',
    desc: 'Bold, creative visuals and branding that make your business stand out.',
    icon: '🎨',
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive, beautiful interfaces and experiences for your users.',
    icon: '🖌️',
  },
  {
    title: 'SaaS Development',
    desc: 'Custom SaaS solutions to power your business and connect your teams.',
    icon: '☁️',
  },
  {
    title: 'SEO Services',
    desc: 'Get found online and grow your organic reach with expert SEO.',
    icon: '🚀',
  },
  {
    title: 'Social Media Marketing',
    desc: 'Strategic campaigns to boost your brand and engage your audience.',
    icon: '📱',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl p-8 bg-neutral-100 dark:bg-neutral-900 shadow-lg hover:scale-105 transition-transform cursor-pointer border border-transparent hover:border-fuchsia-500"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
