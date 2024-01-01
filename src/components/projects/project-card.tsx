import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

type TProjectLinks = {
  github: string;
  live: string;
};

type TProjectCard = {
  projectName: string;
  projectDescription: string;
  img: string;
  alt: string;
  stack: string[];
  links: TProjectLinks;
};

const ProjectCard = ({
  projectName,
  projectDescription,
  img,
  alt,
  stack,
  links,
}: TProjectCard) => {
  return (
    <Card className="dark:bg-[#1c1917]">
      <CardHeader>
        <CardTitle>{projectName} </CardTitle>
        <CardDescription>{projectDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={img} alt={alt} className="rounded-md" />
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="flex gap-1">
          <a
            href={links.github}
            target="_blank"
            className="hover:scale-110 transition ease-in-out"
          >
            <FaGithub size={25} />
          </a>
          <a
            href={links.live}
            target="_blank"
            className="hover:scale-110 transition ease-in-out"
          >
            <BiLink size={25} />
          </a>
        </div>
        <div className="flex gap-1 flex-wrap">
          {stack.map((stack, index) => (
            <Badge key={index}>{stack}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
