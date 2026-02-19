export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Let’s Start a Conversation</h1>
      <form className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-8 shadow mb-10 grid gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="name" placeholder="Name" required className="rounded px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
          <input type="tel" name="phone" placeholder="Phone" required className="rounded px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
        </div>
        <input type="email" name="email" placeholder="Email" required className="rounded px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
        <input type="text" name="subject" placeholder="Subject" required className="rounded px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
        <textarea name="message" placeholder="Message" required rows={5} className="rounded px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700" />
        <button type="submit" className="px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform">Send Message</button>
      </form>
      <div className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow text-center">
        <h2 className="text-2xl font-bold mb-2">Business Info</h2>
        <p className="mb-1">Phone: <a href="tel:+2330547581168" className="text-fuchsia-500">(+233) 054-758-1168</a></p>
        <p className="mb-1">Email: <a href="mailto:contact@stuccord.com" className="text-fuchsia-500">contact@stuccord.com</a></p>
        <p className="mb-4">Location: Koforidua-Nsutam Rd, Koforidua</p>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.123456789!2d-0.2599!3d6.0941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1021f3b2b2b2b2b2%3A0x123456789abcdef!2sKoforidua!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
