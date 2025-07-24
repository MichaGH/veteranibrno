import React from 'react'

function Herosection() {
  return (
    <section className="bg-[#1a1a1a] text-white md:py-16 pt-50 pb-32  md:h-screen flex justify-center items-end md:items-center relative overflow-hidden">
      {/* Optional faint background image or texture */}
      <div className="absolute inset-0 bg-[url('/images/texture-parachute.jpg')] bg-cover bg-center opacity-5 z-0" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 relative z-10">

        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-amber-400 text-sm tracking-widest uppercase mb-2">
            „Čest, paměť, tradice“
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            Klub výsadkových veteránů
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-md mx-auto md:mx-0 leading-relaxed">
            Uchováváme odkaz výsadkářů. Spojujeme generace, které sloužily se ctí. Vzpomínáme. Vzdáváme hold.
          </p>

          <a
            href="#about"
            className="inline-block bg-red-700 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-full transition-shadow shadow-md hover:shadow-lg"
          >
            Více o klubu
          </a>
        </div>

        {/* Image with gradient overlay */}
        <div className="md:w-1/2 w-full h-80 md:h-[24rem] relative rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/twocolored.png"
            alt="Výsadkáři - historické foto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:absolute bottom-6 left-1/2 transform w-8 h-8 rounded-full  -translate-x-1/2 z-10 flex justify-center items-center">
        <span className="animate-bounce text-yellow-400  text-3xl">↓</span>
      </div>
    </section>
  )
}

export default Herosection
