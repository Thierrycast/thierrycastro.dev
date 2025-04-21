import Image from "next/image"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-2xl px-6 sm:px-8 xl:px-0 md:py-40 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0"
    >
      <div className="w-full px-10 lg:w-1/2 flex justify-center">
        <Image
          src="/profile.png"
          alt="Foto de perfil de Thierry"
          width={400}
          height={400}
          className="max-w-full h-auto"
        />
      </div>

      <div className="w-full lg:w-1/2 py-4 text-center lg:text-left">
        <span className="text-sm font-medium bg-primary/25 px-6 sm:px-8 py-2 rounded text-primary-light inline-block">
          Sobre mim
        </span>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-light mt-6 mb-6">
          Thierry Castro
        </h2>

        <p className="text-xs sm:text-sm leading-relaxed">
          Mineiro apaixonado por música e tecnologia, tenho me dedicado intensamente ao universo da programação nos últimos anos. Ao longo dessa trajetória, adquiri experiência com diversas tecnologias e frameworks, incluindo TypeScript/JavaScript e seus frameworks de backend e frontend, como Next.js, Nest.js e Svelte.
        </p>
      </div>
    </section>
  )
}