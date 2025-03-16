import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full max-w-2xl px-8 py-24 2xl:px-0 flex justify-between">
      <div className="w-1/2 flex flex-col justify-center">
        <p className="text-lg font-medium">Olá, eu sou</p>
        <h1 className="text-3xl font-semibold text-primary-light" >Thierry Castro</h1>
        <p className="text-lg mb-12 font-medium">Full Stack Developer</p>

        <a href="">
          <span className="bg-primary-dark px-8 py-3 rounded text-sm font-semibold" >Acessar meu LinkedIn </span>
        </a>
      </div>

      <div className="w-1/2 flex justify-center">
        <Image
          src="/rocket.svg"
          alt="rocket"
          width={400}
          height={400}
        />
      </div>
    </section>
  )
}
