import React from "react";

const InputField = ({ label, type, name, onChange, id, value }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>:{" "}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
