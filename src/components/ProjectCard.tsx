import Image from "next/image";

interface ProjectCardProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    position: "left" | "right";
}

export default function ProjectCard({ title, imageSrc, imageAlt, position }: ProjectCardProps) {
    const isLeft = position === "left";

    return (
            <div className={`pt-16 md:pt-20 flex ${!isLeft && "justify-end"}`}>
                <div
                    className={`relative transform ${isLeft ? "rotate-2" : "-rotate-2"} hover:rotate-0 transition-transform duration-500 group`}
                >
                    <Image
                        src={imageSrc || "/placeholder.svg"}
                        alt={imageAlt}
                        width={800}
                        height={450}
                        className="rounded-lg shadow-xl group-hover:blur-[2px]"
                    />
                    <div className={`absolute ${isLeft ? "left-0 rounded-tl-lg rounded-br-lg" : "right-0 rounded-tr-lg rounded-bl-lg"} top-0 bg-white px-6 py-3 shadow-md z-20 border border-black group-hover:hidden`}>
                        <h2 className="text-xl md:text-4xl font-bold text-dark">{title}</h2>
                    </div>
                    <div className={`hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 py-2 shadow-md z-20 rounded-lg border border-black group-hover:block`}>
                        <h2 className="text-3xl md:text-5xl font-semibold text-dark">Product</h2>
                    </div>
                </div>
            </div>
    );
}