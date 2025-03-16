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
      value: "email@gmail.com",
    },
    {
      id: 3,
      icon: "/icons/contact/instagram.svg",
      label: "Instagram",
      value: "@username",
    },
    {
      id: 4,
      icon: "/icons/contact/phone.svg",
      label: "Telefone",
      value: "(14) 99999-9999",
    },
  ];
  

  return (
    <section id="contact" className="w-full h-screen max-w-2xl px-8 py-24 2xl:px-0 flex flex-col items-center justify-center relative">
          <span className="text-sm font-medium bg-primary/25 px-8 py-3 rounded text-primary-light">
          Contato
          </span>
          <h2 className="text-2xl font-semibold text-primary-light mt-6 mb-20">Fale comigo</h2>
    
          <div className="w-full flex justify-center gap-8">
            {
              contactInfo.map((contact, index) => (
                <div key={index} className="flex w-54 flex-col items-center gap-4">
                    <Image
                      src={contact.icon}
                      alt={contact.label}
                      width={62}
                      height={62}
                    />
                  <p className="text-sm">{contact.label}</p>
                  <p className="text-sm">{contact.value}</p>
                </div>
              ))
            }
          </div>
        </section>
  )
}
