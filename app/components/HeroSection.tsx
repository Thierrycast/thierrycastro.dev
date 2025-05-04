'use client';

import HeroActions from './ui/Hero/HeroActions';
import HeroContent from './ui/Hero/HeroContent';
import HeroRocket from './ui/Hero/HeroRocket';
import HeroScrollHint from './ui/Hero/HeroScrollHint';

type Props = {
  labels: {
    greeting: string;
    name: string;
    role: string;
    button: string;
    scrollHint: string;
  };
};

export default function HeroSection({ labels }: Props) {
  return (
    <section
      id="home"
      className="w-full min-h-screen max-w-2xl px-6 sm:px-8 xl:px-0 pt-52 md:pt-0 flex flex-col justify-between md:flex-row relative"
    >
      <HeroActions />
      <HeroContent labels={labels} />
      <HeroRocket />
      <HeroScrollHint hint={labels.scrollHint} />
    </section>
  );
}
