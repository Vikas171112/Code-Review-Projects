import React from "react";

function Avatar({ src }) {
  return (
    <>
      <img src={src} className="w-14 h-14 rounded-full object-cover" />
    </>
  );
}

export default Avatar;
