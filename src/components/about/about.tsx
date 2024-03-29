import { typography } from "@/lib/typography";
import programmer from "@/assets/programmer.svg";
import TechStack from "./tech-stack";
import RevealAnimation from "../reveal-animation";
import glowTop from "@/assets/glow-top.svg";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col gap-4 justify-center items-center max-w-screen-lg pb-12 border border-transparent"
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
        <div className="mt-8 flex flex-col items-center">
          <h2 className={`${typography.h2}`}>About me 👨🏼‍💻</h2>
          <p className={typography.p}>
            I'm a passionate developer with a strong commitment in continuous
            learning. My expertise lies in web development, with a focus on
            providing smooth user experiences. I excel in collaborative
            team-based development and consistently strive for the best outcomes
            of my development processes. My primary framework is Next.js, and I
            am proficient in building robust applications within the React
            ecosystem.
          </p>
        </div>
      </RevealAnimation>
      <RevealAnimation>
        <div className="flex flex-col gap-4 items-center">
          <img
            src={programmer}
            alt="programmer-image"
            className="max-w-xs md:max-w-lg mt-4"
          />
          <TechStack />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default About;
