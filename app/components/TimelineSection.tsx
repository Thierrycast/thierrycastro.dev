"use client";
import { useState } from "react";

export default function TimelineSection() {
  const experiences = [
    {
      company: "iFood",
      role: "Software Engineer",
      description:
        "Responsável por liderar o desenvolvimento e a evolução da plataforma de suporte para restaurantes parceiros, integrando tecnologia, design e Customer Success. Meu foco era reduzir atendimentos emergenciais, implementar soluções escaláveis e refletir a evolução de problemas críticos no produto. Liderei a reestruturação do processo de alteração de dados bancários, com prioridade na prevenção de fraudes, garantindo maior segurança."
    },
    {
      company: "Apple",
      role: "Frontend Developer",
      description:
        "Atuei no desenvolvimento de interfaces responsivas e acessíveis para aplicações web, garantindo uma experiência fluida para milhões de usuários. Trabalhei com tecnologias modernas como React e Tailwind CSS, otimizando a performance das páginas e implementando design systems escaláveis."
    },
    {
      company: "Microsoft",
      role: "Backend Developer",
      description:
        "Desenvolvi APIs escaláveis para integração de serviços em nuvem, utilizando Node.js e Azure. Implementei otimizações que reduziram o tempo de resposta em 30%, melhorando a eficiência dos sistemas internos da empresa."
    },
    {
      company: "Amazon",
      role: "Full Stack Developer",
      description:
        "Trabalhei na construção de soluções de e-commerce altamente escaláveis, garantindo alta disponibilidade e segurança dos serviços. Colaborei na criação de novos recursos para aprimorar a experiência do usuário e melhorar as métricas de conversão da plataforma."
    }
  ];

  const [selected, setSelected] = useState(experiences[0]);

  return (
    <section
      id="experiences"
      className="w-full min-h-screen flex flex-col items-start justify-center max-w-2xl px-6 sm:px-8 xl:px-0 py-24"
    >
      <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
        Trajetória
      </span>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-10">
        Experiências
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="flex flex-col gap-4 p-6 bg-neutral border border-neutral-light rounded-xl w-full lg:w-1/3">
          {experiences.map((experience, index) => (
            <button
              key={index}
              className={`w-full py-2 text-sm font-medium rounded transition-all text-white text-left px-4 ${
                selected.company === experience.company
                  ? "bg-primary-light"
                  : "bg-primary-light/25"
              }`}
              onClick={() => setSelected(experience)}
            >
              {experience.company}
            </button>
          ))}
        </div>

        <div className="w-full lg:w-2/3 pt-2">
          <h3 className="text-base sm:text-lg font-medium text-primary-light">
            {selected.company}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mt-2">
            {selected.role}
          </p>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            {selected.description}
          </p>
        </div>
      </div>
    </section>
  );
}