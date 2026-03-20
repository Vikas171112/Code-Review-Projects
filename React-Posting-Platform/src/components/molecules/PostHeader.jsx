import Avatar from "../atoms/Avatar";

function PostHeader({ user }) {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={user.avatar} />
      <span className="font-semibold">{user.name}</span>
    </div>
  );
}

export default PostHeader;
