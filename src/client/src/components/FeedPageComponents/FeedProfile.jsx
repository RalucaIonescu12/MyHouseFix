import React from "react";
import "../../FeedPage/FeedPageStyle.css";
import { FeedPicture } from './FeedPicture';
export const ProfileBox = ({ user }) => {
  return (
    <div className="profilebox">
      <div className="rectangle">
        <FeedPicture user={user} />
      </div>
    </div>
  );
};
export default ProfileBox;