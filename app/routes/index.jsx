import { Navbar } from "~/components/Navbar";
import { About } from "~/components/About";
import { Experience } from "~/components/Experience";
import { Skills } from "~/components/Skills";
import DevImage from "~/assets/dev2.webp";
export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="w-4/5 mt-16 flex mx-auto ">
        <div className="flex-col w-1/2">
          <About />
          <div className="w-full flex justify-between mt-12">
            <Experience />
            <Skills />
          </div>
        </div>
        <div className="w-1/2  my-auto ">
          <img className="w-full h-3/4 " src={DevImage} alt="programmer" />
        </div>
      </div>
      <hr className="w-4/5 mx-auto border mt-4" />
      <div className="w-4/5 mx-auto py-2 text-center text-sm text-primary ">
        ALL RIGHTS RESERVED ©️ {new Date().getFullYear()}
      </div>
    </div>
  );
}
