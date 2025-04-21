import Image from "next/image"

export default function ContactSection() {

  const contactInfo = [
    {
      id: 1,
      icon: "/icons/contact/smile.svg", 
      label: "Nome",
      value: "Thierry Castro",
    },
    {
      id: 2,
      icon: "/icons/contact/email.svg",
      label: "E-mail",
      value: "thierrycastro555@gmail.com",
    },
    {
      id: 3,
      icon: "/icons/contact/instagram.svg",
      label: "Instagram",
      value: "@thierry_casttro",
    },
    {
      id: 4,
      icon: "/icons/contact/phone.svg",
      label: "Telefone",
      value: "(33) 99959-5927",
    },
  ];
  

  return (
    <section
      id="contact"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 py-40 flex flex-col items-center justify-center relative"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        Contato
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-16">
        Fale comigo
      </h2>
          <div className="w-full flex flex-col md:flex-row justify-center gap-8">
            {
              contactInfo.map((contact, index) => (
                <div key={index} className="flex w-54 md:flex-col items-center gap-4">
                  <Image
                    src={contact.icon}
                    alt={contact.label}
                    width={62}
                    height={62}
                  />
                  <div className="flex flex-col md:items-center" >
                    <p className="text-xs md:text-sm">{contact.label}</p>
                    <p className="text-xs text-white/80">{contact.value}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
  )
}
