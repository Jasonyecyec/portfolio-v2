import { projects } from "@/utils/constant";
import Technologies from "./technologies";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="space-y-10">
        <h2 className="text-base uppercase mb-7 font-bold tracking-wide text-[#00d1c7]">
          Projects
        </h2>

        {projects.map((item, index) => (
          <Link
            key={index}
            href={item.projectUrl}
            target="_blank"
            rel="noreferrer noopener"
            passHref
          >
            <div
              key={index}
              className="grid grid-cols-8 gap-3 group relative  pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-5 lg:hover:!opacity-100 lg:group-hover:opacity-50"
            >
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition  motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

              {/* Projec Image */}
              <div className="lg:col-span-2 relative z-10">
                <div className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 bg-slate-500 relative">
                  <Image alt={item.name} src={item.imageUrl} fill />
                </div>
              </div>

              <div className="lg:col-span-6 relative z-10 space-y-3">
                <h3 className="text-md group-hover:text-[#00d1c7] inline-flex items-baseline font-semibold leading-tight text-slate-200 focus-visible:text-teal-300 group/link">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-400 leading-normal">
                  {item.description}
                </p>

                <ul
                  className="mt-2 flex flex-wrap gap-1.5"
                  aria-label="technologies used"
                >
                  {item.technologies.map((tech, techIndex) => (
                    <li key={techIndex}>
                      <Technologies tech={tech} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
