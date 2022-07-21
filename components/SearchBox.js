import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SearchBox = () => {
  const [data, setData] = useState({
    link: "",
    result: [],
    loading: false,
    error: false
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, error: false, loading: true });
    if (data.link) {
      const urlRegex =
        /((?:(?:http?|ftp)[s]*:\/\/)?[a-z0-9-%\/\&=?\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?)/gi;

      // console.log(urlRegex.test(data.link));
      console.log(data.link);

      if (urlRegex.test(data.link)) {
        setError(false);

        try {
          const req = await fetch(
            `${process.env.API_URL}/shorten?url=${data.link}`
          );
          const res = await req.json();
          console.log(res);
          const resultList = [...data.result];
          res.result.copied = false;
          resultList.push(res.result);
          setTimeout(() => {
            setData({ ...data, link: "", result: resultList, error: false });
          }, 100);
          console.log(resultList);
        } catch (error) {
          setError(true);
          console.log("Fetch error: ", error);
        }
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const setCopied = (i) => {
    const lastData = [...data.result];
    lastData[i].copied = true;
    console.log(lastData, i);
    setData({ ...data, result: lastData });
  };

  const setError = (status) => {
    setTimeout(() => {
      setData({ ...data, error: status, loading: false });
    }, 300);
  };

  return (
    <div id="search-box" className="">
      <div className="bg-search-box -up">
        <div className="search-box shadow-sm">
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-3 lg:col-span-4">
                <input
                  name="link"
                  className={`short-input ${
                    data.error ? "border-red-500" : ""
                  }`}
                  placeholder="Shorten a link here.."
                  value={data.link}
                  onChange={(e) => setData({ ...data, link: e.target.value })}
                />
                {data.error && (
                  <p className="mt-2 text-red-400">
                    Please provide a valid url
                  </p>
                )}
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <button
                  type="submit"
                  className="short-btn"
                  disabled={data.loading}>
                  {data.loading ? "Processing.." : " Shorten it!"}
                </button>
              </div>
            </div>
          </form>
          <p className="text-xs italic text-gray-400 mt-2">
            With this free Link Shortener you can make Links shorter and easier
            to remember. Just enter a Link into the form and click on the beside
            Button to generate a short Link. When visiting the short-Link, the
            short-Link will immediately redirect you to the long Link.
          </p>
        </div>
      </div>

      {data.result && (
        <div className="grid gap-2 lg:gap-3 -up">
          {data.result.map((res, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row space-y-4 lg:space-x-6 items-normal lg:items-baseline bg-white rounded-lg py-4 lg:py-0 shadow-sm">
              <div className="lg:basis-1/2">
                <p className="lg:text-xl text-gray-700 lg:pb-4 px-4 lg:px-8">
                  {res.original_link}
                </p>
                <div className="block lg:hidden border-b-[1px] pb-4" />
              </div>

              <div className="lg:basis-2/5 lg:px-8 px-4">
                <p className="lg:text-xl text-cyan-500 lg:pb-4 lg:text-right">
                  {res.full_short_link3}
                </p>
              </div>
              <div className="lg:basis-auto px-4 lg:px-8">
                <CopyToClipboard
                  text={res.full_short_link3}
                  onCopy={() => setCopied(i)}>
                  <button
                    type="button"
                    className={`btn !rounded-lg !px-14 !py-3 !text-sm !w-full !lg:w-auto lg:mb-4 ${
                      !res.copied ? "" : "!px-12 !bg-[#3a3053]"
                    }`}>
                    {!res.copied ? "Copy" : "Copied"}
                  </button>
                </CopyToClipboard>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
