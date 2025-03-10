

function PartnerSection() {

    const partners = [
        {
            name: "Raidlayer",
            logo: "assets/images/Raidlayer.svg",
        },
        {
            name: "HANA",
            logo: "assets/images/Hana.svg",
        },
        {
            name: "WORK",
            logo: "assets/images/work24.svg",
        },
    ];

    return (
        <div>
            <section className="py-12 md:py-16 lg:py-10">
                <div className="container px-4 mx-auto">
                    <h2 className="text-5xl md:text-4xl font-semibold text-center mb-12 text-gray-900">Our Partner Organizations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
                        {partners.map((partner) => (
                            <div key={partner.name}>
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PartnerSection;
