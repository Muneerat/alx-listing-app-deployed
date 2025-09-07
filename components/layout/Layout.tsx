import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "../common/Card";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Card />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
