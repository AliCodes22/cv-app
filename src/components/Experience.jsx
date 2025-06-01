import InputField from "./InputField";

const Experience = ({
  role,
  setRole,
  company,
  setCompany,
  startDate,
  setStartDate,
  endDate,
  isCurrent,
  setIsCurrent,
  setEndDate,
  responsibilities,
  setResponsibilities,
  experiences,
  setExperiences,
}) => {
  const experience = {
    role,
    company,
    startDate,
    endDate,
    isCurrent,
    responsibilities,
  };
  return (
    <div>
      Experience
      <InputField
        type="text"
        name={role}
        onChange={(e) => setRole(e.target.value)}
        value={role}
        id={role}
        label="Role"
      />
      <InputField
        type="text"
        name={company}
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        id={company}
        label="Company"
      />
      <InputField
        type="month"
        name={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
        id={startDate}
        label="Start Date"
      />
      <InputField
        type="checkbox"
        label="Is current"
        name="current"
        value={isCurrent}
        id="current"
        onChange={(e) => {
          setIsCurrent(e.target.checked);
        }}
      />
      {!isCurrent && (
        <InputField
          type="month"
          label="End Date"
          name={endDate}
          value={endDate}
          id={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      )}
      <button
        onClick={() => {
          if (experiences.length === 2) {
            return;
          } else {
            setExperiences([...experiences, experience]);
          }
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Experience;
