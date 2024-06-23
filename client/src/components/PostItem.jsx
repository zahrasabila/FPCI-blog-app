import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { IoIosArrowRoundForward } from "react-icons/io";

const PostItem = ({
  postID,
  thumbnail,
  category,
  title,
  desc,
  creator,
  createdAt,
}) => {
  const shortDesc = desc.length > 145 ? desc.substr(0, 145) + "..." : desc;
  const shortTitle = title.length > 30 ? title.substr(0, 145) + "..." : title;
  return (
    <article className="post">
      <div className="post__thumbnail">
        <img
          src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${thumbnail}`}
          alt={title}
        />
      </div>
      <div className="post__content-footer__wrap">
        <div className="post__content">
          <div className="post__content-h3-category__wrap">
            <div className="post__content-category">
              <div className="square"></div>
              <Link
                to={`posts/categories/${category}`}
                className="btn category">
                {category}
              </Link>
            </div>
            <Link to={`/posts/${postID}`}>
              <h3>{shortTitle}</h3>
            </Link>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: shortDesc }}
            className="post__content-desc"
          />
        </div>
        <div className="post__footer">
          <PostAuthor creator={creator} createdAt={createdAt} />
          <Link to={`/posts/${postID}`}>
          <button className="arrow-icon">
            <IoIosArrowRoundForward />
          </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
