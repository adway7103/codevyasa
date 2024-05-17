import { HoverBorderGradient } from "./ui/hover-border-gradient";
function Navbar() {
  return (
    <div className="text-white  px-[5%] py-[3%]  flex justify-between w-full h-[16vh] absolute z-30 fixed">
      <div className="w-[30%] 2xl:text-[3rem] xl:text-[2rem] lg:text-[2rem] font-semibold align-middle flex text-center items-center">
        Logo.
      </div>
      <div className="2xl:text-[1.4rem] xl:text-[0.9rem] flex items-center justify-between gap-4 w-[60%] font-medium">
        <div className="cursor-pointer">Our Expertise</div>
        <div>Our Technologies</div>
        <div>Our Work</div>
        <div>About Us</div>
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="bg-black text-white flex items-center space-x-2"
        >
          <span>Get in Touch</span>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Navbar;
