import Icon from './Icon';	

type Props = {
  labels: {
    badge: string;
    title: string;
    contacts: {
      label: string;
      value: string;
    }[];
  };
};

export default function ContactSection({ labels }: Props) {
  const iconNames: ("smile" | "email" | "instagram" | "phone")[] = [
    "smile",
    "email",
    "instagram",
    "phone"
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-40 flex flex-col items-center justify-center relative"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-variant inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-variant mt-6 mb-16">
        {labels.title}
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-center gap-8">
        {labels.contacts.map((contact, index) => (
          <div key={index} className="flex w-54 md:flex-col items-center gap-4">
            <Icon name={iconNames[index]} className="w-16 h-16 text-primary-variant" />
            <div className="flex flex-col md:items-center">
              <p className="text-xs text-subtitle md:text-sm">{contact.label}</p>
              <p className="text-xs text-subtitle">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
