"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { navLinks } from "@/constants";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="w-full border-b border-gray-200">
            <div className="mx-auto px-4 lg:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="inline-block align-middle">
                    <Image src="/assets/images/Logo.svg" alt="genhouse-logo" width={204} height={64} priority />
                </Link>
                <div className="lg:w-5/6 inline-flex md:w-full justify-between">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:inline-flex items-center justify-evenly w-full">
                        {navLinks?.map(link => (
                            <Link key={link.title} href={link.route} className="text-dark hover:text-dark-hover font-semibold text-[clamp(0.6675rem,1.389vw,1.25rem)] capitalize">
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                    {/* Auth Buttons */}
                    <div className="hidden md:inline-flex items-center space-x-6">
                        <Link href="/login" className="text-dark hover:text-dark-hover font-medium text-[clamp(0.6675rem,1.389vw,1.25rem)] w-[clamp(4.6727rem,9.722vw,8.75rem)] text-center">
                            Log in
                        </Link>
                        <Button className="bg-gold hover:bg-gold-hover text-white font-medium text-[clamp(0.6675rem,1.389vw,1.25rem)] w-[clamp(4.6727rem,9.722vw,8.75rem)]">Join</Button>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden inline-block">
                        <button
                            type="button"
                            className="text-gray-700 hover:text-gray-900"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;