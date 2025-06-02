const Display = ({
  name,
  email,
  number,
  school,
  program,
  graduationDate,
  setIsHidden,
  experiences,
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
      {experiences.length > 0 &&
        experiences.map((experience) => {
          return (
            <div>
              <p>{experience.role}</p>
              <p>{experience.company}</p>
              <p>{experience.startDate}</p>
              {experience.isCurrent ? (
                <p>"Present"</p>
              ) : (
                <p>{experience.endDate}</p>
              )}
            </div>
          );
        })}
    </>
  );
};

export default Display;
