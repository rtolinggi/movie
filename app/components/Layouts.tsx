import Footer from "./footers";
import Header from "./headers";

const Layout: React.FC = (props) => {
  return (
    <div className="relative bg-gradient-to-bl from-gray-900/10 to-slate-900 overflow-hidden">
      <Header />
      <main className="px-4 pb-24 lg:space-y-24 lg:px-32">
        {props.children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
