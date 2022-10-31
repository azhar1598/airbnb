import React from "react";
import { banners,topSellers } from "../assets/data";
import CustomCarousel from "./CustomCarousel";

function Main() {
  return (
    <div >
      <CustomCarousel data={banners} title='New this week' carousel='carousel-1'/>
      <CustomCarousel data={topSellers} title='Top Sellers' carousel='carousel-2'/>
    </div>
  );
}

export default Main;
