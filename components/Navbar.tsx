'use client'

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustonButton";
import { useState } from "react";

const Links = [
  {
    name: "Home",
    path: "#",
  },
];

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    
  return (
    <header className="w-full bg-black relative">
      <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
        <Image src='/logo.avif' alt="logo" width={100} height={100} />
            <CustomButton title="Menu" textStyles="text-white font-bold uppercase" handleClick={() => setIsOpen(!isOpen)} containerStyles="gap-1 lg:hidden " rightIcon="/logo.avif" />
            <div className={`w-full h-screen z-10 lg:hidden flex flex-col bg-black absolute top-[100px] transition duration-300 ease-in-out ${isOpen ? 'translate-x-0 ': '-translate-x-full'}`}>
                <ul className="flex flex-col gap-3">
                    {Links.map(links => (
                        <li className="py-3 border-b-[1px] border-gray-500" key={links.path}><Link href={links.path} className="p-3 text-gray-300 uppercase">{links.name}</Link></li>
                    ))}
                </ul>
            </div>
            <ul className="hidden lg:flex gap-3">
                {Links.map(links => (
                    <li key={links.path}><Link href={links.path} className="p-3 text-gray-300 uppercase">{links.name}</Link></li>
                ))}
            </ul>

      </nav>
    </header>
  );
};
export default Navbar;
