import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6">
          {/* main row */}
          <div className="flex h-16 items-center justify-between">
            {/* logo / brand */}
            <a
              href="#hero"
              className="flex items-center"
              style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}
            >
              <span className="text-1xl md:text-3xl font-bold tracking-tight text-gray-900">
                #CX &amp; Loyalty
              </span>
            </a>

            {/* desktop links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
              <a href="#overview" className="hover:text-brand-600 transition">
                Overview
              </a>
              <a href="#meet" className="hover:text-brand-600 transition">
                Who Will You Meet
              </a>
              <a href="#industries" className="hover:text-brand-600 transition">
                Industries
              </a>
              <a href="#attend" className="hover:text-brand-600 transition">
                Why Attend
              </a>
              <a href="#topics" className="hover:text-brand-600 transition">
                Topics
              </a>
              <a href="#sponsor" className="hover:text-brand-600 transition">
                Sponsor
              </a>
            </div>

            {/* CTA / mobile toggle */}
            <div className="flex items-center space-x-4">
              <a
                href="#sponsor"
                className="hidden md:inline-block bg-brand-500 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-brand-600 transition"
              >
                Sponsor
              </a>
              <button
                className="md:hidden text-2xl leading-none"
                onClick={() => setOpen(!open)}
                aria-label="Toggle navigation"
              >
                {open ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? "max-h-72" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center py-4 space-y-3 text-gray-700 font-medium">
            <a href="#overview" onClick={() => setOpen(false)}>
              Overview
            </a>
            <a href="#meet" onClick={() => setOpen(false)}>
              Who Will You Meet
            </a>
            <a href="#industries" onClick={() => setOpen(false)}>
              Industries
            </a>
            <a href="#attend" onClick={() => setOpen(false)}>
              Why Attend
            </a>
            <a href="#topics" onClick={() => setOpen(false)}>
              Topics
            </a>
            <a href="#sponsor" onClick={() => setOpen(false)}>
              Sponsor
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
