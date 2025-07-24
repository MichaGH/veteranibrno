import React from 'react';
import { CalendarDays } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Pietní akt – Resslova ulice, Praha',
    date: '27. července 2025',
    location: 'Praha, Resslova ul.',
    description: 'Každoroční vzpomínka na padlé parašutisty z operace Anthropoid.',
  },
  {
    id: 2,
    title: 'Setkání výsadkářů v Brně',
    date: '15. srpna 2025',
    location: 'Brno, Univerzita obrany',
    description: 'Měsíční setkání členů a prezentace nové kroniky klubu.',
  },
  {
    id: 3,
    title: 'Výlet do Dolních Vilémovic',
    date: '10. září 2025',
    location: 'Dolní Vilémovice',
    description: 'Společný výlet k rodnému domku Jana Kubiše se zájemci z dalších klubů.',
  },
];

function UpcomingEvents() {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center font-roboto-slab">Nadcházející události</h2>
        <ul className="space-y-8">
          {events.map(event => (
            <li key={event.id} className="flex items-start gap-4 border-l-4 border-[#8b1e1e] pl-4">
              <CalendarDays className="text-[#8b1e1e] mt-1 w-6 h-6 shrink-0" />
              <div>
                <p className="text-sm text-gray-500">{event.date} • {event.location}</p>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-gray-700 text-sm">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default UpcomingEvents;
