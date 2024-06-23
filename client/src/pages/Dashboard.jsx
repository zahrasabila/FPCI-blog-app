import React, { useEffect, useContext } from "react";
import { DUMMY_POSTS } from "../data";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import DeletePost from "./DeletePost";
import axios from "axios";
import Loader from "../pages/Loader";

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  // redirect to login page for any user who isn't logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPosts(response?.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="dashboard">
      {posts.length > 0 ? (
        <div className="container dashboard__container">
          {posts.map(({ _id: id, thumbnail, title }, index) => {
            return (
              <article key={`${id}-${index}`} className="dashboard__post">
                <div className="dashboard__post-info">
                  <div className="dashboard__post-thumbnail">
                    <img
                      src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`}
                      alt=""
                    />
                  </div>
                  <h5>{title}</h5>
                </div>
                <div className="dashboard__post-actions">
                  <Link to={`/posts/${id}`} className="btn sm">
                    View
                  </Link>
                  <Link to={`/posts/${id}/edit`} className="btn sm primary">
                    Edit
                  </Link>
                  <DeletePost postID={id} />
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>No posts found.</h2>
      )}
    </section>
  );
};

export default Dashboard;
