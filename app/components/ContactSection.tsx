import Image from 'next/image';

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
  const icons = [
    '/icons/contact/smile.svg',
    '/icons/contact/email.svg',
    '/icons/contact/instagram.svg',
    '/icons/contact/phone.svg'
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-40 flex flex-col items-center justify-center relative"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        {labels.badge}
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-16">
        {labels.title}
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-center gap-8">
        {labels.contacts.map((contact, index) => (
          <div key={index} className="flex w-54 md:flex-col items-center gap-4">
            <Image src={icons[index]} alt={contact.label} width={62} height={62} />
            <div className="flex flex-col md:items-center">
              <p className="text-xs md:text-sm">{contact.label}</p>
              <p className="text-xs text-white/80">{contact.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
