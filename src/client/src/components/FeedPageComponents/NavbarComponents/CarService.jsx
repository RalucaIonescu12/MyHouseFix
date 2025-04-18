import React from "react";
import { Car } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const CarService = ({showLabel = true }) => (
  <button className="nav-button">
    <Car className="icon" />
     {showLabel && "Car service"}
  </button>
);

export default CarService;
