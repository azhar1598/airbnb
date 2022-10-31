import React from "react";
import * as icon from "@mui/icons-material";

function Card({title, url, rating,count,location ,price}) {


  
  return (
    <div className="card">
      <img src={url} alt="img here" className="topSellers-img" />
      <icon.FavoriteBorder style={{color:'white',cursor:'pointer',marginTop:'80px',marginLeft:'-40px',position:'absolute',zIndex:6000}}/>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <icon.Star style={{ fontSize: "15px", marginRight: "5px" }} />
         <p> {rating} <span style={{color:'gray'}}>({count})</span> <icon.FiberManualRecord style={{fontSize:'4px',marginBottom:'2px',color:'gray'}}/>  <span style={{color:'gray'}}>{location}</span></p>
        </div>
        <p className="card-title">{title}</p>
        <p><strong>From ₹ {price}</strong>/person</p>
      </div>
    </div>
  );
}

export default Card;
