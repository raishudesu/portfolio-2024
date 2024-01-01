import { AiFillGithub } from "react-icons/ai";
import { BiLogoUpwork } from "react-icons/bi";
const Links = () => {
  return (
    <>
      <a
        href="https://github.com/raishudesu"
        aria-label="Visit my Github"
        className="hover:scale-110 transition ease-in-out"
      >
        <AiFillGithub size={30} />
      </a>
      <a
        href="https://www.upwork.com/freelancers/~01f820ee60c225abf9"
        aria-label="Visit my Upwork Account"
        className="hover:scale-110 transition ease-in-out"
      >
        <BiLogoUpwork size={30} />
      </a>
    </>
  );
};

export default Links;
