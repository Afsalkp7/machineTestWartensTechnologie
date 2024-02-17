import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MainSlide from "./components/MainSlide";

const AppLayOut = () => {
    return(
        <>
            <Header />
            <MainSlide />
            
        </>
       
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);