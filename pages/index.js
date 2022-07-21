import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import SearchBox from "../components/SearchBox";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <Layout title="Shortly">
      <Hero />
      <div className=" bg-slate-100 mt-32 lg:mt-40">
        <div className="max-w-6xl mx-auto">
          <div className="md:contianer md:mx-auto px-6">
            <SearchBox />
            <Statistics />
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </Layout>
  );
}
