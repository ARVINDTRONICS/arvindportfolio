import { useEffect, useState } from "react";
import arrow from "~/assets/arrow.png";

export const Testimonial = ({ title, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselInfinitScroll = () => {
    if (currentIndex === items.length - 1) {
      return setCurrentIndex(0);
    }
    return setCurrentIndex(currentIndex + 1);
  };

  const handleForward = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handleBackward = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // carouselInfinitScroll()
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div className="w-full font-sans mt-3 mb-3  text-gray-800 ">
      <div className="text-2xl my-4 text-center text-primary font-medium uppercase">
        {title}
      </div>
      <div className="w-8/12 sm:w-11/12 relative flex  rounded-xl lg:p-6 sm:p-4 mx-auto shadow-2xl">
        <div
          onClick={() => {
            console.log("clicked");
            handleBackward();
          }}
          className="lg:w-10 w-5 absolute top-1/2 left-1 rotate-180"
        >
          <img src={arrow} alt="" />
        </div>
        <div className="w-full mx-4 flex items-center flex-nowrap overflow-hidden">
          {items.map((item, i) => {
            return (
              <div
                className="min-w-full  transition-all ease-in-out duration-1000"
                key={i}
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
              >
                <TestimonialItem testimonial={item} />
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {
            handleForward();
          }}
          className="lg:w-10 w-5 absolute top-1/2 right-1"
        >
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

const TestimonialItem = ({ testimonial }) => {
  return (
    <div className=" text-justify text-lg lg:justify-evenly flex items-center sm:flex-col ">
      <div className="w-3/4 sm:w-full">
        <div>
          <img src={testimonial.headerImage} alt={""} />
        </div>
        <div className="mt-4 sm:text-sm">{testimonial.description}</div>
        <div className="mt-4 sm:text-sm sm:text-center">
          <span>-- {testimonial.title}</span>
        </div>
      </div>
      <div className="lg:w-1/5 lg:h-1/2 sm:h-24 sm:mt-6 flex justify-center ">
        <img
          className="w-full h-3/4 sm:h-full rounded-full align-middle bg-cover"
          src={testimonial.ownerImage}
          alt=""
        />
      </div>
    </div>
  );
};
