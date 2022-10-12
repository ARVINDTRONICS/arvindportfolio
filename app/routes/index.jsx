import { Navbar } from "~/components/Navbar";
import { About } from "~/components/About";
import { Experience } from "~/components/Experience";
import { Testimonial } from "~/components/Testimonial";

import { Skills } from "~/components/Skills";
import DevImage from "~/assets/dev2.webp";
import { Experiences, Education, Testimonials, Services } from "~/constants";
import creators from "~/assets/creators.png";
import correct from "~/assets/correct.png";

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="w-10/12 lg:mt-16 sm:mt-8 lg:flex  sm:flex sm:flex-col-reverse sm:items-center mx-auto ">
        <div className="flex-col lg:w-1/2 sm:w-full">
          <About />
          <div className="w-full lg:flex lg:justify-between  sm:justify-center mt-12">
            <Experience title={"Experience"} items={Experiences} />
            <Skills />
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-full my-auto sm:mx-auto">
          <img
            className="w-full lg:h-3/4 sm:h-full"
            src={DevImage}
            alt="programmer"
          />
        </div>
      </div>
      <div className="w-10/12  lg:mt-4 sm:mt-4 lg:flex sm:flex-col mx-auto ">
        <div className="w-full lg:flex lg:justify-between sm:flex-col sm:justify-center mt-4">
          <Experience title={"Education"} items={Education} />
        </div>
      </div>
      <Testimonial title={"Testimonials"} items={Testimonials} />
      <div className="w-10/12  lg:my-12 sm:mt-8 flex-col mx-auto ">
        <div className="text-2xl  mt-6 text-center text-primary font-medium uppercase">
          THANKS TO DEV CONTENT CREATORS ON!
        </div>
        <div>
          <img className="lg:w-3/4 sm:w-full mx-auto " src={creators} alt="" />
        </div>
      </div>

      <div className="w-full h-full bg-primary flex-col justify-center p-6">
        <div className="lg:text-4xl sm:text-xl  my-4 text-center text-white font-medium uppercase">
          WANT TO HIRE ME ?
        </div>
        <div className="w-full lg:flex sm:flex-col lg:justify-around sm:mx-auto text-center my-12 text-white lg:text-xl sm:text-md">
          {Services.map((each, index) => {
            return (
              <div
                key={index}
                className="w-11/12  flex my-2  lg:justify-center"
              >
                <img className="w-6 h-6 mx-4" src={correct} alt="" />
                <p className="mx-2">{each}</p>
              </div>
            );
          })}
        </div>
        <div className="lg:w-full mx-auto text-center text-2xl sm:text-lg  sm:p-4 my-4  text-white font-medium  uppercase">
          <button
            onClick={() => {
              window.open("https://linkedin.com/in/arvindkumarts", "_blank");
            }}
            className="btn border hover:bg-white hover:text-primary p-3 text-white bg-primary btn-sm text-md  text-sm"
          >
            CONTACT ME !
          </button>
        </div>
      </div>

      <hr className="w-4/5 mx-auto border " />
      <div className="w-4/5 mx-auto py-2 text-center text-sm text-primary ">
        ALL RIGHTS RESERVED ©️ {new Date().getFullYear()}
      </div>
    </div>
  );
}
