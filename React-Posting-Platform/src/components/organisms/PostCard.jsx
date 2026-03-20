import React, { useState } from "react";
import PostHeader from "../molecules/PostHeader";
import Image from "../atoms/Image";
import PostModal from "./PostModal";

function PostCard({ post, deletePost, editPost }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState(post.content);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-4">
      <PostHeader user={post.user} />

      <div>
        <p className="mt-3">{post.content}</p>
        {post.image && <Image src={post.image} />}
      </div>

      {/* ACTIONS */}
      <div className="mt-4 flex gap-6 justify-around">
        {/* EDIT */}
        <i
          className="text-3xl fi fi-rs-pen-field cursor-pointer"
          onClick={() => setOpen(true)}
        ></i>

        {/* DELETE */}
        <i
          className="text-3xl fi fi-rs-trash cursor-pointer"
          onClick={() => deletePost(post.id)}
        ></i>
      </div>

      {/* EDIT MODAL */}
      {open && (
        <PostModal
          type={post.image ? "photo" : "text"}
          text={text}
          setText={setText}
          isEdit={true}
          initialData={{
            content: post.content,
            image: post.image,
          }}
          handleNext={(img, updatedText) => {
            editPost(post.id, updatedText);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

export default PostCard;
