import { VariableIcon } from '@heroicons/react/24/solid';
import React from "react";

export default function Skills() {
  return (
    <section id="quantum">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-10">
          <VariableIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Quantum Horizons
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I am very interested in Quantum Computing and its applications in machine learning and financial predictions.
          I started a blog called Quantum Horizons to summarize interesting research papers.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <a
                href="https://quantumhorizonsblog.wordpress.com/"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mx-auto">
                Check Out My Blog!
            </a>
        </div>
      </div>
    </section>
  );
}