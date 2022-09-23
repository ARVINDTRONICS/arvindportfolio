export const Skills = () => {
  return (
    <div className="w-1/2  font-sans  text-gray-800 h-full">
      <div className="text-xl font-medium">SKILLS</div>
      <div className="flex mt-4 flex-wrap">
        {skills.map((each, index) => {
          return <SkillCapsule skill={each} key={index} />;
        })}
      </div>
    </div>
  );
};

const SkillCapsule = ({ skill }) => {
  return (
    <span className="w-auto = m-2 py-1 px-3 border text-sm text-white border-primary rounded-xl bg-primary">
      {skill}
    </span>
  );
};

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "NodeJS",
  "Azure",
  "Web Development",
  "GraphQL",
  "Bootstrap",
  "SASS",
  "REST/SOAP",
  "Git",
  "Springboot",
];
