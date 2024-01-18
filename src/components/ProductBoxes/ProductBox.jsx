import React from "react";
import "material-symbols";
import "./ProductBox.css";

const ProductBox = ({ element, id }) => {
  return (
    <div className={`product-box product-box-${id}`}>
      <img src={element.imglink} />
      <h4>{element.name}</h4>
      <p>{element.content}</p>
      <div className="product-box-demo">
        <span>{element.demo}</span>
        <span class="material-symbols-outlined">navigate_next</span>
      </div>
    </div>
  );
};

export default ProductBox;
