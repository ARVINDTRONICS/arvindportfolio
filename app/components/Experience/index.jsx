export const Experience = ({ title, items }) => {
  return (
    <div className="lg:w-1/2 sm:w-full font-sans  text-gray-800 h-full">
      <div className="text-2xl sm:text-center font-medium uppercase text-primary">
        {title}
      </div>

      <div className="sm:w-full sm:mx-auto sm:flex-col">
        {items.map((each, index) => {
          return <ExperienceItem key={index} item={each} />;
        })}
      </div>
    </div>
  );
};

export const ExperienceItem = ({ item }) => {
  return (
    <div className=" sm:w-11/12 sm:mx-auto my-8 flex sm:text-sm ">
      <div>
        <img className="w-18 h-16" src={item.image} alt={item.title} />
      </div>
      <div className="ml-4">
        <div className="font-medium">{item.title}</div>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-gray-400">{item.tenure}</p>
      </div>
    </div>
  );
};
