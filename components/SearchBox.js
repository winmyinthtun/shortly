const SearchBox = () => {
  return (
    <div id="search-box" className="">
      <div className="bg-search-box -up">
        <div className="search-box shadow-sm">
          <form>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3 lg:col-span-4">
                <input
                  name="link"
                  className="short-input"
                  placeholder="Shorten a link here.."
                />
                <p className="mt-2 lg:-mb-8 text-red-400 dark:text-red-500">
                  Please add a link
                </p>
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <button type="button" className="short-btn">
                  Shorten it!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="grid gap-2 -up">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 items-normal lg:items-baseline bg-white rounded-lg py-4 lg:py-0 shadow-sm">
            <div className="lg:basis-1/2">
              <p className="lg:text-xl text-gray-700 lg:pb-4 px-4 lg:px-8">
                http://example.com/adsfadf/asdf
              </p>
              <div className="block lg:hidden border-b-[1px] pb-4" />
            </div>

            <div className="lg:basis-2/5 lg:px-8 px-4">
              <p className="lg:text-xl text-cyan-500 lg:pb-4 lg:text-right">
                http://rel.ink/gXopOwf
              </p>
            </div>
            <div className="lg:basis-auto px-4 lg:px-8">
              <button
                type="button"
                className={`btn !rounded-lg !px-14 !py-3 !text-sm !w-full !lg:w-auto lg:mb-4 ${
                  i !== 2 ? "" : "!px-12 !bg-[#3a3053]"
                }`}>
                {i !== 2 ? "Copy" : "Copied"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
