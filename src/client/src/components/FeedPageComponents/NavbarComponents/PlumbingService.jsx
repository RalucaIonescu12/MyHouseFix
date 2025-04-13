import React from "react";
import { Wrench } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const PlumbingService = ({ showLabel = true  }) => (
  <button className="nav-button">
    <Wrench className="icon" />
     {showLabel && "Plumbing service"}
  </button>
);

export default PlumbingService;
