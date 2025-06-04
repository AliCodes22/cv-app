const InputField = ({ label, type, name, onChange, id, value }) => {
  return (
    <div
      style={{
        display: type === "checkbox" ? "flex" : "block",
        alignItems: "center",
      }}
    >
      {type === "checkbox" ? (
        <>
          <input
            type={type}
            name={name}
            id={id}
            checked={value}
            onChange={onChange}
            required={false}
          />
          <label htmlFor={id} style={{ marginLeft: 6, cursor: "pointer" }}>
            {label}
          </label>
        </>
      ) : (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            required
          />
        </>
      )}
    </div>
  );
};

export default InputField;
