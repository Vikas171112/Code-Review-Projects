import { useState } from "react";
import { createPost, deletePost, updatePost } from "../services/postService";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  const currentUser = {
    name: "Vikas",
    avatar: "https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5",
  };

  const addPost = (image, text) => {
    setPosts((prev) =>
      createPost(
        prev,
        text,
        image ? URL.createObjectURL(image) : null,
        currentUser,
      ),
    );
  };

  const removePost = (id) => {
    setPosts((prev) => deletePost(prev, id));
  };

  const editPost = (id, newText, newImage) => {
    setPosts((prev) =>
      updatePost(
        prev,
        id,
        newText,
        newImage ? URL.createObjectURL(newImage) : undefined,
      ),
    );
  };
  return {
    posts,
    addPost,
    removePost,
    editPost,
  };
}
