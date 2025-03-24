import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: '500',
  subsets: ['latin']
});
function HeroSection() {
  return (
    <div className="bg-[rgba(214,160,43,0.2)]">
      {/* className="bg-[url('/assets/images/wireframes.svg')] bg-no-repeat bg-cover" */}
      <div className="container mx-auto px-4 py-20">
        <div className={`text-center text-dark text-[4rem] font-bold ${poppins.className}`}>
          <h1>
            Elevate <span className="text-gold-dark">🡽</span> your career
          </h1>
          <h2>
            Empower <span className="text-gray">🗲</span> your business
          </h2>
          <p className="text-[3.5rem] font-normal mt-20">
            UX & UI designs
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;