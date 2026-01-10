import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "./Brand";
import {
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <div className="min-h-screen pb-20 overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/70 backdrop-blur">
        <Link to="/" className="font-semibold text-lg">
          Ved Patel
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-800">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>

        {/* Auth + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white transition">
                Login
              </button>
            </SignInButton>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden"
          >
            <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= FULLSCREEN MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[100] bg-white/80 backdrop-blur-xl
        transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-slate-800"
        >
          ✕
        </button>

        {/* Menu Content */}
        <div className="flex flex-col items-center justify-center h-full gap-10 text-2xl font-medium text-slate-800">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <Link to="/projects/jh2345kjh334hhk2i343er" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

          <div className="pt-8">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignInButton mode="modal">
                <button className="bg-indigo-600 text-white px-10 py-3 rounded-full">
                  Login
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center text-center px-4 md:px-16 lg:px-24 xl:px-40 text-black">
        <div className="absolute top-24 -z-10 left-1/4 size-96 bg-indigo-300 blur-[100px] opacity-30"></div>

        {/* Social Proof */}
        <div className="flex items-center mt-24">
          <div className="flex -space-x-3 pr-3">
            {[
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
              "https://randomuser.me/api/portraits/men/75.jpg",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="size-8 rounded-full border-2 border-white"
              />
            ))}
          </div>

          <p className="text-sm text-gray-700">Used by 10,000+ users</p>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl mt-6">
          Build anything with{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
            this website.
          </span>
        </h1>

        <p className="max-w-md text-base my-7">
          I design and build modern, high-performance websites and AI-powered tools that convert visitors into users.
        </p>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 flex items-center"
          >
            Get started
          </Link>

          <button className="border border-slate-400 rounded-full px-7 h-12">
            ▶ Try demo
          </button>
        </div>
        <p className="py-6 text-slate-600 mt-14">Trusted by leading brands</p>
                <div className='w-full max-w-[800px] h-[3px] mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10'></div>

        <div className="w-full max-w-5xl overflow-x-auto">
          <Brand />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;