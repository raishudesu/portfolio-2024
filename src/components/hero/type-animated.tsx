import { typography } from "@/lib/typography";
import { TypeAnimation } from "react-type-animation";

const TypeAnimated = () => {
  return (
    <TypeAnimation
      sequence={[
        "Student",
        1000,
        "Frontend Developer",
        1000,
        "Backend Developer",
        1000,
        "Full Stack Developer",
        1000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className={`${typography.h4} tracking-wider uppercase`}
    />
  );
};

export default TypeAnimated;
