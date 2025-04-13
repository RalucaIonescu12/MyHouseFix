import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import { FeedPicture } from './FeedPicture';
export const ProfileBox = () => {
  return (
    <div className="profilebox">
      <div className="rectangle" >
          <FeedPicture />
         </div>
    </div>
  );
};
export default ProfileBox;