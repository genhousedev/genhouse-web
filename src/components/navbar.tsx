import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <nav className="hidden lg:block">
            <div className="px-12 py-9 flex justify-between items-center">
                <Image src="/assets/images/Logo.svg" alt="genhouse-logo" width={164} height={64} priority={true} />
                <div className="inline-flex justify-around items-center w-5/6">
                        {navLinks.map(link => (
                            <Link key={link.title} href="#" className="hover:text-dark-hover capitalize text-[clamp(0.875rem,1.25vw,1.25rem)] font-semibold">{link.title}</Link>
                        ))}
                    <div className="flex items-center space-x-[1.875rem]">
                        <a href="#" className="text-center py-2 w-32 hover:text-dark-hover text-[clamp(1rem,1.406vw,1.125rem)]">Log in</a>
                        <Link href="#" className="bg-gold text-white py-2 rounded-md hover:bg-gold-hover w-[8.75rem] text-center text-[clamp(1rem,1.406vw,1.125rem)]">Join</Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Navbar;