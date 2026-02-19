export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
        About <span className="text-brand">STUCCORD</span>
      </h1>
      <div className="prose dark:prose-dark mx-auto text-center mb-12">
        <p className="text-xl font-semibold text-brand">Our Mission</p>
        <p className="text-2xl font-light max-w-2xl mx-auto">To empower brands to grow beyond boundaries by connecting teams and delivering world-class digital solutions that inspire, engage, and drive results.</p>
      </div>
      <div className="prose dark:prose-dark mx-auto mb-12 text-center">
        <p>
          <strong>STUCCORD</strong> is a collective of passionate creators, visionary strategists, and innovative technologists headquartered in Koforidua, Ghana. We believe in the power of design and technology to transform brands and connect people across the globe. Our team brings together decades of experience in web development, branding, UI/UX, SaaS, and digital marketing, delivering solutions that are both beautiful and effective.
        </p>
        <p>
          We partner with ambitious businesses and organizations, helping them unlock new opportunities, scale their impact, and build lasting connections with their audiences. Our approach is collaborative, data-driven, and always focused on your success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-gradient-to-br from-brand/10 to-blue-500/10 rounded-2xl p-10 text-center shadow-lg border border-brand/20">
          <h3 className="text-2xl font-bold mb-2 text-brand">Amos Jusu</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-2">Web Designer</p>
          <p className="text-base text-neutral-500">Amos crafts visually stunning, user-centric websites that elevate brands and create memorable digital experiences.</p>
        </div>
        <div className="bg-gradient-to-br from-brand/10 to-blue-500/10 rounded-2xl p-10 text-center shadow-lg border border-brand/20">
          <h3 className="text-2xl font-bold mb-2 text-brand">Victory Nkire</h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-2">Founder & CEO</p>
          <p className="text-base text-neutral-500">Victory leads STUCCORD with a vision for innovation, excellence, and global impact, ensuring every project exceeds expectations.</p>
        </div>
      </div>
      <div className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand">Let’s build your brand’s future</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300">Ready to take your business to the next level? Partner with STUCCORD and experience the difference of working with a team that’s as invested in your success as you are.</p>
        <a href="/contact" className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-brand to-blue-500 text-white font-bold shadow-xl hover:scale-105 transition-transform">Contact Us</a>
      </div>
    </section>
  );
}
