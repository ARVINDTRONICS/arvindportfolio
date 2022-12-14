import { GITHUB, GMAIL, INSTAGRAM, LINKEDIN } from "~/assets/index";

export const Navbar = () => {
  return (
    <div className="w-full h-full lg:p-4 font-sans sm:text-sm  lg:text-lg font-bold text-primary">
      <div className="w-10/12  sm:justify-center lg:flex mx-auto lg:justify-between">
        {/* <img className="w-16 h-16 rounded-xl" src={arvind} alt="Arvind" /> */}
        <div className="tracking-wider flex py-4 sm:justify-center">
          ARVIND KUMAR THOPPE
        </div>
        <div className="lg:w-1/4 tracking-wider flex py-4 justify-evenly  sm:w-full">
          {social.map((each, index) => {
            let asset = each;
            return (
              <img
                onClick={() => {
                  window.open(each.link, "_blank");
                }}
                width="35px"
                height="35px"
                className="cursor-pointer"
                src={each.name}
                key={index}
                alt={each.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const social = [
  {
    name: LINKEDIN,
    link: "https://linkedin.com/in/arvindkumarts",
  },
  {
    name: INSTAGRAM,
    link: "https://instagram.com/arvind_thoppe",
  },
  {
    name: GMAIL,
    link: "mailto:tsarvind996@gmail.com",
  },
  {
    name: GITHUB,
    link: "https://github.com/ARVINDTRONICS",
  },
];
