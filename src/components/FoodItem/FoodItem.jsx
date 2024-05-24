import React ,{useState} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {

  const [itemCount,setItemCount]= useState(0);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-imgge" src={image} alt="" />
        {/* {!itemCount
          ?<img src={assets.add_icon_white} alt="" />
          :<div>
        } */}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">${price}</p>
    </div>
  );
};

export default FoodItem;