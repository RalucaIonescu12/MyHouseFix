import React from "react";
import { HouseIcon } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const HouseCleaningService = ({ showLabel = true, onClick, selected =false }) => (
  <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <HouseIcon className="icon" />
    {showLabel && "House Cleaning Services"}
  </button>
);

export default HouseCleaningService;
