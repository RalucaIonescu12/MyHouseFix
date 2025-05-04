import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import profileImage from "../../images/profile.jpeg";

export const FeedPicture = () => {
  return (
    <div className="feedpicture">
      <img className="image" alt="Profile" src={profileImage} />
    </div>
   );
};
export default FeedPicture;