import Image from "next/image"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen max-w-2xl px-6 sm:px-8 xl:px-0 pt-40 md:pt-0 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <p className="text-base sm:text-lg font-medium">Olá, eu sou</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-light">
          Thierry Castro
        </h1>
        <p className="text-base sm:text-lg mb-8 sm:mb-12 font-medium">
          Full Stack Developer
        </p>

        <a href="">
          <span className="bg-primary-dark px-6 sm:px-8 py-3 rounded text-sm font-semibold inline-block">
            Acessar meu LinkedIn
          </span>
        </a>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/rocket.svg"
          alt="rocket"
          width={300}
          height={300}
          className="hidden md:block"
        />
      </div>
    </section>
  )
}