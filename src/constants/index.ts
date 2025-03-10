
export const navLinks = [
    { title: "explore", route: "/explore" },
    { title: "for designers", route: "/designers" },
    { title: "for organizations", route: "/organizations" },
    { title: "solutions suite", route: "/solution" },
    { title: "contact", route: "/contact" }
];

export const footerLink = [
    {
        title: 'projects',
        children: ['featured project']
    },
    {
        title: 'community',
        children: ['join our community', 'Careers']
    },
    {
        title: 'about',
        children: ['who we are', 'contact us', 'testimonials']
    },
    {
        title: 'log in',
        children: ['sign up', 'volunteer', 'organizations']
    }
];


export const projects = [
    {
        title: "MedTourism",
        imageSrc:
            "/assets/images/MedTourism.svg",
        imageAlt: "MedTourism website on a laptop",
        position: "left" as const,
    },
    {
        title: "Resocial",
        imageSrc:
            "/assets/images/Resocial.svg",
        imageAlt: "Resocial app on a mobile phone",
        position: "right" as const,
    },
    {
        title: "UXcelerate",
        imageSrc:
            "/assets/images/UXcelerate.svg",
        imageAlt: "UXcelerate dashboard on a desktop monitor",
        position: "left" as const,
    },
];


export const teamMembers = [
  {
    id: 1,
    name: "Faroog Fathima Jafri",
    role: "UX Designer",
    quote:
      "I'm grateful to have been part of this project, and I'm excited to see how these designs will improve patient experiences in medical tourism worldwide.",
    image: "/assets/images/faroog-fathima-jafri.svg",
  },
  {
    id: 2,
    name: "Neo Kay",
    role: "UX Designer",
    quote:
      "I love what we do at Genhouse Project. Random individuals meeting towards a unified goal and planning to do something about the things that we do not find in the UX industry. I love these vibes!!!",
    image: "/assets/images/neo-kay.svg",
  },
  {
    id: 3,
    name: "Navad Gefen",
    role: "UX Designer",
    quote:
      "Working with Genhouse has been an incredible experience. The collaborative environment, diverse team, and emphasis on creativity and growth made every project inspiring and rewarding.",
    image: "/assets/images/navad-gefen.svg",
  },
];