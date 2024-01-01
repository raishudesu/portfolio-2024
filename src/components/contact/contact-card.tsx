import { Card, CardContent } from "../ui/card";
import ContactForm from "./contact-form";

const ContactCard = () => {
  return (
    <Card className="w-full max-w-md dark:bg-[#1c1917]">
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  );
};

export default ContactCard;
