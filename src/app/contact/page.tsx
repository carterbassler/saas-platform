import ContactForm from "@/components/contact-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="w-full py-6 grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
      <div className="flex relative z-20 items-center w-full justify-center px-4 py-4 lg:py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md">
          <div>
            <h1 className="text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
              Contact Us
            </h1>
            <p className="mt-4 text-sm text-muted max-w-sm">
              Please reach out with any questions and we will get back to you
              quickly.
            </p>
          </div>
          <div className="py-10">
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full z-20 hidden md:flex border-loverflow-hidden items-center justify-center">
        Hello
      </div>
    </div>
  );
}

export default Contact;
