

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeatureSection from "@/components/home/FeaturesIcons";
import FeaturedCards from "@/components/home/FeaturedCard";
import Banner from "@/components/home/Banner";
import Footer from "@/components/layout/Footer";





export default function Home(){
    return(
      <>
      <Navbar/>
      <Hero/>
       <FeatureSection/>
       <FeaturedCards/>
       <Banner/>
       <Footer/>
      </>
    );
}