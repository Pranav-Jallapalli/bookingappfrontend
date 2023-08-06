import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
