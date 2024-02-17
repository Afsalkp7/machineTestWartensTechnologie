import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainSlide from "./components/MainSlide";
import HeroSection from "./components/HeroSection";
import OfferSection from "./components/OfferSection";
import slides from "./utils/carouselData";
const slides = slides
const AppLayOut = () => {
    return(
        <>
            <Header />
            <MainSlide>{[...slides.map((s)=> <img src={s.image} />)]}</MainSlide>
            <HeroSection />
            <OfferSection />
        </>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);