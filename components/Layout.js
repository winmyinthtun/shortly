import Meta from "./Meta";
import Header from "../components/Header";

const Layout = ({ title, children }) => {
  return (
    <>
      <Meta title={title} />
      <main className="bg-white overflow-x-hidden">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
