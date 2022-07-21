import WorkingSvg from "../public/images/illustration-working.svg";
import { scrollTo } from "../utils/function";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
      <div className="flex-shrink-0 py-12 lg:py-24 order-2 lg:order-1">
        <div className="md:contianer md:mx-auto px-6 text-center lg:text-left">
          <h1 className="leading-[5.5rem] text-gray-800 lg:max-w-xl text-[4.8rem] font-bold">
            More than just shorter links
          </h1>
          <p className="pt-2 text-xl text-gray-400">
            Build your {`brand's`} recognition and get detailed
            <br /> insights on how your links are performing.
          </p>
          <button className="btn mt-8 !px-10 !py-4 !text-xl" onClick={scrollTo}>
            Get Started
          </button>
        </div>
      </div>
      <div className="order-1 lg:order-2 md:mx-auto py-6">
        <WorkingSvg className="relative -right-2 xl:-right-20" />
      </div>
    </div>
  );
};

export default Hero;
