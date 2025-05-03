type Props = {
  labels: {
    greeting: string;
    name: string;
    role: string;
    button: string;
  };
};

export default function HeroContent({ labels }: Props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
      <p className="text-base sm:text-lg font-medium">{labels.greeting}</p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-variant">
        {labels.name}
      </h1>
      <p className="text-base sm:text-lg mb-8 sm:mb-12 font-medium">
        {labels.role}
      </p>
      <a href="https://www.linkedin.com/in/thierrycastrodev" target="_blank">
        <span className="bg-primary-emphasis px-6 sm:px-8 py-3 rounded text-sm font-semibold inline-block text-white">
          {labels.button}
        </span>
      </a>
    </div>
  );
}
