import React from 'react';
import { useState } from 'react';
import { Avatar } from "@mui/material";
import './Left.css'
import Left2 from './Left2';

function Left() {
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
    };
  
    const handleRemoveSkill = (index) => {
      const updatedSkills = skills.filter((_, i) => i !== index);
      setSkills(updatedSkills);
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
                  <input type="text" required />
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
                  />
                </div>
                <div className="input_pox">
                  <span className="datails">First Name</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Last Name</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Email</span>
                  <input type="email" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Phone</span>
                  <input type="tel" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Country</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">City</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">GitHub</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">LinkedIn</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Twiter</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">LeetCode</span>
                  <input type="text" required />
                </div>
                {/* <div className="title">Skills</div> */}
                <div className="input_pox">
                  <span className="datails">Language 1</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Language 2</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">College Name</span>
                  <input type="text" required />
                </div>
                <div className="input_pox">
                  <span className="datails">Field of Study</span>
                  <input type="text" placeholder='like Btch, BCA, etc...'required />
                </div>
                <div className="input_pox">
                  <span className="datails">Pass-out year</span>
                  <input type="date" required />
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
                      <button onClick={() => handleRemoveSkill(index)}>
                        X
                      </button>
                    </ul>
                  ))}
                </div>
              </div>
            </form>

            {/* EXPERINCE */}
            <Left2/>
          </div>
        </div>
    </>
  )
}

export default Left