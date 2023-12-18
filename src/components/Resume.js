import React, { useState } from "react";
import "./Resume.css";
import Left from "./Left";
import Right from "./Right";

const Resume = () => {
  const [userData, setUserData] = useState({
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    github: "",
    linkedin: "",
    twitter: "",
    leetCode: "",
    language1: "",
    language2: "",
    collegeName: "",
    fieldOfStudy: "",
    passoutYear: "",
  });

  const [experiences, setExperiences] = useState([]);

  const handleUserDataChange = (newData) => {
    console.log(newData)
    setUserData(newData);
  };

  const handleExperiencesChange = (newExperiences) => {
    setExperiences(newExperiences);
  };

  return (
    <>
      <div className="main-container">
        <Left
          onUserDataChange={handleUserDataChange}
          onExperiencesChange={handleExperiencesChange}
        />
        <Right userData={userData} experiences={experiences} />
      </div>
    </>
  );
};

export default Resume;
