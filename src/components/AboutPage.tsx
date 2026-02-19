export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About STUCCORD</h1>
      <p className="text-lg mb-6 text-center max-w-2xl mx-auto">
        <span className="font-semibold">Our Mission:</span> To empower brands to grow beyond boundaries by connecting teams and delivering world-class digital solutions.
      </p>
      <p className="mb-10 text-neutral-700 dark:text-neutral-300 text-center max-w-2xl mx-auto">
        STUCCORD is a team of creators, strategists, and technologists based in Koforidua, Ghana. We blend creativity, technology, and strategy to help brands thrive in a digital-first world. Our passion is building experiences that connect, inspire, and drive results for our clients globally.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 text-center shadow">
          <h3 className="text-xl font-semibold mb-2">Amos Jusu</h3>
          <p className="text-neutral-500 mb-2">Web Designer</p>
        </div>
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 text-center shadow">
          <h3 className="text-xl font-semibold mb-2">Victory Nkire</h3>
          <p className="text-neutral-500 mb-2">Founder & CEO</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-2">Let’s build your brand’s future</h2>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Contact Us</a>
      </div>
    </section>
  );
}
