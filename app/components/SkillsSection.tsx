import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    { name: "HTML", icon: "/icons/html.svg" },
    { name: "CSS", icon: "/icons/css.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "Tailwind", icon: "/icons/tailwind.svg" },
    { name: "Git", icon: "/icons/git.svg" },
    { name: "Figma", icon: "/icons/figma.svg" }
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen max-w-2xl px-6 sm:px-8 xl:px-0 py-24 flex flex-col items-center justify-center relative"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        Tecnologias
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-16">
        Habilidades
      </h2>

      <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex w-32 sm:w-40 flex-col items-center justify-between gap-4 border border-primary-light bg-primary-light/20 p-4 sm:p-6 rounded"
          >
            <div className="relative w-12 h-12 sm:w-16 sm:h-16">
              <Image src={skill.icon} alt={skill.name} fill />
            </div>
            <p className="text-xs sm:text-sm text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}