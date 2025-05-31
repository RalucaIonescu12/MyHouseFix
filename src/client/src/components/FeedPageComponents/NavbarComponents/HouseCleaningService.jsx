import React from "react";
import { HousePlusIcon } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const HouseCleaningService = ({ showLabel = true, onClick , disabled = false }) => (
  <button className="nav-button" onClick={onClick} disabled={disabled}>
    <HousePlusIcon className="icon" />
    {showLabel && "House Cleaning Services"}
  </button>
);

export default HouseCleaningService;
