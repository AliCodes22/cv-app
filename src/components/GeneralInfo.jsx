import { useState } from "react";
import Display from "./Display";
import EducationInfo from "./EducationInfo";
import InputField from "./InputField";
import Experience from "./Experience";

const GeneralInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [school, setSchool] = useState("");
  const [program, setProgram] = useState("");
  const [showExperience, setShowExperience] = useState("");
  const [graduationDate, setGraduationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsHidden(true);
  };

  const hiddenClass = {
    display: "none",
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={isHidden ? hiddenClass : {}}>
        <InputField
          name="name"
          id="name"
          value={name}
          type="text"
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <InputField
          name="email"
          id="email"
          value={email}
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          name="number"
          id="number"
          value={number}
          label="Number"
          type="text"
          onChange={(e) => setNumber(e.target.value)}
        />

        <EducationInfo
          school={school}
          setSchool={setSchool}
          program={program}
          setProgram={setProgram}
          graduationDate={graduationDate}
          setGraduationDate={setGraduationDate}
        />
        {showExperience && <Experience />}

        <div>
          <button onClick={() => setShowExperience(true)}>
            Add Experience
          </button>
        </div>

        <button type="submit">Submit</button>
      </form>

      {isHidden && (
        <Display
          setIsHidden={setIsHidden}
          name={name}
          email={email}
          number={number}
          school={school}
          program={program}
          graduationDate={graduationDate}
        />
      )}
    </>
  );
};

export default GeneralInfo;
