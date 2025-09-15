import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "../common/Card";
import Main from "./Main";
import ProductsTabs from "../property/productTabs";


const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="max max-w-screen mx-auto ">
      <Header />
      <Main />
      <ProductsTabs />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
