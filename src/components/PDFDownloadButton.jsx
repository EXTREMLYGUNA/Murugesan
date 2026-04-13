/* eslint-disable no-unused-vars */
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Resume from '../components/Resume.jsx';

const PDFDownloadButton = () => {
  return (
    <div className="pdf-download-container">
      <PDFDownloadLink 
        document={<Resume />} 
        fileName="Murugesan.pdf"
        className="pdf-download-btn"
      >
        {({ loading }) => (
          loading ? 'Generating PDF...' : '📄 Download Professional Resume'
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default PDFDownloadButton;