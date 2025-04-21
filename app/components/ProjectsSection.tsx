import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Moderno",
      description: "Uma plataforma de e-commerce otimizada para conversão e experiência do usuário.",
      image: "/images/ecommerce.png"
    },
    {
      title: "Dashboard Analítico",
      description: "Sistema de visualização de dados em tempo real para tomada de decisões estratégicas.",
      image: "/images/dashboard.png"
    },
    {
      title: "Plataforma de Streaming",
      description: "Aplicação para transmissão de vídeos sob demanda com foco em performance.",
      image: "/images/streaming.png"
    },
    {
      title: "Gestão Financeira",
      description: "Ferramenta de controle financeiro com relatórios personalizados.",
      image: "/images/finance.png"
    },
    {
      title: "Rede Social Minimalista",
      description: "Uma rede social focada em interações simples e sem algoritmos invasivos.",
      image: "/images/social.png"
    },
    {
      title: "App de Treinos Personalizados",
      description: "Aplicativo que gera planos de treino personalizados com IA.",
      image: "/images/fitness.png"
    }
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-screen max-w-2xl px-6 sm:px-8 xl:px-0 py-24 flex flex-col items-center justify-end relative"
    >
      <div className="absolute inset-0 bg-[url('/background_glow.svg')] bg-cover bg-center opacity-50 pointer-events-none" />

      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        Trabalhos
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light my-6">
        Meus projetos
      </h2>

      <div className="w-full flex justify-center flex-wrap gap-6 sm:gap-8 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#964CF0] to-[#170033] rounded-xl p-0.5 w-full sm:w-[45%] md:w-[30%] max-w-xs"
          >
            <div className="flex flex-col gap-4 w-full px-4 py-6 rounded-xl bg-black backdrop-blur-md h-full">
              <div className="w-full h-32 sm:h-36 bg-primary-light rounded-lg"></div>
              <h3 className="text-sm font-semibold">{project.title}</h3>
              <p className="text-xs text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}