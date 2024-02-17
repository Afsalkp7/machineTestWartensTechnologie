import React from "react";
import HeroSection2 from "./HeroSection2";

const HeroSection = () => {
    return (
        <div className="grid grid-cols-4 gap-0">
            <div className="col-span-3 p-24">
                <h1 className="font-bold text-3xl">We Make <br />Studying Abroad Easier..</h1>
                <br />
                <p >Orion Study Abroad Pvt Ltd is one of the leading Study Abroad Consultancies in Kerala. Orion has carved its own niche in the industry by providing expert services. We are a young, student-oriented, and dynamic company providing you with guidance on studying abroad. It dates back to 2017 in Ernakulam when Orion ventured into the educational field realizing the need and demand for proper guidance and coaching for the students in the Study Abroad Sector. Being the best study abroad consultancy in Kerala, Orion is the one-stop solution for all your international study needs. Our core mission is guiding students to make the right choice with regard to pursuing education in overseas educational institutions. We provide support for students to move abroad for their education purpose in various countries such as UK, USA, Canada, UAE, Australia, New Zealand, Germany, Sweden, France, and many more.</p>
            </div>
            <HeroSection2 />
        </div>
        
    )
}

export default HeroSection