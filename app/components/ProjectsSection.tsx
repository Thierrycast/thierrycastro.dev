import Image from 'next/image';

type Props = {
  labels: {
    badge: string;
    title: string;
    projects: {
      title: string;
      description: string;
      image: string;
    }[];
  };
};

export default function ProjectsSection({ labels }: Props) {
  return (
    <section
      id="projects"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-40 flex flex-col items-center justify-end relative"
    >
      <div className="absolute inset-0 bg-[url('/background_glow.svg')] bg-cover bg-center opacity-50 pointer-events-none" />

      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light my-6">
        {labels.title}
      </h2>

      <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-8 relative z-10">
        {labels.projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#964CF0] to-[#170033] rounded-xl p-0.5 w-full sm:w-[45%] md:w-[30%] max-w-xs"
          >
            <div className="flex flex-col gap-4 w-full px-4 py-6 rounded-xl bg-black backdrop-blur-md h-full">
              <div className="w-full h-32 sm:h-36 bg-primary-light rounded-lg"></div>
              <h3 className="text-sm font-semibold">{project.title}</h3>
              <p className="text-xs text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
