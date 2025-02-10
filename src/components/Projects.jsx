import React from "react";
import { BsGithub } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import projects from "../constants/projects";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-8 pb-12 pt-4 md:pb-16 md:pt-4"
    >
      <div className="max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-bold text-neutral-800">Projects</h1>
        <p className="mt-4 text-center text-neutral-500 md:text-lg">
          Bringing concepts to life with clean code, innovative design, and
          seamless user experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="intersect-once intersect:motion-preset-slide-up motion-duration-700 rounded-xl bg-white p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold text-neutral-800">
              {project?.title}
            </h2>
            <p className="mt-2 text-neutral-500">{project?.description}</p>
            <div className="flex items-center gap-4 text-xl">
              {project?.website && (
                <a
                  href={project?.website}
                  className="mt-4 block font-semibold text-neutral-800 hover:text-neutral-500"
                >
                  <VscPreview />
                </a>
              )}
              {project.github && (
                <a
                  href={project?.github}
                  className="mt-4 block font-semibold text-neutral-800 hover:text-neutral-500"
                >
                  <BsGithub />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <a
        target="_blank"
        href="https://github.com/yourdeepanshuverma"
        className="w-full transform rounded-full bg-black px-6 py-3 text-center text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-neutral-100 hover:text-black hover:shadow-xl active:scale-95 sm:w-fit lg:px-12 lg:py-6"
      >
        See more
      </a>
    </div>
  );
};

export default Projects;
