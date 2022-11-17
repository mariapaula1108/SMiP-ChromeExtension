import React from "react";
import IPhone14Pro12 from "../IPhone14Pro12";
import "./IPhone14Pro1.css";

function IPhone14Pro1(props) {
  const { iPhone14Pro12Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-14-pro-1 screen">
        <IPhone14Pro12
          image2={iPhone14Pro12Props.image2}
          image3={iPhone14Pro12Props.image3}
          image4={iPhone14Pro12Props.image4}
          title={iPhone14Pro12Props.title}
        />
      </div>
    </div>
  );
}

export default IPhone14Pro1;
