import { useState } from "react";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import PostModal from "../organisms/PostModal";

function PostInput({ handleSubmit }) {
  const [modalType, setModalType] = useState(null);
  const [text, setText] = useState("");

  return (
    <div className="max-w-xl mx-auto mt-6 p-5 rounded-2xl shadow-md bg-white border border-gray-200">
      <div className="w-full flex gap-4 items-center">
        <Avatar src="https://images.unsplash.com/photo-1773332611573-5e5bfa8e5de5" />

        <span className="flex-1" onClick={() => setModalType("text")}>
          <Input
            value={text}
            onChange={() => {}}
            placeholder="What's on your mind?"
            className="w-full px-4 py-3 rounded border border-gray-300 cursor-pointer bg-gray-100"
          />
        </span>
      </div>

      <div className="flex justify-center items-center mt-4">
        <Button onClick={() => setModalType("photo")}>Add Photo</Button>
      </div>

      {modalType && (
        <PostModal
          type={modalType}
          text={text}
          setText={setText}
          handleNext={(image, textData) => {
            handleSubmit(image, textData);
          }}
          onClose={() => {
            setModalType(null);
            setText("");
          }}
        />
      )}
    </div>
  );
}

export default PostInput;
