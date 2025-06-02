import React from "react";
import { Wrench } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const PlumbingService = ({ showLabel = true, onClick, selected =false}) => (
   <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Wrench className="icon" />
    {showLabel && "Plumbing services"}
  </button>
);

export default PlumbingService;
