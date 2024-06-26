import React from "react";
import Link from "next/link";
import userData from "@constants/data";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#E3E2DD] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 -mx-3 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-black dark:text-white text-center">
            Projects
          </h1>
          <Link
            href="/projects"
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View all</p>
          </Link>
        </header>
        <div className="mt-5">
          <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
            Below are a few major projects I have contributed to:</p>
          </div>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:mt-3 pb-40">
          
          {userData.projects.slice(0, 5).map((project, index) => {
            return (
              <a
                key={project.title}
                href={project.link}
                className="w-full block col-span-3 shadow-2xl"
              >
                <h1 className="text-gray-100 text-xl bg-zinc-800 p-4">
                  {project.title}
                </h1>
                <div className="relative overflow-hidden">
                  <img
                    src={project.imgUrl}
                    alt="portfolio"
                    className="transform hover:scale-110 transition duration-2000 ease-out"
                  />

                  <h1 className="absolute backdrop-blur-sm w-full bg-black/40 bottom-0 lg:text-xl flex lg:h-20 justify-center items-center text-white rounded text-center shadow-md">
                    {project.desc}
                  </h1>
                  <h1 className="absolute bottom-6 left-10 text-gray-50 font-bold text-xl">
                    {/* {index + 1} */}
                  </h1>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
