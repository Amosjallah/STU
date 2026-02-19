
const services = [
  {
    title: 'Web Development',
    desc: 'Custom, high-performance websites and web applications built to scale your business and deliver seamless user experiences across all devices.',
    icon: '🌐',
    highlight: 'Cutting-edge technologies, responsive design, and robust security.'
  },
  {
    title: 'Graphic Design',
    desc: 'Bold, creative visuals and branding that make your business stand out in a crowded marketplace.',
    icon: '🎨',
    highlight: 'Brand identity, marketing collateral, and digital assets.'
  },
  {
    title: 'UI/UX Design',
    desc: 'Intuitive, beautiful interfaces and experiences that delight users and drive engagement.',
    icon: '🖌️',
    highlight: 'User research, wireframing, prototyping, and usability testing.'
  },
  {
    title: 'SaaS Development',
    desc: 'Custom SaaS solutions to power your business, streamline operations, and connect your teams globally.',
    icon: '☁️',
    highlight: 'Cloud-native, scalable, and secure platforms.'
  },
  {
    title: 'SEO Services',
    desc: 'Get found online and grow your organic reach with expert SEO strategies tailored to your goals.',
    icon: '🚀',
    highlight: 'On-page, off-page, and technical SEO.'
  },
  {
    title: 'Social Media Marketing',
    desc: 'Strategic campaigns to boost your brand, engage your audience, and drive measurable results.',
    icon: '📱',
    highlight: 'Content creation, paid ads, and analytics.'
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl p-10 bg-white dark:bg-neutral-900 shadow-xl hover:scale-105 transition-transform cursor-pointer border border-neutral-200 dark:border-neutral-800 hover:border-brand/60 flex flex-col justify-between min-h-[260px]"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="text-5xl mb-4 drop-shadow-lg">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-brand group-hover:text-blue-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-300 mb-2 text-center">{service.desc}</p>
                <p className="text-xs text-blue-500 font-medium italic">{service.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
