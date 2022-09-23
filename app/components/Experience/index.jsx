import datafirst from "~/assets/datafirst-logo.webp";

import crayon from "~/assets/crayon-logo.webp";

import tcs from "~/assets/tcs-logo.webp";

export const Experience = () => {
  return (
    <div className="w-1/2 font-sans  text-gray-800 h-full">
      <div className="text-xl font-medium">EXPERIENCE</div>

      <div>
        {Experiences.map((each, index) => {
          return <ExperienceItem key={index} experienceData={each} />;
        })}
      </div>
    </div>
  );
};

export const ExperienceItem = ({ experienceData }) => {
  return (
    <div className="my-2 flex ">
      <div>
        <img
          className="w-16 h-16"
          src={experienceData.image}
          alt={experienceData.title}
        />
      </div>
      <div className="ml-4">
        <div className="font-medium">{experienceData.title}</div>
        <p className="text-gray-600">{experienceData.companyName}</p>
        <p className="text-gray-400">{experienceData.tenure}</p>
      </div>
    </div>
  );
};

const Experiences = [
  {
    title: "Full Stack Developer",
    companyName: "Datafirst Solutions,Dubai",
    tenure: "Nov 2021 - Present",
    image: datafirst,
  },
  {
    title: "UI Engineer",
    companyName: "Crayon Data,Chennai",
    tenure: "Mar 2020 - Nov 2021",
    image: crayon,
  },
  {
    title: "Systems Engineer",
    companyName: "TCS,Chennai",
    tenure: "Nov 2017 - Mar 2020",
    image: tcs,
  },
];
