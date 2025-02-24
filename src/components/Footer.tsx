import Image from 'next/image';
import React from 'react';
import { footerLink } from '@/constants';


function Footer() {
    
    return (
        <footer className="bg-gold-light text-dark">
            <div className="flex justify-between px-[6.9062rem] py-[3.125rem]">
                <Image className='inline-block' src='/assets/images/Logo.svg' alt='genhouse-logo' width={240} height={101} />
                <div className="inline-grid align-top grid-cols-1 md:grid-cols-4 gap-9">
                    {footerLink?.map((link) => (
                        <div key={link.title} className="mb-6 md:mb-0">
                            <h2 className="text-2xl font-bold mb-3 capitalize">{link.title}</h2>
                            <ul className='text-lg capitalize'>
                                {link?.children.map((child, index) => (
                                    <li key={child} className={`${index % 2 && 'my-1'}`}>{child}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;