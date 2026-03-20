import React from "react";

function FeedLayout({ children }) {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="w-full max-w-xl p-4">{children}</div>
      </div>
    </div>
  );
}

export default FeedLayout;
