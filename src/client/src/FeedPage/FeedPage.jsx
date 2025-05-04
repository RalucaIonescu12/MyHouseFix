import React from 'react';
import { Box } from '../components/FeedPageComponents/FeedBox';
import UiZingAdminsNav from '../components/FeedPageComponents/FeedNavigationBar';
import { FeedPicture } from '../components/FeedPageComponents/FeedPicture';
import { ProfileBox } from '../components/FeedPageComponents/FeedProfile';
import { Posts } from '../components/FeedPageComponents/FeedPagePosts';
import './FeedPageStyle.css';
import profileImage from "../images/profile.jpeg";
const currentUser = {
  name: "Alex Ionescu",
  location: "București, Sector 4",
  role: "client",
    role: "client",
    pendingRequests: 3,
    upcomingAppointments: 2,
    profileImg: profileImage
};
export const FeedPage = () => {
  return (
    <div className="feedpage-container">
      <div className="sidebar">
        <UiZingAdminsNav />
      </div>

      <div className="main-content">
        <div className="center-content">
          <Posts />
        </div>
      </div>

      <div className="right-panel">
        <ProfileBox user={currentUser} />
      </div>
    </div>
  );
};

export default FeedPage;
