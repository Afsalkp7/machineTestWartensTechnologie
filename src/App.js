import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainSlide from "./components/MainSlide";
import HeroSection from "./components/HeroSection";
import OfferSection from "./components/OfferSection";
const slides = [
    "https://orionstudyabroad.com/media/products/orion-slide1_6iBG5yT.png",
    "https://orionstudyabroad.com/media/products/orion-slide2_orX7PP1.png",
    "https://orionstudyabroad.com/media/products/orion-slide3_J20GAci.png"
]
const AppLayOut = () => {
    return(
        <>
            <Header />
            <MainSlide>{[...slides.map((s)=> <img src={s} />)]}</MainSlide>
            <HeroSection />
            <OfferSection />
        </>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);