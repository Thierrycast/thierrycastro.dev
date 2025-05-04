'use client';

import dynamic from 'next/dynamic';

const SkillsSection = dynamic(() => import('../SkillsSection'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
});

type Props = any;

export default function DynamicSkills(props: Props) {
  return <SkillsSection {...props} />;
}
