import { useState, useEffect } from "react";
import Button from "../atoms/Button";

function PostModal({
  type,
  text,
  setText,
  handleNext,
  onClose,
  isEdit = false,
  initialData = null, // 👈 { content, image }
}) {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // 🔥 EDIT MODE PREFILL
  useEffect(() => {
    if (isEdit && initialData) {
      setText(initialData.content || "");

      if (initialData.image) {
        setPreview(initialData.image);
        setStep(2); // directly go to preview step
      }
    }
  }, [isEdit, initialData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setStep(2);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-xl">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {isEdit
              ? "Edit Post"
              : type === "photo"
                ? step === 1
                  ? "Upload Photo"
                  : "Create Post"
                : "Create Post"}
          </h2>

          <button className="text-red-600" onClick={onClose}>
            <i class="fi fi-rs-cross-small"></i>
          </button>
        </div>

        {/* TEXT POST */}
        {type === "text" && (
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's on your mind?"
            className="w-full h-32 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )}

        {/* PHOTO STEP 1 */}
        {type === "photo" && step === 1 && (
          <div className="flex flex-col items-center gap-4 border-2 border-dashed border-gray-300 p-6 rounded-xl">
            <p className="text-gray-500">Select a photo</p>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
        )}

        {/* PHOTO STEP 2 */}
        {type === "photo" && step === 2 && (
          <div className="flex flex-col gap-3">
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="w-full h-64 object-cover rounded-xl"
              />
            )}

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write a caption..."
              className="w-full border rounded-xl p-3"
            />
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex justify-end mt-4 gap-2">
          {/* BACK BUTTON */}
          {type === "photo" && step === 2 && !isEdit && (
            <Button
              onClick={() => setStep(1)}
              className="bg-gray-200 px-4 py-2 rounded-xl"
            >
              Back
            </Button>
          )}

          {/* MAIN BUTTON */}
          <Button
            onClick={() => {
              if (type === "photo" && step === 1 && !isEdit) return;

              handleNext(image, text); // 👈 IMPORTANT CHANGE
              onClose();
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl"
          >
            {isEdit
              ? "Update"
              : type === "photo"
                ? step === 1
                  ? "Next"
                  : "Post"
                : "Post"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
