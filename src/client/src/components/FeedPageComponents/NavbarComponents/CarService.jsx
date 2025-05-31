import React from "react";
import { Car } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const CarService = ({ showLabel = true, onClick, disabled = false }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <Car className="icon" />
    {showLabel && "Car Services"}
  </button>
);

export default CarService;
