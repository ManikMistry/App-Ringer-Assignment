import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./Left.css";
import Left2 from "./Left2";

function Left({onUserDataChange,onExperiencesChange}) {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [proficiency, setProficiency] = useState(70);

  const handleAddSkill = () => {
    if (newSkill.trim() === "") {
      return;
    }

    const newSkills = [...skills, { skill: newSkill, proficiency }];
    setSkills(newSkills);
    setNewSkill("");
    // console.log(skills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };
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
    avatar:null,
    proficiency,
    desc:""
  });

  const handleInputChange = (field, value) => {
    setUserData((prevState) => ({ ...prevState, [field]: value }));
    console.log(value)
  };
  useEffect(()=>{
    onUserDataChange(userData);
  },[userData])

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result;
        setUserData((prevState) => ({ ...prevState, avatar: base64data }));
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="details-container">
        <div className="details-header">
          <p>
            <span>25%</span>Resume Score
          </p>
          <p>
            <span>+25%</span>Add Employment History
            <span id="last-span">?</span>
          </p>
        </div>
        <div class="line"></div>
        <div className="container">
          <div className="title">Personal details</div>
          <form action="#">
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Wanted Job Title</span>
                <input
                  type="text"
                  required
                  value={userData.jobTitle}
                  onChange={(e) =>handleInputChange("jobTitle", e.target.value)}
                />
              </div>
              <div className="input_pox-1">
                <Avatar className="avatar-style" />
                <label htmlFor="avatar" className="upload-label">
                  Upload Photo
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  
                />
              </div>
              <div className="input_pox">
                <span className="datails">First Name</span>
                <input 
                type="text" 
                required
                value={userData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div className="input_pox">
                <span className="datails">Last Name</span>
                <input 
                type="text" 
                required
                value={userData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">Email</span>
                <input 
                type="email" 
                required
                value={userData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="input_pox">
                <span className="datails">Phone</span>
                <input 
                type="tel" 
                required
                value={userData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="input_pox">
                <span className="datails">Country</span>
                <input 
                type="text" 
                required
                value={userData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">City</span>
                <input 
                type="text" 
                required
                value={userData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">GitHub</span>
                <input 
                type="text" 
                required
                value={userData.github}
                onChange={(e) => handleInputChange('github', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">LinkedIn</span>
                <input 
                type="text"
                required
                value={userData.linkedin}
                onChange={(e) => handleInputChange('linkedin', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">Twiter</span>
                <input 
                type="text" 
                required
                value={userData.twitter}
                onChange={(e) => handleInputChange('twitter', e.target.value)}
                />
              </div>
              <div className="input_pox">
                <span className="datails">LeetCode</span>
                <input 
                type="text" 
                required
                value={userData.leetCode}
                onChange={(e) => handleInputChange('leetCode', e.target.value)}
                 />
              </div>
              {/* <div className="title">Skills</div> */}
              <div className="input_pox">
                <span className="datails">Language 1</span>
                <input 
                type="text" 
                required
                value={userData.language1}
                onChange={(e) => handleInputChange('language1', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">Language 2</span>
                <input 
                type="text" 
                required
                value={userData.language2}
                onChange={(e) => handleInputChange('language2', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">College Name</span>
                <input 
                type="text" 
                required
                value={userData.collegeName}
                onChange={(e) => handleInputChange('collegeName', e.target.value)}
                 />
              </div>
              <div className="input_pox">
                <span className="datails">Field of Study</span>
                <input
                  type="text"
                  placeholder="like Btch, BCA, etc..."
                  required
                  value={userData.fieldOfStudy}
                  onChange={(e) => handleInputChange('fieldOfStudy', e.target.value)}
                />
              </div>
              <div className="input_pox">
                <span className="datails">Pass-out year</span>
                <input 
                type="date" 
                required
                value={userData.passoutYear}
                onChange={(e) => handleInputChange('passoutYear', e.target.value)}
                 />
                
              </div>
              <div className="input_pox">
                <span className="datails">Description</span>
                <input
                  type="text"
                  required
                  value={userData.desc}
                  onChange={(e) => handleInputChange('desc', e.target.value)}
                />
              </div>
            </div>
          </form>
          <div className="title">Skills</div>
          <form action="#">
            <div className="user_details">
              <div className="input_pox">
                <span className="datails">Add your skills</span>
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  required
                />
              </div>
              <div className="input_pox_range">
                <span className="datails">Proficiency</span>
                <input
                  type="range"
                  value={proficiency}
                  onChange={(e) => setProficiency(Number(e.target.value))}
                  required
                />
                <output id="rangevalue">{proficiency}</output>
              </div>
              <button onClick={handleAddSkill} className="add-button">
                add
              </button>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <ul className="list" key={index}>
                    <li>{skill.skill}</li>
                    <li>Proficiency:{skill.proficiency}%</li>
                    <button onClick={() => handleRemoveSkill(index)}>X</button>
                  </ul>
                ))}
              </div>
            </div>
          </form>
          {/* EXPERINCE */}
          <Left2 onExperiencesChange={onExperiencesChange}/>
        </div>
      </div>
    </>
  );
}

export default Left;
