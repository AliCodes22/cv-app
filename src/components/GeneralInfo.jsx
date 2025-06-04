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
  const [showExperience, setShowExperience] = useState(false);
  const [showSecondExperience, setShowSecondExperience] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      responsibilities: ["", ""],
      isCurrent: false,
    },
    {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      responsibilities: ["", ""],
      isCurrent: false,
    },
  ]);
  const [graduationDate, setGraduationDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsHidden(true);
  };

  const hiddenClass = {
    display: "none",
  };

  const handleExperienceChange = (index, updatedExperience) => {
    const updatedArray = experiences.map((experience, i) => {
      if (i === index) {
        return updatedExperience;
      } else {
        return experience;
      }
    });

    setExperiences(updatedArray);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "flex-start",
        padding: "1rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      {/* FORM - left side */}
      <form
        onSubmit={handleSubmit}
        style={isHidden ? hiddenClass : { flex: 1, maxWidth: "400px" }}
      >
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

        {!showExperience && (
          <div>
            <button
              type="button"
              onClick={() => setShowExperience(true)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                backgroundColor: "#007acc",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Add Experience
            </button>
          </div>
        )}

        {showExperience && (
          <>
            {experiences.map((experience, index) => {
              if (index === experiences.length - 1) {
                return;
              }

              return (
                <div key={index} style={{ marginTop: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      color: "#007acc",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Experience {index + 1}
                  </h3>
                  <Experience
                    setExperiences={setExperiences}
                    experience={experiences[index]}
                    onExperienceChange={handleExperienceChange}
                    index={index}
                    key={index}
                  />
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => setShowExperience(false)}
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                cursor: "pointer",
                backgroundColor: "#ccc",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Cancel
            </button>
          </>
        )}

        <button
          type="submit"
          style={{
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#007acc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Submit
        </button>
      </form>

      {/* RESUME DISPLAY - right side */}
      {isHidden && (
        <div
          style={{
            flex: 1,
            maxWidth: "600px",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "6px",
            boxShadow: "0 2px 8px rgb(0 0 0 / 0.1)",
            backgroundColor: "white",
          }}
        >
          <Display
            setIsHidden={setIsHidden}
            name={name}
            email={email}
            number={number}
            school={school}
            program={program}
            graduationDate={graduationDate}
            experiences={experiences}
          />
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
