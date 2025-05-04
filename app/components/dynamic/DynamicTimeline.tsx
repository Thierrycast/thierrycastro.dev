'use client';

import dynamic from 'next/dynamic';

const TimelineSection = dynamic(() => import('../TimelineSection'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,
});

type Props = any;

export default function DynamicTimeline(props: Props) {
  return <TimelineSection {...props} />;
}
