type Props = {
  labels: {
    label: string;
  };
};

export default function Footer({ labels }: Props) {
  return (
    <footer className="w-full bg-surface-contrast py-4 text-white flex justify-center">
      {labels.label}
    </footer>
  );
}
