import React from "react";
import Posts from "../components/Posts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="article-section__container">
      <h1>Articles Section</h1>
      <div className="view-category">
          <h4>View by Category: </h4>
          <ul className="home__categories">
            <li>
            <Link to="/posts/categories/Cultural%20reflections">
            Cultural reflections
            </Link>
            </li>
            <li>
            <Link to="/posts/categories/Political%20dynamics">
            Political dynamics
            </Link>
            </li>
            <li>
            <Link to="/posts/categories/Global%20security%20watch">
            Global security watch
            </Link>
            </li>
            
          </ul>
      </div>
      </div>
      <Posts/>
    </div>
  )
};

export default Home;
