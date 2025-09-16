import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max max-w-screen mx-auto ">
      <Header />
     
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
