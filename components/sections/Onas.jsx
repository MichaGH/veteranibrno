import React from 'react';
import Image from 'next/image';

function Onas() {
  return (
    <section id="about" className="bg-white text-black py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 font-roboto-slab">O klubu</h2>
          <p className="text-gray-700 mb-4">
            Klub výsadkových veteránů Jana Kubiše vznikl roku 1994 jako spolek bývalých výsadkářů, sportovních parašutistů a jejich příznivců. Ctíme minulost, zachováváme památku hrdinů a sdílíme společné hodnoty.
          </p>
          <p className="text-gray-700">
            Pořádáme schůzky, společenské a pietní akce, spolupracujeme s vojenskými institucemi i dalšími kluby v Česku a na Slovensku.
          </p>
        </div>
        <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/onas.jpg"
            alt="Členové klubu výsadkových veteránů"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Onas;
