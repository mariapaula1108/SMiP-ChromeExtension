import React from "react";
import "./IPhone14Pro12.css";

function IPhone14Pro12(props) {
  const { image2, image3, image4, title } = props;

  return (
    <div className="property-1-default">
      <div className="overlap-group">
        <div className="rectangle-1"></div>
        <img className="image-2" src={image2} alt="image 2" />
        <img className="image-3" src={image3} alt="image 3" />
        <img className="image-4" src={image4} alt="image 4" />
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}

export default IPhone14Pro12;
