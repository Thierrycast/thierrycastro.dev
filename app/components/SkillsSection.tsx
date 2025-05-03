import Icon from '../components/Icon';

type Skill = {
  label: string;
  icon: string;
};

type Props = {
  labels: {
    badge: string;
    title: string;
  };
};

export default function SkillsSection({ labels }: Props) {
  const skills: Skill[] = [
    { label: 'TypeScript', icon: 'typescript' },
    { label: 'React', icon: 'react' },
    { label: 'Svelte', icon: 'svelte' },
    { label: 'Tailwind CSS', icon: 'tailwind' },
    { label: 'Ruby on Rails', icon: 'rails' },
    { label: 'Docker', icon: 'docker' }
  ];

  return (
    <section
      id="skills"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-24 md:py-40 flex flex-col items-center justify-center relative"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-variant inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-variant mt-6 mb-16">
        {labels.title}
      </h2>

      <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-8">
        {skills.map(({ label, icon }, index) => (
          <div
            key={index}
            className="flex w-32 sm:w-40 flex-col items-center justify-between gap-4 border border-primary-variant bg-primary-variant/20 py-4 sm:py-6 rounded"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16">
              <Icon name={icon} className="w-full h-full text-primary-variant" />
            </div>
            <p className="text-xs text-center">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
