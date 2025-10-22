"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { navLinks, socialLinks } from "@/utils/constant";

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [showDebugOverlay, setShowDebugOverlay] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingEntries.length > 0) {
        const topMostEntry = intersectingEntries.reduce((highest, entry) => {
          return entry.boundingClientRect.top < highest.boundingClientRect.top
            ? entry
            : highest;
        });

        setActiveSection(topMostEntry.target.id);
      }
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {showDebugOverlay && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="h-[20%] bg-slate-500/10 border-b-2 border-slate-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-slate-400 font-bold text-sm bg-black/50 px-3 py-1 rounded">
                No Detection (Top 20%)
              </span>
            </div>
          </div>

          <div className="h-[10%] bg-green-500/30 border-y-4 border-green-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-green-500 font-bold text-lg bg-black/50 px-4 py-2 rounded">
                TRIGGER ZONE (20%-30%)
              </span>
            </div>
          </div>

          <div className="h-[70%] bg-red-500/10 border-t-2 border-red-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-red-500 font-bold text-sm bg-black/50 px-3 py-1 rounded">
                No Detection (Bottom 70%)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* <button
        type="button"
        onClick={() => setShowDebugOverlay(!showDebugOverlay)}
        className="fixed top-4 right-4 z-[60] bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-sm font-medium"
      >
        {showDebugOverlay ? "Hide" : "Show"} Debug
      </button> */}

      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:min-h-screen">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <Link href="/">Jason Yecyec</Link>
          </h1>
          <h2 className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Software Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            amet!
          </p>

          <nav className="nav hidden lg:block" aria-label="in-page-jump-links">
            <ul className="mt-12 w-max">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");

                return (
                  <li key={link.name}>
                    <Link
                      className="group flex items-center py-3"
                      onClick={(e) => handleNavClick(e, link.href)}
                      href={link.href}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                          isActive ? "w-16 bg-slate-200" : "w-9 bg-slate-600"
                        }`}
                      ></span>
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                          isActive ? "text-slate-200" : "text-slate-500"
                        }`}
                      >
                        {link.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ul className="ml-1 mt-8 flex items-center" aria-label="social-media">
          {socialLinks.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="mr-5 shrink-0 text-xs"
              key={link.name}
            >
              <Link
                target="_blank"
                href={link.href}
                className="block text-slate-400 hover:text-slate-200 transition-colors"
              >
                {link.icon}
              </Link>
            </motion.li>
          ))}
        </ul>
      </header>
    </>
  );
}
