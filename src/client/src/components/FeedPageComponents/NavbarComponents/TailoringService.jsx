import React from "react";
import { Scissors } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const TailoringService = ({ showLabel = true, onClick, selected =false}) => (
   <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Scissors className="icon" />
    {showLabel && "Tailoring services"}
  </button>
);

export default TailoringService;
