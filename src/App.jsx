export default function App() {
  return (
    <div className="bg-gray-100 md:py-12 h-full">
      <div className="container mx-auto max-w-4xl border-[1px] bg-white">
        <div className="border-b-[1px] p-4 flex flex-wrap gap-2 justify-between items-center">
          <div className="">
            <h1 className="text-2xl font-bold ">Asif Ekbal</h1>
            <h4>Front End Developer</h4>
          </div>
          <div className="">
            <div className="flex justify-start items-center gap-1">
              <p className="font-medium">Porfolio :</p>
              <a
                href="https://asifekbal.vercel.app/"
                className="hover:underline text-gray-600 "
              >
                asifekbal.vercel.app
              </a>
            </div>
            <div className="flex justify-start items-center gap-1">
              <p className="font-medium">Mail :</p>
              <a
                href="mailto:asifekbaldev@gmail.com"
                className="hover:underline text-gray-600"
              >
                asifekbaldev@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-b-[1px] p-4">
            <SectionTitle title={"Technical Skills"} />
            <div>
              <SkillCard
                title="Languages"
                skills="JavaScript (ES6+), TypeScript"
              />
              <SkillCard
                title="Frameworks"
                skills="Next.js, React.js, Express.js"
              />
              <SkillCard
                title="UI Frameworks"
                skills="Bootstrap 5, Tailwind CSS, Chakra UI"
              />
              <SkillCard
                title="State Management"
                skills="Redux Toolkit, Zustand"
              />
              <SkillCard title="Data Fetching" skills="React Query, Axios" />
              <SkillCard title="Design Tools" skills="Figma" />
              <SkillCard title="Database" skills="Prisma, MongoDB" />
              <SkillCard title="Deployment Platforms" skills="Vercel" />
              <SkillCard
                title="Web Development Tools"
                skills="VS Code, Postman, Chrome DevTools, GitHub"
              />
              <SkillCard
                title="Other Skills"
                skills="API Integration, REST APIs, CRUD Operations, User Authentication"
              />
            </div>
          </div>
          <div className="border-b-[1px] p-4">
            <SectionTitle title={"Experiences"} />
            <div>
              <ExperienceCard
                title="Tuition Terminal"
                duration="(April 2023 - May 2024)"
                link="https://dev-tuitionterminal.vercel.app"
                description="During my tenure at Tuition Terminal, I led the React development efforts for tuitionterminal.com.bd. Utilizing ReactJS and Vite for streamlined development, I focused on ensuring the website's responsiveness using Bootstrap for UI design. API integration was handled seamlessly with Axios, while Redux Toolkit facilitated robust state management for the application. The project was deployed on Vercel for scalable and reliable hosting."
              />
              <ExperienceCard
                title="Porao"
                duration="(June 2024 - Feb 2025)"
                link="https://poraome.vercel.app"
                description="At Porao, I served as a front-end developer, building the project entirely from scratch using React. I employed React Query for optimized data fetching and caching, and ensured a responsive design across mobile and larger displays with TailwindCSS. For global state management alongside React Query, Zustand was utilized. The project was developed in TypeScript for robust type checking and scalability."
              />
            </div>
          </div>
          <div className=" p-4">
            <SectionTitle title={"Personal Projects"} />
            <div>
              <ExperienceCard
                title="Napnux"
                duration="(June 2022 - Dec 2023)"
                link="https://github.com/Ekbal41/napnux"
                description="Napnux is a lightweight and fast web framework for
            Node.js, designed with low overhead similar to Express.js. It
            offers the same APIs and is production-ready. For more details,
            refer to the Napnux documentation."
              />
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
        <a
          href={link}
          target="_blank"
          className="hover:underline font-semibold"
        >
          {title}
        </a>
        <a
          href={link}
          target="_blank"
          className="ml-2 text-gray-600 hover:underline"
        >
          {duration}
        </a>
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};
