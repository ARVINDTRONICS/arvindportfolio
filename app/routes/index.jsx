import { Navbar } from "~/components/Navbar"
import { About } from "~/components/About"
import { Experience } from "~/components/Experience"
import { Testimonial } from "~/components/Testimonial"

import { Skills } from "~/components/Skills"
import DevImage from "~/assets/dev2.webp"
import { Experiences, Education, Testimonials } from "~/constants"

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
      <div className="w-4/5  lg:mt-4 sm:mt-4 lg:flex sm:flex-col mx-auto ">
        <div className="w-full lg:flex lg:justify-between sm:flex-col sm:justify-center mt-4">
          <Experience title={"Education"} items={Education} />
        </div>
      </div>
      <Testimonial title={"Testimonials"} items={Testimonials} />
      <hr className="w-4/5 mx-auto border mt-4" />
      <div className="w-4/5 mx-auto py-2 text-center text-sm text-primary ">
        ALL RIGHTS RESERVED ©️ {new Date().getFullYear()}
      </div>
    </div>
  )
}
