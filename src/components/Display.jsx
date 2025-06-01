const Display = ({
  name,
  email,
  number,
  school,
  program,
  graduationDate,
  setIsHidden,
}) => {
  return (
    <>
      <button onClick={() => setIsHidden(false)}>Edit</button>
      <button onClick={() => setIsHidden(false)}>Cancel</button>
      <p>{name}</p>
      <p>{email}</p>
      <p>{number}</p>
      <p>{school}</p>
      <p>{program}</p>
      <p>{graduationDate}</p>
    </>
  );
};

export default Display;
