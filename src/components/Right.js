import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import GradientComponent from "./GradientComponent";
import "./Right.css";
import jsPDF from "jspdf";

function Right({ userData, experiences }) {
  console.log(userData);
  console.log(experiences);
  const [showMenu, setShowMenu] = useState(false);
  const resumeRef = useRef(null);
  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    // const doc = new jsPDF({
    //   format: "a4",
    // });
    const doc=new jsPDF('portrait', 'pt', 'a4');
    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    doc.html(resumeRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
    setShowMenu(false);
  };

  return (
    <>
      <div className="review-container">
        <header>
          <p>
            select templates <span>|</span> - Aa +
          </p>
          <div className="dropdown">
            <button onClick={handleButtonClick}>Download PDF</button>
            {showMenu && (
              <div className="dropdown-content">
                <div onClick={() => handleOptionClick("Export to Doc")}>
                  Export to Doc
                </div>
                <div onClick={() => handleOptionClick("Export to TXT")}>
                  Export to TXT
                </div>
                <div onClick={() => handleOptionClick("Share")}>Share</div>
              </div>
            )}
          </div>
          <Avatar />
        </header>
        <main ref={resumeRef}>
          <div className="profile-section">
            <div className="profile">
              <div className="circle-frame">
                <img
                  src={userData.avatar}
                  alt="..."
                />
              </div>
              <h3 className="name">{userData.firstName} {userData.lastName}</h3>
              <p className="designation">{userData.jobTitle}</p>
            </div>

            <div className="A-P-E-section">
              <h3 className="details-head">Address</h3>
              <div className="p-head">
                <p className="current-location">{userData.city}, {userData.country}</p>
                <p className="phone">Phone</p>
                <p className="ph-no">+91 {userData.phone}</p>
                <p className="email">{userData.email}</p>
              </div>
            </div>

            <div className="social-links">
              <h3 className="details-head">Links</h3>
              <div className="p-head">
                <a href="#" className="links">
                  {userData.github}
                </a>
                <a href="#" className="links">
                  {userData.linkedin}
                </a>
                <a href="#" className="links">
                {userData.twitter}
                </a>
                <a href="#" className="links">
                {userData.leetCode}
                </a>
              </div>
            </div>

            <div className="skills">
              <h3 className="details-head">Skills</h3>
              <div className="p-head">
                <p className="added-skills">
                  Figma
                  <GradientComponent percentage={"50%"} />
                </p>
                <p className="added-skills">
                  Java
                  <GradientComponent percentage={"50%"} />
                </p>
                <p className="added-skills">
                  C
                  <GradientComponent percentage={"50%"} />
                </p>
                <p className="added-skills">
                  C++
                  <GradientComponent percentage={"50%"} />
                </p>
              </div>
            </div>
          </div>
          <div className="profile-detailed-section">
            <h3 className="profile-detailed-head">Profile</h3>
            <p className="desc">{userData.desc}</p>

            <h3 className="profile-detailed-head">Experience</h3>
            {experiences.map((experience) => (
              <>
                <p className="Company-Title">{experience.companyName}</p>
                <p className="Job-Title">{experience.role}</p>
                <p className="date">{experience.startDate} - {experience.endDate}</p>
                <ul>
                {experience.bullets.map((bullet)=>(
                  <li>
                    {bullet}
                  </li>
                ))}                 
                </ul>
              </>
            ))}

            <h3 className="profile-detailed-head">Education</h3>
            <p className="Education-Title">{userData.collegeName}</p>
            <p className="Clg-name">
            {userData.fieldOfStudy}, <span>{userData.passoutYear}</span>
            </p>

            <h3 className="profile-detailed-head">Languages</h3>
            <p className="lang">{userData.language1}</p>
            <p className="lang">{userData.language2}</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default Right;
