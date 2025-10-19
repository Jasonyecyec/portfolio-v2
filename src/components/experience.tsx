export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-lg font-bold tracking-wide text-[#00d1c7]">
          Experience
        </h2>

        <div className="grid grid-cols-8 gap-3 group relative  pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition  motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div className="lg:col-span-2 relative z-10">
            <p className="text-xs font-semibold uppercase text-slate-400">
              APRIL 2025 - Present
            </p>
          </div>

          <div className="lg:col-span-6 relative z-10">
            <h3 className="text-md group-hover:text-[#00d1c7] inline-flex items-baseline font-semibold leading-tight text-slate-200 focus-visible:text-teal-300 group/link text-base">
              Software Engineer
            </h3>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, nobis.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum, nobis.
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
