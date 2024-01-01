import { typography } from "@/lib/typography";
import ContactCard from "./contact-card";
import RevealAnimation from "../reveal-animation";

const Contact = () => {
  return (
    <section className="flex justify-center w-full max-w-screen-lg pb-12">
      <RevealAnimation>
        <div className="flex flex-col gap-4 items-center w-full">
          <h2 className={`${typography.h2}`}>Contact me 📱</h2>
          <ContactCard />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Contact;
