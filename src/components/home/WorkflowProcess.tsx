const steps = [
  {
    title: 'Discover & Strategize',
    desc: 'We listen, research, and plan the best approach for your brand.',
    icon: '🔍',
  },
  {
    title: 'Design & Develop',
    desc: 'We craft beautiful, functional solutions tailored to your needs.',
    icon: '🎯',
  },
  {
    title: 'Test & Optimize',
    desc: 'We rigorously test and refine for performance and results.',
    icon: '🧪',
  },
  {
    title: 'Launch & Grow',
    desc: 'We launch, monitor, and help you scale beyond boundaries.',
    icon: '🚀',
  },
];

export default function WorkflowProcess() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-neutral-100 to-white dark:from-black dark:via-neutral-900 dark:to-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Our Workflow</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-2xl p-8 bg-white dark:bg-neutral-900 shadow-lg flex flex-col items-center text-center border border-neutral-200 dark:border-neutral-800"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-300">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-1 h-8 bg-gradient-to-b from-fuchsia-500 to-blue-500 mx-auto my-4 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
