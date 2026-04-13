/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Files from './Files.jsx';
import '../index.css';

const Resume = () => {
  const resumeRef = useRef();

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2, // Better quality
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      unit: 'px',
      format: 'a4'
    });
    
    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save('Murugesan.pdf');
  };

  return (
    <div className="resume-container">
      <div className="download-btn-container">
        <button onClick={downloadPDF} className="download-btn">
          📄 Download Resume PDF
        </button>
      </div>
      
      <div ref={resumeRef} className="resume">
        <header className="resume-header">
          <h1>MURUGESAN S</h1>
          <h2>Associate Engineer</h2>
          <div className="contact-info">
          <span>
             <nav className="resume-nav">
              <Link className='files-nav' to="/files">Files</Link>
             </nav>
            </span>
            <span>📞 +91 6380774824</span>
            <span>✉️ murugeshyadav0511@gmail.com</span>
            <span>📍 Vellore, Tamil Nadu</span>
          </div>
        </header>

        <section className="resume-section">
          <h3>Professional Summary</h3>
          <p>Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies.</p>
        </section>

        <section className="resume-section">
          <h3>Work Experience</h3>
          <div className="experience-item">
            <div className="exp-header">
              <strong>Senior Software Engineer</strong>
              <span>2022 - Present</span>
            </div>
            <div className="company">Tech Corp Inc.</div>
            <ul>
              <li>Led development of 5+ major features using React and Node.js</li>
              <li>Improved application performance by 40% through code optimization</li>
              <li>Mentored 3 junior developers and conducted code reviews</li>
            </ul>
          </div>
          
          <div className="experience-item">
            <div className="exp-header">
              <strong>Software Developer</strong>
              <span>2019 - 2022</span>
            </div>
            <div className="company">StartUp Solutions</div>
            <ul>
              <li>Developed RESTful APIs serving 10,000+ daily users</li>
              <li>Implemented responsive designs using React and Tailwind CSS</li>
              <li>Reduced bug rate by 25% with comprehensive testing</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h3>Education</h3>
          <div className="education-item">
            <div className="edu-header">
              <strong>Master of Science in Computer Science</strong>
              <span>2017 - 2019</span>
            </div>
            <div>University of Technology, GPA: 3.8/4.0</div>
          </div>
          
          <div className="education-item">
            <div className="edu-header">
              <strong>Bachelor of Engineering in IT</strong>
              <span>2013 - 2017</span>
            </div>
            <div>State University, GPA: 3.6/4.0</div>
          </div>
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <strong>Frontend:</strong>
              <span>React, Vue, Angular, HTML5/CSS3, TypeScript</span>
            </div>
            <div className="skill-category">
              <strong>Backend:</strong>
              <span>Node.js, Python, Java, Express.js</span>
            </div>
            <div className="skill-category">
              <strong>Database:</strong>
              <span>MongoDB, PostgreSQL, MySQL</span>
            </div>
            <div className="skill-category">
              <strong>Tools:</strong>
              <span>Git, Docker, AWS, Jenkins</span>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h3>Projects</h3>
          <div className="project-item">
            <strong>E-Commerce Platform</strong>
            <p>Built a full-stack e-commerce platform with React, Node.js, and MongoDB handling 1000+ daily transactions.</p>
          </div>
          <div className="project-item">
            <strong>Task Management App</strong>
            <p>Developed a real-time task management system with drag-drop functionality and team collaboration features.</p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Certifications</h3>
          <ul>
            <li>AWS Certified Solutions Architect</li>
            <li>Meta Backend Developer Professional Certificate</li>
            <li>Google Project Management Certificate</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;