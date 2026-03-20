import React from "react";

function Input({ value, onChange, placeholder, className }) {
  return (
    <>
      <input
        className={`border p-2 rounded-4xl  ${className}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
