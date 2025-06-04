import InputField from "./InputField";

const Experience = ({
  experiences,
  setExperiences,
  experience,
  onExperienceChange,
  index,
}) => {
  const handleInputChange = (field, value) => {
    const updatedExp = {
      ...experience,
      [field]: value,
    };

    onExperienceChange(index, updatedExp);
  };

  const { role, company, startDate, endDate, responsibilities, isCurrent } =
    experience;

  return (
    <div>
      <InputField
        type="text"
        name="role"
        onChange={(e) => handleInputChange("role", e.target.value)}
        value={experience.role}
        id={experience.role}
        label="Role"
      />
      <InputField
        type="text"
        name="company"
        onChange={(e) => handleInputChange("company", e.target.value)}
        value={experience.company}
        id={experience.company}
        label="Company"
      />
      <InputField
        type="month"
        name="start-date"
        onChange={(e) => handleInputChange("startDate", e.target.value)}
        value={experience.startDate}
        id={experience.startDate}
        label="Start Date"
      />
      <InputField
        type="checkbox"
        label="Is current"
        name="current"
        value={experience.isCurrent}
        id="current"
        onChange={(e) => {
          handleInputChange("isCurrent", e.target.checked);
        }}
      />
      {!experience.isCurrent && (
        <InputField
          type="month"
          label="End Date"
          name="end-date"
          value={experience.endDate}
          id={experience.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
      )}
      <p>Responsibilities</p>
      <InputField
        type="text"
        name="responsibility-1"
        value={experience.responsibilities[0]}
        id={experience.responsibilities[0]}
        label="Responsibility 1"
        onChange={(e) => {
          const newArr = [...responsibilities];

          newArr[0] = e.target.value;

          handleInputChange("responsibilities", newArr);
        }}
      />
      <InputField
        type="text"
        name="responsibility-2"
        value={responsibilities[1]}
        id={responsibilities[1]}
        label="Responsibility 2"
        onChange={(e) => {
          const newArr = [...responsibilities];

          newArr[1] = e.target.value;

          handleInputChange("responsibilities", newArr);
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          const tasks = [];

          if (experience.responsibilities[0].trim()) {
            tasks.push(experience.responsibilities[0].trim());
          }

          if (experience.responsibilities[1].trim()) {
            tasks.push(experience.responsibilities[1]);
          }

          const updatedExperience = {
            role,
            company,
            startDate,
            endDate,
            isCurrent,
            responsibilities: tasks,
          };

          if (experiences.length === 2) {
            return;
          } else {
            setExperiences([...experiences, updatedExperience]);
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Experience;
