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
    skills: []
  });

  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const handleUserDataChange = (newData) => {
    setUserData(newData);
  };

  const handleExperiencesChange = (newExperiences) => {
    setExperiences(newExperiences);
  };

  const handleSkillsChange = (newSkills) => {
    setSkills(newSkills);
    setUserData((prevUserData) => ({ ...prevUserData, skills: newSkills }));
  };

  return (
    <>
      <div className="main-container">
        <Left
          onUserDataChange={handleUserDataChange}
          onExperiencesChange={handleExperiencesChange}
          onSkillsChange={handleSkillsChange}
        />
        <Right 
        userData={userData} 
        experiences={experiences} 
        skills={skills} />
      </div>
    </>
  );
};

export default Resume;
