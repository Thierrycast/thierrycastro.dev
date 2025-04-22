'use client';
import { useState } from 'react';

type Props = {
  labels: {
    badge: string;
    title: string;
    experiences: {
      company: string;
      role: string;
      description: string;
    }[];
  };
};

export default function TimelineSection({ labels }: Props) {
  const [selected, setSelected] = useState(labels.experiences[0]);

  return (
    <section
      id="experiences"
      className="w-full flex flex-col items-start justify-center max-w-2xl px-6 sm:px-8 xl:px-0 py-24"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-10">
        {labels.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-4 p-6 bg-neutral border border-neutral-light rounded-xl w-full lg:w-1/3">
          {labels.experiences.map((experience, index) => (
            <button
              key={index}
              className={`w-full py-2 text-sm font-medium rounded transition-all text-white text-left px-4 ${
                selected.company === experience.company
                  ? 'bg-primary-light'
                  : 'bg-primary-light/25'
              }`}
              onClick={() => setSelected(experience)}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 pt-2">
          <h3 className="text-base sm:text-lg font-medium text-primary-light">
            {selected.company}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            {selected.role}
          </p>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            {selected.description}
          </p>
        </div>
      </div>
    </section>
  );
}
