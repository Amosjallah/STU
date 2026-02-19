const steps = [
  {
    title: 'Discover & Strategize',
    desc: 'We begin by deeply understanding your business, audience, and goals. Through research and collaborative workshops, we uncover insights and craft a strategic roadmap for your brand’s success.',
    icon: '🔍',
    detail: 'Market research, competitor analysis, and brand discovery sessions.'
  },
  {
    title: 'Design & Develop',
    desc: 'Our creative and technical teams work hand-in-hand to design stunning visuals and build robust, scalable solutions tailored to your needs.',
    icon: '🎯',
    detail: 'Wireframes, prototypes, UI/UX, and full-stack development.'
  },
  {
    title: 'Test & Optimize',
    desc: 'We rigorously test every aspect of your project, optimizing for performance, accessibility, and user experience. Continuous improvement is at the heart of our process.',
    icon: '🧪',
    detail: 'QA, usability testing, analytics, and A/B optimization.'
  },
  {
    title: 'Launch & Grow',
    desc: 'We launch your project with precision and provide ongoing support to help you scale, adapt, and thrive in a fast-changing digital world.',
    icon: '🚀',
    detail: 'Go-live, monitoring, growth strategy, and support.'
  },
];

export default function WorkflowProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white dark:from-black dark:via-blue-950 dark:to-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Our Proven Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-3xl p-10 bg-white dark:bg-neutral-900 shadow-xl flex flex-col items-center text-center border border-neutral-200 dark:border-neutral-800 hover:border-brand/60 transition-colors min-h-[320px]"
            >
              <div className="text-5xl mb-4 drop-shadow-lg">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-brand">{step.title}</h3>
              <p className="text-base text-neutral-600 dark:text-neutral-300 mb-2">{step.desc}</p>
              <span className="inline-block text-xs text-blue-500 font-medium italic mb-2">{step.detail}</span>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-1 h-8 bg-gradient-to-b from-brand to-blue-500 mx-auto my-4 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
