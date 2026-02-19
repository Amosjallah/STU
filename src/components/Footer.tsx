export default function Footer() {
  return (
    <footer className="bg-black dark:bg-neutral-900 text-white py-10 px-4 mt-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-2">STUCCORD</h3>
          <p className="text-sm opacity-80">Grow Your Brand Beyond Boundaries</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Solutions</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>SaaS Development</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="space-y-1 text-sm opacity-80">
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs opacity-60 mt-8">© {new Date().getFullYear()} STUCCORD. All rights reserved.</div>
    </footer>
  );
}
