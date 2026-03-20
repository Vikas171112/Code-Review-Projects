import FeedLayout from "../layouts/FeedLayout";
import PostInput from "../components/molecules/PostInput";
import PostList from "../components/organisms/PostList";
import { usePosts } from "../hooks/usePost";

function Home() {
  const { posts, addPost, removePost, editPost } = usePosts();

  return (
    <FeedLayout>
      <PostInput handleSubmit={addPost} />

      <PostList posts={posts} deletePost={removePost} editPost={editPost} />
    </FeedLayout>
  );
}

export default Home;
