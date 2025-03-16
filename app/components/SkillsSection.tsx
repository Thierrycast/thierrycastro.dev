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
    <section id="skills" className="w-full h-screen max-w-2xl px-8 2xl:px-0 flex flex-col items-center justify-center relative">
      <span className="text-sm font-medium bg-primary/25 px-8 py-3 rounded text-primary-light">
      Tecnologias
      </span>
      <h2 className="text-2xl font-semibold text-primary-light mt-6 mb-20">Habilidades</h2>

      <div className="w-full flex justify-center flex-wrap gap-8">
        {
          skills.map((skill, index) => (
            <div key={index} className="flex w-40 flex-col items-center justify-between gap-4 border border-primary-light bg-primary-light/20 p-6 rounded">
              <div className="relative w-16 h-16" >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill 
                />
              </div>
              <p className="text-sm">{skill.name}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
