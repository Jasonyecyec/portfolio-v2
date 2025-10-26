import { skills } from "@/utils/constant";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 lg:scroll-mt-24">
      <div className="space-y-4">
        <h2 className="text-base font-bold uppercase tracking-widest text-[#00d1c7]">
          Skills
        </h2>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm" aria-label="skills">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="bg-teal-400/10 text-slate-300 gap-1.5 rounded-full flex items-center font-medium leading-5 px-3 py-1">
                {skill.icon}
                {skill.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
