import Image from 'next/image';

type Props = {
  labels: {
    profileAlt: string;
    badge: string;
    name: string;
    description: string;
  };
};

export default function AboutSection({ labels }: Props) {
  return (
    <section
      id="about"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 md:py-40 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0"
    >
      <div className="w-full px-10 lg:w-1/2 flex justify-center">
        <Image
          src="/profile.png"
          alt={labels.profileAlt}
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full lg:w-1/2 py-4 text-center lg:text-left">
        <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-variant inline-block">
          {labels.badge}
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-variant mt-6 mb-6">
          {labels.name}
        </h2>

        <p className="text-xs sm:text-sm leading-relaxed">
          {labels.description}
        </p>
      </div>
    </section>
  );
}
