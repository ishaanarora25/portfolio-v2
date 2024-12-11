import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from "react";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="experiences" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <BriefcaseIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {experiences.map((experience) => (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              key={experience.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={experience.image}
                  style={{ backgroundColor: "white", objectFit: "contain"}}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {experience.role}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {experience.time}
                  </h2>
                  <p className="leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}