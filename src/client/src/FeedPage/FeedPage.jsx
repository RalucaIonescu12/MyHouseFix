import React from 'react';
import { Box } from '../components/FeedPageComponents/FeedBox';
import UiZingAdminsNav from '../components/FeedPageComponents/FeedNavigationBar';
import { FeedPicture } from '../components/FeedPageComponents/FeedPicture';
import { ProfileBox } from '../components/FeedPageComponents/FeedProfile';
import { Posts } from '../components/FeedPageComponents/FeedPagePosts';
import './FeedPageStyle.css';

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
        <ProfileBox />
      </div>
    </div>
  );
};

export default FeedPage;
