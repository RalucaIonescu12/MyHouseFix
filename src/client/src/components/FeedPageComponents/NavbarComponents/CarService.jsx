import React from "react";
import { Car } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const CarService = ({ showLabel = true, onClick }) => (
  <button className="nav-button" onClick={onClick}>
    <Car className="icon" />
    {showLabel && "Car Services"}
  </button>
);

export default CarService;
