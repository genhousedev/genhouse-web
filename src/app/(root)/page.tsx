import HeroSection from "@/components/HeroSection";
import PartnerSection from "../../components/PartnerSection";
import ContactForm from "@/components/ContactForm";
import ProjectSection from "@/components/ProjectSection";
import TestimonialSection from "@/components/TestimonialSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";


function Home() {
    return (
        <>
            <HeroSection />
            <ProjectSection />
            <WhatWeOfferSection />
            <TestimonialSection />
            <ContactForm />
            <PartnerSection />
        </>
    );
}

export default Home;