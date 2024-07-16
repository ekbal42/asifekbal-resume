import { Experiences, PersonalProjects, Skills } from "./data";

export default function App() {
  return (
    <div className="bg-gray-100 md:py-12 h-full ">
      <div
        className="container mx-auto max-w-4xl border-[1px] bg-white
        px-4 md:p-14 lg:p-20
        "
      >
        <div className="border-b-[1px] py-4 flex flex-wrap gap-2 justify-between items-center">
          <div className="flex items-end gap-2">
            <img src="/asif.jpg" className="w-16 h-16" alt="Asif Ekbal" />
            <div>
              <h1 className="text-2xl font-bold uppercase">Asif Ekbal</h1>
              <h4>Front End Developer</h4>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-b-[1px] py-4">
            <SectionTitle title={"Technical Skills"} />
            <div>
              {Skills?.map((skill) => (
                <SkillCard title={skill.title} skills={skill.skills} />
              ))}
            </div>
          </div>
          <div className="border-b-[1px] py-4">
            <SectionTitle title={"Experiences"} />
            <div>
              {Experiences?.map((project) => (
                <ExperienceCard
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
              {PersonalProjects?.map((project) => (
                <ExperienceCard
                  title={project.title}
                  duration={project.duration}
                  link={project.link}
                  description={project.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionTitle = ({ title }) => {
  return <h1 className="text-red-500 font-bold text-2xl mb-2">{title}</h1>;
};

const SkillCard = ({ title, skills }) => {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-0 md:gap-2">
      <p className="font-medium">{title} :</p>
      <div className="text-gray-600">{skills}</div>
    </div>
  );
};

const ExperienceCard = ({ title, link, duration, description }) => {
  return (
    <div className="mb-6">
      <div>
        <a href={link} target="_blank" className="underline font-semibold">
          {title}
        </a>
        <a href={link} target="_blank" className="ml-2 text-gray-600 underline">
          {duration}
        </a>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};
