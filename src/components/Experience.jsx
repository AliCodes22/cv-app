import { useState } from "react";
import InputField from "./InputField";

const Experience = ({ experiences, setExperiences }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [responsibility1, setResponsibility1] = useState("");
  const [responsibility2, setResponsibility2] = useState("");
  const [isCurrent, setIsCurrent] = useState(false);

  return (
    <div>
      Experience
      <InputField
        type="text"
        name="role"
        onChange={(e) => setRole(e.target.value)}
        value={role}
        id={role}
        label="Role"
      />
      <InputField
        type="text"
        name="company"
        onChange={(e) => setCompany(e.target.value)}
        value={company}
        id={company}
        label="Company"
      />
      <InputField
        type="month"
        name="start-date"
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
          name="end-date"
          value={endDate}
          id={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      )}
      <p>Responsibilities</p>
      <InputField
        type="text"
        name="responsibility-1"
        value={responsibility1}
        id={responsibility1}
        label="Responsibility 1"
        onChange={(e) => setResponsibility1(e.target.value)}
      />
      <InputField
        type="text"
        name="responsibility-2"
        value={responsibility2}
        id={responsibility2}
        label="Responsibility 2"
        onChange={(e) => setResponsibility2(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();

          const tasks = [];

          if (responsibility1.trim()) {
            tasks.push(responsibility1.trim());
          }

          if (responsibility2.trim()) {
            tasks.push(responsibility2.trim());
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
        Submit
      </button>
    </div>
  );
};

export default Experience;
