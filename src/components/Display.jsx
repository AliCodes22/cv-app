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
    <div
      style={{
        color: "#222",
        lineHeight: 1.5,
        fontSize: "16px",
      }}
    >
      <button
        onClick={() => setIsHidden(false)}
        style={{
          marginBottom: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#007acc",
          border: "none",
          borderRadius: "4px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <header
        style={{
          borderBottom: "2px solid #007acc",
          paddingBottom: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2rem" }}>{name || "Your Name"}</h1>
        <p style={{ margin: 0, fontWeight: "600", color: "#555" }}>
          {email} | {number}
        </p>
      </header>

      <section style={{ marginBottom: "1rem" }}>
        <h2
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "0.25rem",
            color: "#007acc",
          }}
        >
          Education
        </h2>
        <p style={{ margin: 0, fontWeight: "600" }}>
          {school || "School Name"}
        </p>
        <p style={{ margin: 0 }}>{program || "Program Name"}</p>
        <p style={{ margin: 0, fontStyle: "italic" }}>
          {graduationDate
            ? new Date(graduationDate).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })
            : "Graduation Date"}
        </p>
      </section>

      <section>
        <h2
          style={{
            borderBottom: "1px solid #ddd",
            paddingBottom: "0.25rem",
            color: "#007acc",
          }}
        >
          Experience
        </h2>
        {experiences.length > 0 ? (
          experiences.map((experience, i) => (
            <div
              key={i}
              style={{
                marginBottom: "1rem",
                paddingBottom: "0.5rem",
                borderBottom:
                  i !== experiences.length - 1 ? "1px solid #eee" : "none",
              }}
            >
              <h3 style={{ margin: "0 0 0.25rem 0", fontWeight: "700" }}>
                {experience.role || "Role"} @ {experience.company || "Company"}
              </h3>
              <p
                style={{
                  margin: "0 0 0.5rem 0",
                  color: "#666",
                  fontSize: "0.9rem",
                }}
              >
                {experience.startDate
                  ? new Date(experience.startDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Start Date"}{" "}
                -{" "}
                {experience.isCurrent
                  ? "Present"
                  : experience.endDate
                  ? new Date(experience.endDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })
                  : "End Date"}
              </p>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                {experience.responsibilities
                  .filter((r) => r.trim() !== "")
                  .map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: "0.25rem" }}>
                      {resp}
                    </li>
                  ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience added yet.</p>
        )}
      </section>
    </div>
  );
};

export default Display;
