import React from "react";
import Header from "./headers";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="bg-gradient-to-bl from-gray-900/10 to-slate-900">
      <Header />
      <main className="px-4 sm:px-6 md:px-8 lg:px-10">{props.children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
