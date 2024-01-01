import { FormValues } from "@/lib/types";
import emailjs from "@emailjs/browser";

type FormValues = {
  email: string;
  message: string;
};

export const emailSubmit = async (details: FormValues) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_KEY as string,
      process.env.NEXT_PUBLIC_TEMPLATE as string,
      details,
      process.env.NEXT_PUBLIC_KEY as string
    );
  } catch (error) {
    console.log(error);
  }
};
