import React, { useEffect, useState } from 'react';
import './Left2.css'

const Left2 = ({onExperiencesChange}) => {
  const [experiences, setExperiences] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [bullets, setBullets] = useState(['', '', '']);

  useEffect(()=>{
    onExperiencesChange(experiences)
  },[experiences])
  const handleAddExperience = () => {
    const newExperience = {
      companyName,
      role,
      startDate,
      endDate,
      bullets,
    };

    setExperiences([...experiences, newExperience]);
    setCompanyName('');
    setRole('');
    setStartDate('');
    setEndDate('');
    setBullets(['', '', '']);
  };

  const handleBulletChange = (index, value) => {
    const newBullets = [...bullets];
    newBullets[index] = value;
    setBullets(newBullets);
  };
  const formatDateString = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className='container1'>
    <div className='title1'>Past Work Experience</div>
    <form action='#'>
    <div className='input_box'>
      <span className='datails'>Company Name</span>
      <input 
      type="text" 
      required 
      value={companyName} 
      onChange={(e) => setCompanyName(e.target.value)} 
      />
    </div>

    <div className='input_box'>
      <span className='datails'>Role</span>
      <input 
      type="text" 
      required 
      value={role} 
      onChange={(e) => setRole(e.target.value)}
      />
    </div>

    <div className='input_box'>
      <span className='datails'>Start Date</span>
      <input 
      type="date" 
      required 
      value={startDate} 
      onChange={(e) => setStartDate(e.target.value)} 
      />
    </div>
    <div className='input_box'>
      <span className='datails'>End Date</span>
      <input 
      type="date" 
      required 
      value={endDate} 
      onChange={(e) => setEndDate(e.target.value)} 
      />
    </div>
    <div className='input_box1'>
      <span className='datails'>Add past experience</span>
      {bullets.map((bullet, index) => (
        <input
        required
          key={index}
          type="text"
          value={bullet}
          onChange={(e) => handleBulletChange(index, e.target.value)}
        />
      ))}
    </div>
    <button className="Add-button1" onClick={handleAddExperience}>Add</button>

    </form>
    <div>
      <h3>Experiences:</h3>
      <ul>
        {experiences.map((experience, index) => (
          <li key={index}>
            <strong>{experience.companyName}</strong> - {experience.role}
            <p>
              {formatDateString(experience.startDate)} to {formatDateString(experience.endDate)}
            </p>
            <ul>
              {experience.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default Left2;
