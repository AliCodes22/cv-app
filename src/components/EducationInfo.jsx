import InputField from "./InputField";

const EducationInfo = ({
  school,
  setSchool,
  program,
  setProgram,
  graduationDate,
  setGraduationDate,
}) => {
  return (
    <>
      <InputField
        type="text"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        name="school"
        id="school"
        label="School"
      />
      <InputField
        type="text"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
        name="program"
        id="program"
        label="Program"
      />
      <InputField
        type="month"
        value={graduationDate}
        id="date"
        name="date"
        label="Graduation Date"
        onChange={(e) => {
          setGraduationDate(e.target.value);
        }}
      />
    </>
  );
};

export default EducationInfo;
