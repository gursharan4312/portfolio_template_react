import React, { useState } from "react";
import "./ImageGallery.scss";
export default function ImageGallery(props) {
  const { images } = props;
  const n = images.length;
  const [activeImage, setActiveImage] = useState(0);
  const activeLeft = () => {
    setActiveImage((((activeImage - 1) % n) + n) % n);
  };
  const activeRight = () => {
    setActiveImage((((activeImage + 1) % n) + n) % n);
  };
  return (
    <div className="image-wrapper">
      <i className="fa fa-chevron-left navigation" onClick={activeLeft} />
      {images.map((image, i) => {
        return (
          <img
            src={`${process.env.PUBLIC_URL}/assests/images/${image}`}
            key={i}
            alt={`${image}`}
            className={i === activeImage ? "active" : "non-active"}
          />
        );
      })}
      <i className="fa fa-chevron-right navigation" onClick={activeRight} />
    </div>
  );
}
