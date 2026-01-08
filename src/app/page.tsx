import Header from "@/components/header";
import CursorSpotlight from "@/components/cursor-spotlight";
import Experience from "@/components/experience";
import Skills from "@/components/skills";
import Link from "next/link";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import { RecaptchaProvider } from "@/providers/RecaptchaProvider";
import SnowfallWrapper from "@/components/snowfall-wrapper";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <SnowfallWrapper />
      <div className="min-h-screen mx-auto max-w-screen-xl px-6 py-12 md:px-12 py-1.2 md:py-16 lg:py-0 font-sans relative">
        <div className="lg:flex lg:justify-between gap-4">
          <Header />

          <main className="pt-20 lg:w-[52%] lg:py-24 space-y-16 md:space-y-24 lg:space-y-36">
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24">
              <div className="space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
                <p className="text-slate-400 font-medium tracking-normal leading-relaxed">
                  Experienced Software Developer wklith a proven ability to lead
                  development projects and collaborate effectively within a
                  team. Eager to contribute and grow in a dynamic environment,
                  continuously learning and mastering new technologies.
                </p>
              </div>
            </section>

            <Skills />

            <Experience />

            <Projects />

            <RecaptchaProvider>
              <Contact />
            </RecaptchaProvider>

            <footer className="max-w-md pb-16 text-sm text-slate-400 sm:pb-0 font-medium">
              <p>
                Built with{" "}
                <Link
                  href="https://nextjs.org/"
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Next.js (opens in a new tab)"
                >
                  Next.js
                </Link>{" "}
                and{" "}
                <Link
                  href="https://tailwindcss.com/"
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Tailwind CSS (opens in a new tab)"
                >
                  Tailwind CSS
                </Link>
                , deployed with{" "}
                <Link
                  href="https://vercel.com/"
                  className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Vercel (opens in a new tab)"
                >
                  Vercel .
                </Link>
                <br />© {new Date().getFullYear()}{" "}
                <span className="text-slate-200"> Jason Yecyec</span> . All
                rights reserved.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
