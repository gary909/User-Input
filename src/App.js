import React, { useState } from "react";

function App() {
  // State variables for first name and last name
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [eMail, setEmail] = useState("");

  // Function to handle changes in the first name input
  const handleFNameChange = (event) => {
    setFName(event.target.value);
  };

  // Function to handle changes in the last name input
  const handleLNameChange = (event) => {
    setLName(event.target.value);
  };

  // Function to handle changes in the last name input
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <h3>{eMail}</h3>
      <br></br>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          value={fName}
          onChange={handleFNameChange}
        />
        <input
          name="lName"
          placeholder="Last Name"
          value={lName}
          onChange={handleLNameChange}
        />
        <input
          name="eMail"
          placeholder="E-Mail"
          value={eMail}
          onChange={handleEmailChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
