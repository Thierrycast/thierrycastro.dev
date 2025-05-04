'use client';
import { useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

type Props = {
  labels: {
    badge: string;
    title: string;
    companies: {
      company: string;
      experiences: {
        role: string;
        description: string;
      }[];
    }[];
  };
};

export default function TimelineSection({ labels }: Props) {
  const [selectedCompany, setSelectedCompany] = useState(labels.companies[0].company);

  const selected = labels.companies.find(
    (c) => c.company === selectedCompany
  );

  return (
    <section
      id="experiences"
      className="w-full flex flex-col items-start justify-center max-w-2xl px-6 sm:px-8 xl:px-0 py-24"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-variant inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-variant mt-6 mb-10">
        {labels.title}
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
        <div className="flex flex-col gap-4 mt-2 p-6 bg-background border border-primary-variant rounded-xl w-full lg:w-1/3 min-h-[200px]">
          {labels.companies.map((company, index) => (
            <button
              key={index}
              className={`w-full py-2 text-sm font-medium rounded transition-all text-left px-4 ${
                selectedCompany === company.company
                  ? 'bg-primary-variant text-white'
                  : 'bg-primary-variant/25 text-primary-variant'
              }`}
              onClick={() => setSelectedCompany(company.company)}
            >
              {company.company}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 min-h-[400px] h-auto transition-all duration-300">
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="wait">
              <m.div
                key={selected?.company}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-2 h-full"
              >
                <h3 className="text-base sm:text-lg font-semibold text-primary-variant">
                  {selected?.company}
                </h3>

                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: 'easeOut' }}
                  className="relative pl-6 mt-2"
                >
                  <div className="flex flex-col gap-6">
                    {selected?.experiences.map((experience, index) => (
                      <div key={index} className="relative pl-2">
                        <m.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.05, duration: 0.2 }}
                          className="absolute left-[-20px] top-[10px] w-2 h-2 bg-primary rounded-full z-10"
                        />
                        <p className="text-xs sm:text-sm text-subtitle font-medium">
                          {experience.role}
                        </p>
                        <p className="mt-1 text-xs text-description leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <m.div
                    key={`line-${selected?.company}`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: 'easeInOut' }}
                    className="absolute left-[7px] top-[10px] bottom-2 w-[2px] bg-primary/25 origin-bottom"
                  />
                </m.div>
              </m.div>
            </AnimatePresence>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
}
