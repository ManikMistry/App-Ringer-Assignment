import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import GradientComponent from "./GradientComponent";
import "./Right.css";
import jsPDF from "jspdf";

function Right({ userData, experiences, skills }) {
  // console.log(userData);
  // console.log(experiences);
  // console.log(skills);
  const [showMenu, setShowMenu] = useState(false);
  const resumeRef = useRef(null);
  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (fileType) => {
    let elHtml = resumeRef.current.innerHTML;
    let link = document.createElement("a");
    link.setAttribute("download", "resume" + fileType);
    link.setAttribute(
      "href",
      "data:" + "text/doc" + ";charset=utf-8," + encodeURIComponent(elHtml)
    );
    link.click();
    setShowMenu(false);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF("portrait", "pt", "a4");
    doc.setFont("Inter-Regular", "normal");
    doc.html(resumeRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  return (
    <>
      <div className="review-container">
        <header>
          <p>
            select templates <span>|</span> - Aa +
          </p>
          <div className="dropdown">
            <button onClick={handleDownloadPDF}>Download PDF</button>
            <button onClick={handleButtonClick}>...</button>
            {showMenu && (
              <div className="dropdown-content">
                <div onClick={() => handleOptionClick(".docx")}>
                  Export to Doc
                </div>
                <div onClick={() => handleOptionClick(".txt")}>
                  Export to TXT
                </div>
                <div>Share</div>
              </div>
            )}
          </div>
        <Avatar />
        </header>
        <main ref={resumeRef}>
          <div className="profile-section">
            <div className="profile">
              <div className="circle-frame">
                <img src={userData.avatar} alt="" />
              </div>
              <h3 className="name">
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="designation">{userData.jobTitle}</p>
            </div>

            <div className="A-P-E-section">
              <h3 className="details-head">Address</h3>
              <div className="p-head">
                <p className="current-location">
                  {userData.city}, {userData.country}
                </p>
                <p className="phone">Phone</p>
                <p className="ph-no">+91 {userData.phone}</p>
                <p className="email">{userData.email}</p>
              </div>
            </div>

            <div className="social-links">
              <h3 className="details-head">Links</h3>
              <div className="p-head">
                {userData.github && (
                  <a href={userData.github} className="links">
                    <p>GitHub</p>
                  </a>
                )}
                {userData.linkedin &&
                  <a href={userData.linkedin} className="links">
                    <p>LinkedIn</p>
                  </a>
                }
                {userData.twitter &&
                  <a href={userData.twitter} className="links">
                    <p>Twitter</p>
                  </a>
                }
                {userData.leetCode &&
                  <a href={userData.leetCode} className="links">
                    <p>leetCode</p>
                  </a>
                }
              </div>
            </div>

            <div className="skills">
              <h3 className="details-head">Skills</h3>
              <div className="p-head">
                {skills &&
                  skills.map((skill) => (
                    <p className="added-skills" key={skill.skill}>
                      {skill.skill}
                      <GradientComponent percentage={skill.proficiency} />
                    </p>
                  ))}
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
                <p className="date">
                  {experience.startDate} to {experience.endDate}
                </p>
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li>{bullet}</li>
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
