'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
<header className="absolute left-0 right-0 z-50 bg-[#1a1a1a] border-b-2 border-[#FDCE08] bg-deev shadow-md">
  <div className="max-w-screen-xl mx-auto flex px-4 pt-10 pb-6 relative items-center justify-between">
    <div className="absolute  top-full left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-4  -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 z-10">
      <Link href="/">
      <Image
        src="/logos/logo.png"
        alt="Emblem"
        fill
        className="object-contain rounded-full border-2 border-[#FDCE08] shadow-xl bg-black"
        priority
        />
        </Link>
    </div>
    <div className="w-32 sm:w-36" />

    <nav className="hidden md:flex flex-1 justify-end">
      <ul className="flex flex-wrap items-center gap-x-4 text-sm sm:text-base text-gray-200">
        <NavItem href="/o-nas" label="O nás" />
        <Separator />
        <NavItem href="/stanovy" label="Stanovy" />
        <Separator />
        <NavItem href="/prispevky" label="Příspěvky" />
        <Separator />
        <NavItem href="/kontakt" label="Kontakt" />
        <Separator />
        <NavItem href="/odkazy" label="Odkazy" />
      </ul>
    </nav>

    <div className="md:hidden z-20">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-200 focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu className="w-8 h-8 mr-8"/>
      </button>
    </div>
  </div>

  {menuOpen && (
    <div className="md:hidden px-6 pb-4 text-gray-200">
      <ul className="space-y-2">
        <NavItem href="/o-nas" label="O nás" />
        <NavItem href="/stanovy" label="Stanovy" />
        <NavItem href="/prispevky" label="Příspěvky" />

        <NavItem href="/kontakt" label="Kontakt" />
        <NavItem href="/odkazy" label="Odkazy" />
      </ul>
    </div>
  )}
</header>

  );
}

function NavItem({ href, label }) {
  return (
    <li>
      <Link href={href} className="hover:text-[#f43f5e] transition-colors duration-200 block">
        {label}
      </Link>
    </li>
  );
}

function Separator() {
  return <li className="text-gray-600 font-light">|</li>;
}
