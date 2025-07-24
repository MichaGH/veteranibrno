import Link from "next/link";

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <header className="bg-gray-100 text-black pt-36 pb-14 border-t-4 border-[#FDCE08] relative z-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="text-sm text-gray-600 mb-3">
            <ol className="flex justify-center flex-wrap gap-2 items-center">
              <li>
                <Link href="/" className="hover:underline text-[#7a0000]">
                  Domů
                </Link>
              </li>
              {breadcrumbs.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-black">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:underline text-[#7a0000]">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold font-roboto-slab text-gray-800">{title}</h1>
      </div>
    </header>
  );
}
