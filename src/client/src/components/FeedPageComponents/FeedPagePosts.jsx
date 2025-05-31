import React, { useState } from "react";
import "../../FeedPage/FeedPageStyle.css";
import FeedPostCard from "./FeedPostCard";
import { Search } from "lucide-react";

import pipeFixImg from "../../images/mechanicwoman.jpeg";
import lightCheckImg from "../../images/lightcheck.jpeg";
import tailorFitImg from "../../images/female_tailor.jpeg";
import plumbingImg from "../../images/pipefix.jpeg";
import profilepicture from "../../images/profile.jpeg";
import AddForm from "./AddForm.jsx";

export function SearchInput({ value, onChange, placeholder = "Search..." }) {
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


export const Posts = ({ onPostClick, category }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [addPostForm, setAddPostForm] = useState(false);
  const postsPerPage = 2;

  const addPostToggle = () => {
    setAddPostForm(true)
  }

  const cancelAdd = () => {
    setAddPostForm(false);
  };

  const defaultPosts = [
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
      price: 150,
       accredited: true
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
      price: 100,
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
      price: 70,
      accredited: true
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
      price: 180,
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
      price: 180,
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
      price: 180,
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
      price: 180,
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
      price: 180,
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
      price: 180,
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
      price: 180,
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
      price: 180,
    },
  ]

  const [posts, setPosts] = useState(defaultPosts);

  const filteredBySearch = posts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.skill.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredByCategory = category === "All"
    ? filteredBySearch
    : filteredBySearch.filter(p => p.skill.toLowerCase() === category.toLowerCase());

  const totalPages = Math.ceil(filteredByCategory.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredByCategory.slice(indexOfFirstPost, indexOfLastPost);


  // const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const [selectedFile, setSelectedFile] = useState(null);
  const [sortOption, setSortOption] = useState("newest");

  const addPost = () => {

    const title = document.getElementById("name").value.trim();
    const description = document.getElementById("description").value.trim();
    const price = document.getElementById("price").value.trim();

    if (!title || !description || !price || !selectedFile) {
      alert("All fields must be filled!");
      return;
    }
    
    const priceNumber = Number(price);

    if (!price || isNaN(priceNumber) || priceNumber <= 0) {
      alert("Please enter a valid number for the price!");
    }

    const newPost = {
      title: title,
      user: "Alex Ionescu",
      skill: "Plumber",
      imageSrc: selectedFile,
      description: description,
      price: priceNumber,
      profileimg: profilepicture,
      rating: 0,
      reviews: 0,
      location: "București, Berceni",
      availability: "Luni - Duminică, 7:00 - 19:00",
      category: document.getElementById("category").value,
    };

    console.log("post: ", newPost);
    
    setPosts(prevPosts => [newPost, ...prevPosts]);
    setSelectedFile(null)
    cancelAdd()
};

const handleSortChange = (event) => {
  var sortOption = event.target.value
  setSortOption(sortOption);
  console.log("Selected sort option:", sortOption);

  switch(sortOption){
    case "newest": {
      setPosts(defaultPosts)
      break;
    }

    case "price-low": {
      setPosts([...posts].sort((a, b) => a.price - b.price))
      break;
    }

    case "price-high": {
      setPosts([...posts].sort((a, b) => b.price - a.price))
      break;
    }

    case "rating-low": {
      setPosts([...posts].sort((a, b) => a.rating - b.rating))
      break;
    }

    case "rating-high": {
      setPosts([...posts].sort((a, b) => b.rating - a.rating))
      break;
    }

    case "mine": {
      setPosts([...posts].filter(a => a.user === "Alex Ionescu"))
      break;
    }
  }


};

  return (
    <div className="posts">
      {addPostForm && (
        <>
          <div 
            className="grey-screen"
            onClick={cancelAdd}
          ></div>
          <AddForm cancelAdd={cancelAdd} setSelectedFile={setSelectedFile} addPost={addPost}/>
        </>

      )
      }
      <div className="feed-header">
        <h2>New posts</h2>
        <div className="filter-bar">
          <div className="sort-component">
            <select id="category" className="select-sort" onChange={handleSortChange}>
                <option value="newest">Newest</option>
                <option value="price-low">Price low</option>
                <option value="price-high">Price high</option>
                <option value="rating-low">Rating low</option>
                <option value="rating-high">Rating high</option>
                <option value="mine">Mine</option>
            </select>
          </div>
          <SearchInput
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search post..."
          />
          <div style={{cursor: "pointer", marginLeft: "2%"}} className="add-post" onClick={addPostToggle}>
            <img src="/add-post.svg" alt="" height="30px" width="30px"/>
          </div>
        </div>
      </div>

     <div className="posts-wrapper">
       <div className="posts-grid">
         {currentPosts.map((p, i) => (
           <FeedPostCard
             key={i}
             onClick={() => onPostClick(p.title)}
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
             accredited={p.accredited}
           />
         ))}
       </div>
     </div>

    <div className="pagination">
      <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
        &laquo; Prev
      </button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
        Next &raquo;
      </button>
    </div>

    </div>
  );
};

export default Posts;
