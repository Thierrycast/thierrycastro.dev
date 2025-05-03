'use client';

import ThemeSwitcher from '../../ThemeSwitcher';
import LanguageSwitcher from '../../LanguageSwitcher';

export default function HeroActions() {
  return (
    <div className="absolute flex items-center gap-4 top-24 right-4">
      <ThemeSwitcher className="text-white" />
      <LanguageSwitcher />
    </div>
  );
}
