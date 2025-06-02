import React from "react";
import { Car } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const CarService = ({ showLabel = true, onClick, selected }) => (
    <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Car className="icon" />
    {showLabel && "Car Services"}
  </button>
);

export default CarService;
