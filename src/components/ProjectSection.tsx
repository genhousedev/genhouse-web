import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";

function ProjectSection() {

    return (
        <main className="min-h-screen bg-alice-blue relative overflow-hidden bg-[url('/assets/images/project-background.png')] bg-blend-color">
            {/* Content container */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 py-2 md:py-10">
                <div className="flex flex-col gap-10">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            imageSrc={project.imageSrc}
                            imageAlt={project.imageAlt}
                            position={project.position}
                        />
                    ))}
                </div>

                {/* Globe decoration */}
                <div className="absolute bottom-0 -right-40">
                    <Image
                        src="/assets/images/colorful-globe.svg"
                        alt="Colorful globe"
                        width={294}
                        height={294}
                        className="animate-spin-slow"
                    />
                </div>
            </div>
        </main>
    );
}

export default ProjectSection;