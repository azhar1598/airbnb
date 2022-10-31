import React from "react";
import * as icon from "@mui/icons-material";
import Carousel, { consts } from "react-elastic-carousel";
import Card from "./Card";
import { useMediaQuery } from "react-responsive";

function CustomCarousel({ data, title, carousel }) {
  const isTabletOrMobile = useMediaQuery({ query: " (max-width: 992px)" });

  const arrowStyle = {
    fontSize: "12px",
    color: "gray",
    marginBottom: "5px",
  };

  const arrows = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <icon.ArrowBackIos style={arrowStyle} />
      ) : (
        <icon.ArrowForwardIos style={arrowStyle} />
      );
    return (
      <div
        onClick={onClick}
        disabled={isEdge}
        // style={{ display: "", position: "", zIndex: 20000 }}
        style={{
          position: "absolute",
          right:
            type == consts.PREV
              ? isTabletOrMobile
                ? 60
                : 140
              : isTabletOrMobile
              ? 20
              : 100,
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
    <div className={carousel}>
      <h1
        className="carousel__h"
        style={{
          marginLeft:
            data.length <= 3 ? "120px" : isTabletOrMobile ? "70px" : "0px",
          fontSize: data.length <= 3 ? "35px" : "25px",
        }}
      >
        {title}
      </h1>
      <Carousel
        itemPosition={consts.START}
        autoPlaySpeed={1500}
        renderArrow={arrows}
        outerSpacing={data.length <= 3 ? (isTabletOrMobile ? 10 : 100) : -10}
        itemsToShow={
          data.length > 3
            ? isTabletOrMobile
              ? 2
              : 6
            : isTabletOrMobile
            ? 1
            : 2.22
        }
        itemPadding={[0, 10]}
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
        {data.map((item, index) =>
          data.length <= 3 ? (
            <>
              <img src={item} alt="img here" className="banners-img" />
              <button className="carousel__showall">Show all</button>
            </>
          ) : (
            <Card
              url={item.url}
              title={item.title}
              rating={item?.rating}
              count={item?.count}
              location={item.location}
              price={item.price}
            />
          )
        )}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
