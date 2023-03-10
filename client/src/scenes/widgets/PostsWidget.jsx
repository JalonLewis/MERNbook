import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";

const URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    const response = await fetch(`${URL}/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    let data = await response.json();
    let postsNewestToOldest = []
    while (data.length > 0) {
    postsNewestToOldest.push(data.pop())
    }
    dispatch(setPosts({ posts: postsNewestToOldest }));
  };

  const getUserPosts = async () => {
    const response = await fetch(
      `${URL}/posts/${userId}/posts`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    let data = await response.json();
    let postsNewestToOldest = []
    while (data.length > 0) {
    postsNewestToOldest.push(data.pop())
    }
    dispatch(setPosts({ posts: postsNewestToOldest }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
