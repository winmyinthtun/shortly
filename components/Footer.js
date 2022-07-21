import Link from "next/link";
import Logo from "../public/images/logo.svg";
import Facebook from "../public/images/icon-facebook.svg";
import Twitter from "../public/images/icon-twitter.svg";
import Pinterest from "../public/images/icon-pinterest.svg";
import Instragram from "../public/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-[#232027]">
      <div className="max-w-6xl mx-auto py-16">
        <div className="md:contianer md:mx-auto px-6 text-white">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/">
                <a className="flex items-center">
                  <Logo className="fill-white" />
                </a>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 md:gap-20 gap-4 grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Fetautres
                </h2>
                <ul className=" text-slate-400 text-sm">
                  {[
                    ["Link Shortening", "/#"],
                    ["Branded Links", "/#"],
                    ["Analytics", "/#"]
                  ].map(([lable, href]) => (
                    <li key={lable} className="mb-4">
                      <a
                        href={href}
                        className="hover:text-cyan-600 cursor-pointer">
                        {lable}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Company
                </h2>
                <ul className=" text-slate-400 text-sm">
                  {[
                    ["Blog", "/#"],
                    ["Developers", "/#"],
                    ["Support", "/#"]
                  ].map(([lable, href]) => (
                    <li key={lable} className="mb-4">
                      <a
                        href={href}
                        className="hover:text-cyan-600 cursor-pointer">
                        {lable}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white">
                  Company
                </h2>
                <ul className=" text-slate-400 text-sm">
                  {[
                    ["About", "/#"],
                    ["Our Team", "/#"],
                    ["Careers", "/#"]
                  ].map(([lable, href]) => (
                    <li key={lable} className="mb-4">
                      <a
                        href={href}
                        className="hover:text-cyan-600 cursor-pointer">
                        {lable}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex mt-4 space-x-6 justify-center md:justify-start">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Facebook />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 mt-1">
                <Twitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Pinterest />
                <span className="sr-only">Pinterest page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Instragram />
                <span className="sr-only">Instragram page</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
