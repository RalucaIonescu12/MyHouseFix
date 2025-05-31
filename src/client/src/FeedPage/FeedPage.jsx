import React, { useState } from 'react';
import { Box } from '../components/FeedPageComponents/FeedBox';
import UiZingAdminsNav from '../components/FeedPageComponents/FeedNavigationBar';
import { Posts } from '../components/FeedPageComponents/FeedPagePosts';
import ProfileBox from '../components/FeedPageComponents/FeedProfile';
import ReviewBox from '../components/FeedPageComponents/ReviewBox';
import './FeedPageStyle.css';
import profileImage from "../images/profile.jpeg";
import reviewsData from "../components/FeedPageComponents/FeedReviewsData";

const currentUser = {
  name: "Alex Ionescu",
  location: "București, Sector 4",
  role: "mester",
    role: "mester",
    pendingRequests: 3,
    upcomingAppointments: 2,
    profileImg: profileImage
};


export const FeedPage = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (title) => {
        setSelectedPost(title);
    };

  return (
    <div className="feedpage-container">
      <div className="sidebar">
        <UiZingAdminsNav />
      </div>

      <div className="main-content">
        <div className="center-content">
            <Posts onPostClick={handlePostClick} />
        </div>
      </div>

        <div className="right-panel">
            {selectedPost ? (
                <ReviewBox
                    reviews={reviewsData[selectedPost] || []}
                    onBack={() => setSelectedPost(null)}
                />
            ) : (
                <ProfileBox user={currentUser}/>
            )}
        </div>
    </div>
  );
};

export default FeedPage;
