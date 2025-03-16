
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full max-w-2xl px-8 py-24 2xl:px-0 flex justify-between">
      <div className="w-1/2" >
        <Image
          src="/profile.png"
          alt="rocket"
          width={488}
          height={488}
        />
      </div>
      <div className="w-1/2 py-8">
        <span className="text-sm font-medium bg-primary/25 px-8 py-3 rounded text-primary-light">Sobre mim</span>
        
        <h2 className="text-2xl font-semibold text-primary-light mt-6 mb-10" >Thierry Castro</h2>
        <p className="text-sm" >Mineiro apaixonado por música e tecnologia, tenho me dedicado intensamente ao universo da programação nos últimos anos. Ao longo dessa trajetória, adquiri experiência com diversas tecnologias e frameworks, incluindo TypeScript/JavaScript e seus frameworks de backend e frontend, como Next.js, Nest.js e Svelte. </p>
      </div>
    </section>
  )
}
