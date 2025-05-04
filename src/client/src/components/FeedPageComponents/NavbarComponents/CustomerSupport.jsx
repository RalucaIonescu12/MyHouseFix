import React from "react";
import { HelpCircle } from "lucide-react";
import "../../../FeedPage/FeedPageStyle.css";
const CustomerSupport = ({ showLabel = true  }) => (
  <button className="nav-button">
    <HelpCircle className="icon" />
     {showLabel && "Customer support"}
  </button>
);

export default CustomerSupport;
