import React, { useState } from "react";
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

  return (
    <div className="min-h-screen pb-20">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm bg-white/70 backdrop-blur">
        <Link to="/" className="font-semibold text-lg">
          Ved Patel
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-800">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <a href="#features" className="hover:text-indigo-600 transition">Features</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
          <Link to="/contact" className="hover:text-indigo-600 transition">Contact</Link>
        </div>

        {/* Auth + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                Login
              </button>
            </SignInButton>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden active:scale-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg text-white md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
        <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full">
              Login
            </button>
          </SignInButton>
        )}

        <button
          onClick={() => setMenuOpen(false)}
          className="mt-6 size-10 flex items-center justify-center bg-white text-black rounded-md"
        >
          ✕
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
        <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 bg-indigo-300 blur-[100px] opacity-30"></div>

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
                alt="user"
                className="size-8 rounded-full border-2 border-white"
              />
            ))}
          </div>

          <div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-600">
                  <path d="M12 2l2.3 4.7 5.2.8-3.7 3.6.9 5.1L12 18.8l-4.6 2.4.9-5.1L4.5 7.5l5.2-.8z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-700">Used by 10,000+ users</p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-6 md:leading-[70px]">
          Build stunning websites with{" "}
          <span className="bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent">
            PrebuiltUI
          </span>{" "}
          Components
        </h1>

        <p className="max-w-md text-center text-base my-7">
          Explore a growing library of over 320+ beautifully crafted,
          customizable components.
        </p>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 flex items-center transition"
          >
            Get started
          </Link>

          <button className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
            ▶ Try demo
          </button>
        </div>

        <p className="py-6 text-slate-600 mt-14">
          Trusted by leading brands
        </p>

        <div className="w-full max-w-5xl overflow-x-auto">
          <Brand />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
