import { usePDF } from "react-to-pdf";
import { Experiences, PersonalProjects, Skills } from "./data";
import { FileDown, Mail, Moon, Phone, Sun } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [uiMode, setUiMode] = useState("light");
  const { toPDF, targetRef } = usePDF({ filename: "Asif-Ekbal.pdf" });

  return (
    <div className={`${uiMode}`}>
      <div className="bg-gray-100 md:py-12 h-full dark:bg-gray-900">
        <div
          className="container mx-auto max-w-4xl 
        border-[1px] bg-white dark:bg-gray-800
        px-4 md:p-14 lg:p-20 dark:border-gray-700"
          ref={targetRef}
        >
          <div className="border-b-[1px] dark:border-gray-700 py-4 flex flex-wrap gap-2 justify-between items-end">
            <div className="flex items-end gap-2">
              <img
                src="/asif.jpg"
                className="w-16 h-16 object-cover"
                alt="Asif Ekbal"
              />
              <div>
                <h1 className="text-2xl font-bold uppercase dark:text-gray-300">
                  Asif Ekbal
                </h1>
                <h4 className="dark:text-gray-400">Front End Developer</h4>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+8801796900817"
                className="bg-blue-100 text-blue-500 w-12 h-12 hover:text-blue-700
              flex justify-center items-center rounded-full hover:bg-blue-200
              dark:bg-gray-700
              "
              >
                <Phone />
              </a>
              <a
                href="mailto:asifekbaldev@gmail.com"
                className="bg-blue-100 text-blue-500 w-12 h-12 hover:text-blue-700
              flex justify-center items-center rounded-full hover:bg-blue-200 dark:bg-gray-700"
              >
                <Mail />
              </a>
              <button
                className="bg-blue-100 text-blue-500 w-12 h-12 hover:text-blue-700
              flex justify-center items-center rounded-full hover:bg-blue-200 dark:bg-gray-700"
                onClick={() => toPDF()}
              >
                <FileDown />
              </button>
              <button
                className="bg-blue-100 text-blue-500 w-12 h-12 hover:text-blue-700
              flex justify-center items-center rounded-full hover:bg-blue-200 dark:bg-gray-700"
                onClick={() => setUiMode(uiMode === "light" ? "dark" : "light")}
              >
                {uiMode === "light" ? <Sun /> : <Moon />}
              </button>
            </div>
          </div>
          <div className="">
            <div className="border-b-[1px] py-4 dark:border-gray-700">
              <SectionTitle title={"Technical Skills"} />
              <div>
                {Skills?.map((skill, index) => (
                  <SkillCard
                    key={index}
                    title={skill.title}
                    skills={skill.skills}
                  />
                ))}
              </div>
            </div>
            <div className="border-b-[1px] py-4 dark:border-gray-700">
              <SectionTitle title={"Experiences"} />
              <div>
                {Experiences?.map((project, index) => (
                  <ExperienceCard
                    key={index}
                    title={project.title}
                    duration={project.duration}
                    link={project.link}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
            <div className="py-4">
              <SectionTitle title={"Personal Projects"} />
              <div>
                {PersonalProjects?.map((project, index) => (
                  <ExperienceCard
                    key={index}
                    title={project.title}
                    duration={project.duration}
                    link={project.link}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500 dark:text-gray-400">
                For more see my{" "}
                <a
                  href="https://github.com/Ekbal41"
                  className="text-blue-500 underline "
                >
                  {" "}
                  github page.
                </a>
              </p>
              <p className="text-gray-500 dark:text-gray-400">7/17/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionTitle = ({ title }) => {
  return <h1 className="text-blue-500 font-bold text-2xl mb-2">{title}</h1>;
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-0 md:gap-2">
      <p className="font-medium dark:text-gray-300">{title} :</p>
      <div className="text-gray-600 dark:text-gray-400">{skills}</div>
    </div>
  );
};

const ExperienceCard = ({ title, link, duration, description }) => {
  return (
    <div className="mb-6">
      <div>
        <a
          href={link}
          target="_blank"
          className="underline font-semibold dark:text-gray-300"
        >
          {title}
        </a>
        <a
          href={link}
          target="_blank"
          className="ml-2 text-gray-600 underline dark:text-gray-400"
        >
          {duration}
        </a>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};
