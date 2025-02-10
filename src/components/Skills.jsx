import React from "react";
import skills from "../constants/skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center gap-8 pb-12 pt-4 md:pb-16 md:pt-4"
    >
      <h1 className="text-4xl font-bold text-neutral-800">Skills</h1>
      <div className="flex flex-col gap-8 text-center">
        {skills.map((skills) => (
          <div key={skills.title} className="flex flex-col gap-4">
            <h2 className="intersect-once intersect:motion-preset-slide-up motion-duration-700 text-2xl font-bold text-neutral-700">
              {skills.title}
            </h2>
            <ul className="flex flex-wrap justify-center gap-2 text-sm lg:gap-4 lg:text-base">
              {skills.skills.map((skill) => (
                <li
                  key={skill}
                  className="intersect-once intersect:motion-preset-slide-right motion-duration-700 rounded-full bg-neutral-100 px-4 py-2 font-semibold text-neutral-600 hover:bg-neutral-200 hover:text-black"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
