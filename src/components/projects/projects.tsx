import { typography } from "@/lib/typography";
import estudev from "@/assets/projects/estudev.png";
import reverie from "@/assets/projects/reverie.png";
import quillify from "@/assets/projects/quillify.png";
import ProjectCard from "./project-card";
import RevealAnimation from "../reveal-animation";
import glowTop from "@/assets/glow-top.svg";

const projectList = [
  {
    name: "EStudev",
    desc: "Discover a collaborative network of student developers to elevate your development skills and tech career aspirations.",
    image: estudev,
    imageAlt: "estudev-image",
    stack: ["NextJS", "Typescript", "PostgreSQL", "ShadcnUI", "Prisma"],
    links: {
      github: "https://github.com/raishudesu/eStudev",
      live: "https://estudev.vercel.app",
    },
  },
  {
    name: "Reverie",
    desc: "A web-based diary application that's accessible from both desktop and mobile browsers.",
    image: reverie,
    imageAlt: "reverie-image",
    stack: ["React", "Typescript", "Firebase", "ShadcnUI"],
    links: {
      github: "https://github.com/raishudesu/Reverie",
      live: "https://reverie-notes.web.app",
    },
  },
  {
    name: "Quillify",
    desc: "Digital source for tech insights, tutorials, and community discussions.",
    image: quillify,
    imageAlt: "quillify-image",
    stack: ["React", "ExpressJS", "MongoDB", "MaterialTailwind"],
    links: {
      github: "https://github.com/raishudesu/quillify-client",
      live: "https://quillify.vercel.app",
    },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col gap-4 justify-center items-center max-w-screen-lg pb-12"
    >
      <div
        className="absolute inset-0 -z-10 -mx-28 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10">
          <img
            src={glowTop}
            className="max-w-none ml-24 opacity-20 dark:opacity-30"
            width={1404}
            height={658}
            alt="glow-top-background"
          />
        </div>
      </div>
      <RevealAnimation>
        <h2 className={`${typography.h2} text-center pt-8`}>Projects 🚀</h2>
      </RevealAnimation>
      <div className="grid lg:grid-cols-2 gap-2">
        {projectList.map(
          ({ name, desc, image, imageAlt, stack, links }, index) => (
            <RevealAnimation key={index}>
              <ProjectCard
                projectName={name}
                projectDescription={desc}
                img={image}
                alt={imageAlt}
                stack={stack}
                links={links}
              />
            </RevealAnimation>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
