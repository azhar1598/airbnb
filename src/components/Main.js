import React from "react";
import * as icon from "@mui/icons-material";
import Carousel, { consts } from "react-elastic-carousel";
import { data } from "../assets/data";

function Main() {

  const myArrowBanner = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <icon.ArrowBackIos
          style={{ fontSize: "12px", color: "gray", marginBottom: "5px" }}
        />
      ) : (
        <icon.ArrowForwardIos
          style={{ fontSize: "12px", color: "gray", marginBottom: "5px" }}
        />
      );
    return (
      <div
        onClick={onClick}
        disabled={isEdge}
        // style={{ display: "", position: "", zIndex: 20000 }}
        style={{
          position: "absolute",
          right: type == consts.PREV ? 140 : 100,
          width: "12px",
          height: "12px",
          border: "1px solid #e8e7e3",
          borderRadius: "50%",
          padding: "8px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        {pointer}
      </div>
    );
  };

  return (
    <div className="carousel">
      <h1 className='carousel__h'>New this week</h1>
      <Carousel
        itemPosition={consts.START}
        autoPlaySpeed={1500}
        renderArrow={myArrowBanner}
        outerSpacing={100}
        // enableAutoPlay
        itemsToShow={2.22}
        itemPadding={[0, 0]}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div direction="row" style={{ display: "flex" }}>
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return <></>;
              })}
            </div>
          );
        }}
      >
        {data.map((item, index) => (
          <img src={item} alt="img here" className="carousel-img" />
        ))}
      </Carousel>
    </div>
  );
}

export default Main;
