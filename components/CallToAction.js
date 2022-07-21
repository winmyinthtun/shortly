import { scrollTo } from "../utils/function";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="text-center py-20">
        <h1 className="text-white text-3xl lg:text-5xl font-bold">
          Boot your links today
        </h1>
        <button
          className="btn mt-8 !px-10 !py-4 text-sm lg:!text-xl !font-bold"
          onClick={scrollTo}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
