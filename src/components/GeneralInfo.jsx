import { useState } from "react";
import Display from "./Display";

const GeneralInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [isHidden, setIsHidden] = useState(false);

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
        <div>
          <label htmlFor="name" id="name">
            Name:
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="email" id="email">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number">Phone Number:</label>
          <input
            value={number}
            type="text"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {isHidden && (
        <Display
          setIsHidden={setIsHidden}
          name={name}
          email={email}
          number={number}
        />
      )}
    </>
  );
};

export default GeneralInfo;
