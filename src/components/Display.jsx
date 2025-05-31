const Display = ({ name, email, number, setIsHidden }) => {
  return (
    <>
      <button onClick={() => setIsHidden(false)}>Edit</button>
      <button onClick={() => setIsHidden(false)}>Cancel</button>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Number: {number}</p>
    </>
  );
};

export default Display;
