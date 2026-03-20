import React from "react";

function Image({ src, alt }) {
  return (
    <>
      <img className="w-full rounded-lg mt-2" src={src} alt={alt} />
    </>
  );
}

export default Image;
