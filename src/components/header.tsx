"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Jasonyecyec",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-6 w-6"
        role="img"
        aria-labelledby="github-icon"
      >
        <title id="github-icon">GitHub</title>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="h-7 w-7"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="twitter-icon"
      >
        <title id="twitter-icon">Twitter</title>
        <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-yecyec-74545a201/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-7 w-7"
        role="img"
        aria-labelledby="linkedin-icon"
      >
        <title id="linkedin-icon">LinkedIn</title>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
      </svg>
    ),
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");
  const [showDebugOverlay, setShowDebugOverlay] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      // Shrink detection zone: trigger when section crosses 20% from top
      rootMargin: "-20% 0px -70% 0px", // Detection zone: 20%-34% from top (14% band)
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // Filter only intersecting entries
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingEntries.length > 0) {
        // Find the section that appears highest on the page
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
      {/* Debug Overlay - Shows the detection zone */}
      {showDebugOverlay && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {/* Top Buffer - No Detection */}
          <div className="h-[20%] bg-slate-500/10 border-b-2 border-slate-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-slate-400 font-bold text-sm bg-black/50 px-3 py-1 rounded">
                No Detection (Top 20%)
              </span>
            </div>
          </div>

          {/* Detection Zone - Active trigger area */}
          <div className="h-[10%] bg-green-500/30 border-y-4 border-green-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-green-500 font-bold text-lg bg-black/50 px-4 py-2 rounded">
                ⚡ TRIGGER ZONE (20%-30%)
              </span>
            </div>
          </div>

          {/* Bottom - No Detection */}
          <div className="h-[70%] bg-red-500/10 border-t-2 border-red-500">
            <div className="flex items-center justify-center h-full">
              <span className="text-red-500 font-bold text-sm bg-black/50 px-3 py-1 rounded">
                No Detection (Bottom 70%)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setShowDebugOverlay(!showDebugOverlay)}
        className="fixed top-4 right-4 z-[60] bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition-colors text-sm font-medium"
      >
        {showDebugOverlay ? "Hide" : "Show"} Debug
      </button>

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
          {socialLinks.map((link) => (
            <li className="mr-5 shrink-0 text-xs" key={link.name}>
              <Link
                target="_blank"
                href={link.href}
                className="block text-slate-400 hover:text-slate-200 transition-colors"
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}
