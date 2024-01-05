import emailjs from "@emailjs/browser";

type FormValues = {
  email: string;
  message: string;
};

export const emailSubmit = async (details: FormValues) => {
  try {
    await emailjs.send(
      import.meta.env.VITE_SERVICE_KEY as string,
      import.meta.env.VITE_TEMPLATE as string,
      details,
      import.meta.env.VITE_KEY as string
    );
  } catch (error) {
    throw new Error(error as string);
  }
};
