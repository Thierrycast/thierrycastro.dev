type Props = {
  labels: {
    label: string;
  };
};

export default function Footer({ labels }: Props) {
  return (
    <footer className="w-full bg-neutral-dark py-4 flex justify-center">
      {labels.label}
    </footer>
  );
}
