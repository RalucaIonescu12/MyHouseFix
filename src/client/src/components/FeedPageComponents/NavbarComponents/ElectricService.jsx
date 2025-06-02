import React from "react";
import { Zap } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";

const ElectricService = ({ showLabel = true, onClick, selected = false}) => (
    <button className={`nav-button${selected ? ' selected' : ''}`} onClick={onClick}>
    <Zap className="icon" />
    {showLabel && "Electrician services"}
  </button>
);

export default ElectricService;
