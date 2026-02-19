"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black shadow transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold tracking-tight text-black dark:text-white">
          STUCCORD
        </Link>
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white dark:bg-black px-4 pb-4 flex flex-col gap-4">
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
