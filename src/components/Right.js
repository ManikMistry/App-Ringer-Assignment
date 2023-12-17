import React, { useRef, useState } from "react";
import { Avatar } from "@mui/material";
import GradientComponent from "./GradientComponent";
import "./Right.css";
// import { html2pdf } from "html2pdf.js";
import jsPDF from "jspdf";

function Right() {
  const [showMenu, setShowMenu] = useState(false);
  const resumeRef = useRef(null);
  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });
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
      <div ref={resumeRef} className="review-container">
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
        <main>
          <div className="profile-section">
            <div className="profile">
              <div class="circle-frame">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="..."
                />
              </div>
              <h3 className="name">Sarthak Sharma</h3>
              <p className="designation">Product Engineer</p>
            </div>

            <div className="A-P-E-section">
              <h3 className="details-head">Address</h3>
              <div className="p-head">
                <p className="current-location">Odisha, India</p>
                <p className="phone">Phone</p>
                <p className="ph-no">+91 9078105059</p>
                <p className="email">xyz@gmail.com</p>
              </div>
            </div>

            <div className="social-links">
              <h3 className="details-head">Links</h3>
              <div className="p-head">
                <a href="#" className="links">GitHub</a>
                <a href="#" className="links">LinkedIn</a>
                <a href="#" className="links">Twiter</a>
                <a href="#" className="links">LeetCode</a>
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
            <p className="desc">
              "I'm Manik, a dedicated Front-end Developer with a passion for
              creativity and hard work. I'm excited to embark on a new career
              journey, seeking growth-oriented organizations that challenge me
              to continually enhance my skills."
            </p>

            <h3 className="profile-detailed-head">Experience</h3>
            <p className="Company-Title">Uber</p>
            <p className="Job-Title">Software Developer</p>
            <p className="date">Dec 2013 - Mar 2015</p>
            <ul>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
            </ul>

            <p className="Company-Title">Uber</p>
            <p className="Job-Title">Software Developer</p>
            <p className="date">Dec 2013 - Mar 2015</p>
            <ul>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
            </ul>

            <p className="Company-Title">Uber</p>
            <p className="Job-Title">Software Developer</p>
            <p className="date">Dec 2013 - Mar 2015</p>
            <ul>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
              <li>Design safty-focused experiences for Rides and Drivers </li>
            </ul>

            <h3 className="profile-detailed-head">Education</h3>
            <p className="Education-Title">Brown University</p>
            <p className="Clg-name">Intermidiate, <span>Sep 2010- May 2013</span></p>

            <h3 className="profile-detailed-head">Languages</h3>
            <p className="lang">English</p>
            <p className="lang">Hindi</p>
          </div>
        </main>
      </div>
    </>

  );
}

export default Right;
