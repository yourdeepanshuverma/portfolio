import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-simple-toasts";
import { emailjsApi, emailjsService, emailjsTemplate } from "../constants/env";

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailjsService, emailjsTemplate, form.current, {
        publicKey: emailjsApi,
      })
      .then(
        (res) => {
          toast("Message sent successfully!", 3000);
        },
        (error) => {
          toast("Failed to send message!", 3000);
          console.error(error);
        },
      );

    form.current.reset();
  };

  return (
    <div id="contact" className="mx-auto pb-12 pt-4 md:pb-16 md:pt-4">
      <h2 className="intersect-once intersect:motion-preset-slide-down motion-duration-700 mb-6 text-4xl font-bold text-neutral-800">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="intersect-once intersect:motion-preset-slide-right motion-duration-700 space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-neutral-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="mt-1 block w-full rounded-md border-neutral-300 p-2 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-neutral-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="mt-1 block w-full rounded-md border-neutral-300 p-2 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-neutral-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="mt-1 block w-full rounded-md border-gray-300 p-2 shadow-sm focus:border-neutral-500 focus:ring-neutral-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full transform rounded-full bg-black px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:text-black hover:shadow-xl active:scale-95 sm:w-fit lg:px-12 lg:py-6"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
