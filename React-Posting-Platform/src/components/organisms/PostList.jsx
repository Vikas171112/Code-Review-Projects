import PostCard from "./PostCard";

function PostList({ posts, deletePost, editPost }) {
  return (
    <div className="mt-4">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          deletePost={deletePost}
          editPost={editPost}
        />
      ))}
    </div>
  );
}

export default PostList;
