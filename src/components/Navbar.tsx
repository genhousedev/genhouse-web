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

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
                        <Link
                            href="/explore"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={toggleMenu}
                        >
                            Explore
                        </Link>
                        <Link
                            href="/for-designers"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={toggleMenu}
                        >
                            For Designers
                        </Link>
                        <Link
                            href="/for-organizations"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={toggleMenu}
                        >
                            For Organizations
                        </Link>
                        <Link
                            href="/solutions-suite"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={toggleMenu}
                        >
                            Solutions Suite
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex px-5 items-center">
                            <div className="flex-shrink-0">
                                <Link
                                    href="/login"
                                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                                    onClick={toggleMenu}
                                >
                                    Log in
                                </Link>
                            </div>
                            <div className="px-2 space-y-1">
                                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium" onClick={toggleMenu}>
                                    Join
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header >
    );
}