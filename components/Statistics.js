import IconOne from "../public/images/icon-brand-recognition.svg";
import IconTwo from "../public/images/icon-detailed-records.svg";
import IconThree from "../public/images/icon-fully-customizable.svg";

const items = [
  {
    icon: <IconOne />,
    title: `Brand Recognition`,
    desc: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.`
  },
  {
    icon: <IconTwo />,
    title: `Detailed Records`,
    desc: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`
  },
  {
    icon: <IconThree />,
    title: `Fully Customizable`,
    desc: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`
  }
];

const Statistics = () => {
  return (
    <div className="pb-[340px] sm:pb-[22rem] lg:pb-[14rem]">
      <div className="text-center mb-24">
        <h1 className="text-4xl text-gray-800 font-bold mb-4">
          Advanced Statistics
        </h1>
        <div className="max-w-lg mx-auto">
          <p className="pt-2 text-lg text-gray-400">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row relative">
        <span className="block absolute bg-[#2bcfd0] h-[600px] w-2 lg:h-2 lg:w-1/2 left-[49.5%] top-44 lg:left-[25%] lg:top-36" />
        {items.map((item, i) => (
          <div
            key={i}
            className={`bg-white text-center lg:text-start rounded-lg shadow-sm p-8 relative lg:basis-1/3 ${
              i === 0
                ? "top-0"
                : `${i === 1 ? "top-32 lg:top-12" : "top-64 lg:top-24"} lg:ml-8`
            }`}>
            <div className="flex justify-center items-center lg:justify-start lg:items-start">
              <div className="relative -top-20 bg-[#3b2f53] rounded-full h-24 w-24 flex justify-center items-center">
                {item.icon}
              </div>
            </div>
            <div className="-mt-14">
              <h3 className="text-xl font-bold mb-3  text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
