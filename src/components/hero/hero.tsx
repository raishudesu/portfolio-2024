import { typography } from "@/lib/typography";
import Links from "./links";
import TypeAnimated from "./type-animated";
import RevealAnimation from "../reveal-animation";

const Hero = () => {
  return (
    <section
      id="top"
      className="flex flex-col gap-6 justify-center  min-h-screen max-w-screen-lg"
    >
      <RevealAnimation>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <h1 className={`${typography.h1} tracking-wider uppercase`}>
              Barysh Bacaltos
            </h1>
            <TypeAnimated />
          </div>
          <p className={typography.p}>
            A developer with a proven track record of delivering high-quality
            digital experiences, passionate about collaboration and continuous
            learning, with a meticulous eye for detail.
          </p>
        </div>
      </RevealAnimation>
      <RevealAnimation>
        <div className="flex gap-2 ">
          <Links />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Hero;
