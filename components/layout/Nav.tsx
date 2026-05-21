"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/#what", label: "What We Do" },
  { href: "/#themes", label: "Themes" },
  { href: "/#projects", label: "Projects" },
  { href: "/#learning", label: "Learning" },
  { href: "/#team", label: "Team" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between",
          "px-6 md:px-10 py-4",
          "bg-white/92 backdrop-blur-nav border-b border-line",
          "transition-shadow duration-300",
          scrolled && "shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight text-dark no-underline group"
          aria-label="CIK Lab — Home"
        >
          <span className="font-serif text-base tracking-tight group-hover:text-orange transition-colors">
            Co-Creation Lab
          </span>
          <span className="text-[0.72rem] text-mid font-light tracking-wider">
            Vrije Universiteit Amsterdam
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none m-0 p-0" role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-mid hover:text-orange transition-colors duration-200 tracking-wide no-underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/#contact"
          className={cn(
            "hidden md:inline-block",
            "text-sm font-medium text-white bg-orange",
            "px-5 py-2 rounded-full no-underline",
            "transition-[transform,box-shadow] duration-200",
            "hover:-translate-y-px hover:shadow-orange-sm"
          )}
        >
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-1 text-dark hover:text-orange transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-white/98 backdrop-blur-nav flex flex-col pt-24 px-6 pb-8 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0" role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-xl font-serif text-dark hover:text-orange transition-colors no-underline border-b border-line"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 text-center text-base font-medium text-white bg-orange px-6 py-3 rounded-full no-underline"
          >
            Get in Touch
          </Link>
        </div>
      )}
    </>
  );
}
