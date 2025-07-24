'use client';
import React from 'react';
import Image from 'next/image';

const posts = [
    {
        id: 1,
        title: 'Nekrolog a vzpomínka.',
        excerpt: 'Ve čtvrtek 11.8. jsme se docela překvapivě rozloučili s našim kolegou pplk.v.z. Ing.Petrem Kopeckým (Číra 2), který byl členem našeho brněnského klubu výsadkových veteránů. Já osobně jsem měl k němu bližší vztah, s jeho otcem, Jiřím Kopeckým jsem působil na zpravodajské rezidentuře v Brně (Olin Jurman + kniha „Špion!), kde byl Jiří K. odborník na spojovací techniku a který byl bývalý příslušník 7. pluku ZÚ v Holešově v létech 1963-64.',
        image: '/posts/1.jpg',
        date: 'Červenec 2024',
        href: '/cinnosti/vilemovice-2024'
    },
    {
        id: 2,
        title: 'Vážení kolegové.',
        excerpt: 'Dne 15.4.2022 odešel do výsadkového nebe náš přítel, kamarád, kolega, čet.v.v. František Antl po těžké operaci v nemocnici u sv.Anny v Brně ve věku 80 let, kterých se dožil 15.12.1941. Voj. zákl.službu nastoupil k 22.průzkumnému praporu v Holešově, poddůstojnickou školu absolvoval u 72. výs. praporu v Prostějově, po jejím ukončení se vrátil k 7. výs. pluku Holešov, kde byli jeho velitelé Repaský, Janků, Požár, Hrbek. V roce 1961 odešel do zálohy jako četař-velitel SHPz',
        image: '/posts/2.jpg',
        date: 'Duben 2024',
        href: '/cinnosti/vyrocni-schuze-2024'
    },
    {
        id: 3,
        title: 'Poslední rozloučení',
        excerpt: 'Jsme zde, abychom vzdali poslední poctu Čestnému předsedovi klubu výsadkových veteránů Jana Kubiše Brno, plukovníkovi ve výslužbě, Ing. Ivanu Kutínovi, který se narodil 4.února 1923 v obci Zareča, oblast Ukrajiny. Jeho rodiče se krátce na to, přestěhovali do Chocně, kde Ivan vystudoval obchodní akademii, kterou ukončil v roce 1944 a hned na to ho tehdejší německá mašinérie protektorátu Čechy a Morava odvedla na nucené práce, kopat',
        image: '/posts/3.jpg',
        date: 'Červen 2024',
        href: '/cinnosti/sraz-hamry-2024'
    }
];

function LatestPosts() {
    function truncateExcerpt(text, maxLength = 150) {
        if (text.length <= maxLength) return text;
        const truncated = text.slice(0, maxLength);
        return truncated.slice(0, truncated.lastIndexOf(' ')) + '…';
    }
    return (
        <section className="bg-[#f4f4f4] text-black py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10 text-center font-roboto-slab">Nejnovější příspěvky</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <a key={post.id} href={post.href} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                            <div className="relative w-full h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <p className="text-sm text-gray-500">{post.date}</p>
                                <h3 className="text-lg font-semibold text-[#8b1e1e] mb-2">{post.title}</h3>
                                <p className="text-gray-700 text-sm">{truncateExcerpt(post.excerpt)}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default LatestPosts;
