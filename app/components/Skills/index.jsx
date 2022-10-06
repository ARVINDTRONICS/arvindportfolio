export const Skills = () => {
  return (
    <div className="lg:w-1/2 sm:w-full  font-sans  text-gray-800 h-full">
      <div className="text-2xl sm:text-center font-medium">SKILLS</div>
      <div className="flex mt-4 flex-wrap sm:w-11/12 sm:mx-auto">
        {skills.map((each, index) => {
          return <SkillCapsule skill={each} key={index} />
        })}
      </div>
    </div>
  )
}

const SkillCapsule = ({ skill }) => {
  return (
    <span className="w-auto = m-2 py-1 px-3 border text-sm text-white border-primary rounded-xl bg-primary">
      {skill}
    </span>
  )
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "NodeJS",
  "NextJS",
  "Remix",
  "Azure",
  "React-Native",
  "Web Development",
  "GraphQL",
  "Mocha",
  "MongoDB",
  "TailwindCSS",
  "SASS",
  "Git",
  "REST/SOAP",
  "Springboot",
]
