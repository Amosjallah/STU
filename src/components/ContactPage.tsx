export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-center bg-gradient-to-r from-brand to-blue-500 bg-clip-text text-transparent drop-shadow-lg">Let’s Start a Conversation</h1>
      <p className="text-lg md:text-xl text-center mb-10 max-w-2xl mx-auto text-neutral-700 dark:text-neutral-300 font-medium">We’d love to hear about your project, partnership, or idea. Fill out the form below and our team will get back to you within 24 hours.</p>
      <form className="bg-white dark:bg-neutral-900 rounded-3xl p-10 shadow-xl mb-12 grid gap-8 border border-neutral-200 dark:border-neutral-800">
        <div className="grid md:grid-cols-2 gap-6">
          <input type="text" name="name" placeholder="Full Name" required className="rounded-lg px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-lg" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="rounded-lg px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-lg" />
        </div>
        <input type="email" name="email" placeholder="Email Address" required className="rounded-lg px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-lg" />
        <input type="text" name="subject" placeholder="Subject" required className="rounded-lg px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-lg" />
        <textarea name="message" placeholder="Your Message" required rows={6} className="rounded-lg px-5 py-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-lg" />
        <button type="submit" className="px-10 py-4 rounded-full bg-gradient-to-r from-brand to-blue-500 text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform">Send Message</button>
      </form>
      <div className="bg-gradient-to-br from-brand/10 to-blue-500/10 rounded-3xl p-10 shadow-lg text-center border border-brand/20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-brand">Business Info</h2>
        <div className="flex flex-col md:flex-row md:justify-center gap-6 mb-4">
          <div>
            <span className="block text-sm font-semibold text-neutral-500 mb-1">Phone</span>
            <a href="tel:+2330547581168" className="text-lg font-bold text-blue-500">(+233) 054-758-1168</a>
          </div>
          <div>
            <span className="block text-sm font-semibold text-neutral-500 mb-1">Email</span>
            <a href="mailto:contact@stuccord.com" className="text-lg font-bold text-blue-500">contact@stuccord.com</a>
          </div>
          <div>
            <span className="block text-sm font-semibold text-neutral-500 mb-1">Location</span>
            <span className="text-lg font-bold text-blue-500">Koforidua-Nsutam Rd, Koforidua</span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-blue-200 dark:border-blue-900 shadow mt-4">
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
      </div>
    </section>
  );
}
