import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoMongodb,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress, SiPrisma, SiPostgresql } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="flex gap-4 mt-3 flex-wrap">
      <TbBrandNextjs className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <FaReact className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <BiLogoTypescript className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <SiExpress className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <BiLogoTailwindCss className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <BiLogoMongodb className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <SiPostgresql className="w-8 h-8 hover:scale-110 transition ease-in-out" />
      <SiPrisma className="w-8 h-8 hover:scale-110 transition ease-in-out" />
    </div>
  );
};

export default TechStack;
