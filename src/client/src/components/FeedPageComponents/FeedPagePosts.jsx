import React, { useState } from "react";
import "../../FeedPage/FeedPageStyle.css";
import FeedPostCard from "./FeedPostCard";
import { Search } from "lucide-react";

import pipeFixImg from "../../images/mechanicwoman.jpeg";
import lightCheckImg from "../../images/lightcheck.jpeg";
import tailorFitImg from "../../images/female_tailor.jpeg";
import plumbingImg from "../../images/pipefix.jpeg";
import profilepicture from "../../images/profilepicture.jpeg";
export function SearchInput({ value, onChange, placeholder = "Caută postări..." }) {
  return (
    <div className="search-input-container">
      <Search className="search-input-icon" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
}

export const Posts = () => {
    const [searchQuery, setSearchQuery] = useState("");

   const posts = [
      {
          profileimg: profilepicture,
        title: "Pipe Fix",
        updated: "today",
        user: "Andrei Popa",
        skill: "Plumber",
        imageSrc: pipeFixImg,
        description: "Repar rapid și eficient orice scurgere de conductă.",
        rating: 4.7,
        reviews: 24,
        location: "București, Militari",
        availability: "Luni - Sâmbătă, 8:00 - 18:00",
        price: "De la 150 RON",
      },
      {
          profileimg: profilepicture,
        title: "Light Check",
        updated: "yesterday",
        user: "Maria Ionescu",
        skill: "Electrician",
        imageSrc: lightCheckImg,
        description: "Verific instalațiile electrice și schimb becuri defecte.",
        rating: 4.9,
        reviews: 35,
        location: "București, Sector 1",
        availability: "Marți - Vineri, 9:00 - 17:00",
        price: "De la 100 RON",
      },
      {
          profileimg: profilepicture,
        title: "Tailor Fit",
        updated: "2 days ago",
        user: "Luca Enache",
        skill: "Tailor",
        imageSrc: tailorFitImg,
        description: "Ajustez și repar haine cu atenție la detalii.",
        rating: 4.5,
        reviews: 18,
        location: "București, Unirii",
        availability: "Luni - Vineri, 10:00 - 16:00",
        price: "De la 70 RON",
      },
      {
        profileimg: profilepicture,
        title: "Plumbing",
        updated: "3 days ago",
        user: "Alex Ionescu",
        skill: "Plumber",
        imageSrc: plumbingImg,
        description: "Instalez și repar conducte pentru locuințe.",
        rating: 4.6,
        reviews: 20,
        location: "București, Berceni",
        availability: "Luni - Duminică, 7:00 - 19:00",
        price: "De la 180 RON",
      },
    ];
   const filteredPosts = posts.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skill.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="posts">
       <div className="feed-header">
            <h2>Postări noi</h2>
            <div className="filter-bar">
              <button className="filter-btn">Toate</button>
              <button className="filter-btn">Electroniști</button>
              <button className="filter-btn">Mecanici</button>
              <SearchInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Caută postări..."
              />
            </div>
          </div>
       <div className="posts-wrapper">
               <div className="posts-grid">
                        {filteredPosts.map((p, i) => (
                          <FeedPostCard
                          key={i}
                          imageSrc={p.imageSrc}
                          title={p.title}
                          updated={p.updated}
                          name={p.user}
                          skill={p.skill}
                          description={p.description}
                          rating={p.rating}
                          reviews={p.reviews}
                          location={p.location}
                          availability={p.availability}
                          price={p.price}
                          profilepicture={p.profileimg}
                          />
                        ))}
              </div>
            </div>
       </div>
  );
};

export default Posts;