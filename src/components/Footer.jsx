import React from "react";
import navLinks from "../constants/navLinks";
import socialLinks from "../constants/socials";

const Footer = () => {
  return (
    <footer className="intersect-once intersect:motion-preset-slide-up motion-duration-700 flex flex-col gap-4 border-t-2 border-neutral-200 py-12 md:py-16">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-evenly">
        <div className="flex flex-col gap-2 lg:gap-4">
          <p className="text-2xl font-bold lg:self-center lg:text-4xl">
            Deepanshu Verma
          </p>
          <div className="flex gap-4 lg:gap-8">
            {socialLinks.map(({ label, href, icon: Icon }, index) => (
              <a
                href={href}
                target="_blank"
                key={index}
                title={label}
                className="transition-colors hover:text-neutral-400"
              >
                <Icon className="lg:text-xl" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-bold text-black lg:text-2xl">Pages</h5>
          {navLinks.map(({ label, href }, index) => (
            <a
              href={href}
              key={index}
              className="text-md font-medium text-neutral-700 transition-colors hover:text-neutral-400 lg:text-lg"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-md border-t-2 border-neutral-200 pt-2 text-center text-neutral-400 lg:text-xl">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
