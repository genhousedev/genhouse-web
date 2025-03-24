import Image from "next/image";
import Link from "next/link";

export default function WhatWeOfferSection() {
    return (
        <main className="relative">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-10">What we offer</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-3">
                    {/* For Organization */}
                    <div className="flex flex-col gap-8 overflow-hidden">
                        <div className="bg-organizationLinearBg h-[17.25rem] flex items-center justify-center rounded-2xl relative">
                            <div className="absolute top-[14.5rem] left-5 text-white text-[1.5625rem] font-semibold">For Organization</div>
                            <Image
                                src="assets/images/magnifying-glass.svg"
                                alt="magnifying-glass-icon"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>

                        <div className="bg-alice-blue p-10 flex-1 relative overflow-hidden rounded-2xl">
                            <div className="space-y-8 z-10 text-[1.5625rem] text-dark">
                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-dark text-white flex items-center justify-center font-medium text-lg">
                                        1
                                    </div>
                                    <p>
                                        Find skilled UX designers and researchers for your projects through our curated pool of professionals
                                    </p>
                                </div>

                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-dark text-white flex items-center justify-center font-medium text-lg">
                                        2
                                    </div>
                                    <p>
                                        Don&apos;t have time and resources to manage project yourself? Enjoy a full design and marketing service
                                        with a much lower fee through <span className="text-blue-600 font-medium">GP Solutions</span>
                                    </p>
                                </div>

                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-dark text-white flex items-center justify-center font-medium text-lg">
                                        3
                                    </div>
                                    <p>
                                        Bring your product vision to life by leveraging our design, development and marketing services
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center my-[4.25rem] gap-4">
                                <Link href="#" className="text-link font-medium underline text-2xl">
                                    Learn more
                                </Link>
                                <button className="bg-dark text-white py-[0.875rem] px-[2.875rem] rounded-md hover:bg-dark-hover transition-colors font-medium">
                                    Join as an Organization
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* For Designers */}
                    <div className="flex flex-col rounded-lg gap-8 overflow-hidden">
                        <div className="bg-designerLinearBg relative h-[17.25rem] flex items-center justify-center rounded-2xl">
                            <div className="absolute top-[14.5rem] lg:right-0 lg:text-end lg:pr-6 text-white text-[1.5625rem] font-semibold left-5">For Designers</div>
                            <Image
                                src="assets/images/hand-cursor.svg"
                                alt="hand-cursor-icon"
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>

                        <div className="bg-[rgba(214,160,43,0.2)] p-10 flex-1 rounded-2xl">
                            <div className="space-y-7 text-[1.5625rem] text-dark">
                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center font-medium text-lg">
                                        1
                                    </div>
                                    <p>
                                        Gain hands on experience through job postings, real design challenges, and collaborative projects
                                    </p>
                                </div>

                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center font-medium text-lg">
                                        2
                                    </div>
                                    <p>
                                        Strengthen your portfolio with real-world projects and showcase your skills to potential employers
                                    </p>
                                </div>

                                <div className="flex gap-7 items-center">
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center font-medium text-lg">
                                        3
                                    </div>
                                    <p>
                                        Connect with industry professionals, organizations, and peers to expand your career opportunities
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center my-[7.5rem] gap-4">
                                <Link href="#" className="text-link font-medium underline text-2xl">
                                    Learn more
                                </Link>
                                <button className="bg-gold text-white py-[0.875rem] px-[4.03125rem] rounded-md hover:bg-gold-hover transition-colors font-medium">
                                    Join as a Designer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 -left-40 z-0 xl:-left-0">
                    <Image
                        src="assets/images/a-splash-of-color.svg"
                        alt="colorful-paint-splash"
                        width={267}
                        height={289}
                    />
                </div>
            </div>
        </main>
    );
}
