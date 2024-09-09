import React from "react";
import { Box, Typography, Divider, Container, Button } from "@mui/material";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import html2pdf from "html2pdf.js";

const InternCertificate = () => {
  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    const options = {
      margin: 0.5,
      filename: "intern_certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md">
        <Box
          id="certificate"
          sx={{
            border: "2px solid #3f51b5",
            borderRadius: "12px",
            padding: "14px",
            marginTop: "14%",
            marginBottom: "10px",
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: 'white', // Ensure the background is white for the PDF
          }}
        >
          {/* Company Logo */}
          <Box sx={{ mb: 4 }}>
            <img
              src="../images/LYSS.png" // Replace with actual logo URL
              alt="Company Logo"
              style={{ width: "150px" }}
            />
          </Box>

          {/* Certificate Title */}
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Certificate of Internship Completion
          </Typography>

          <Divider sx={{ margin: "16px 0" }} />

          {/* Certificate Content */}
          <Typography variant="body1" sx={{ mb: 2 }}>
            This is to certify that <strong>[Intern's Full Name]</strong> has
            successfully completed an internship program at{" "}
            <strong>[Company Name]</strong> from <strong>[Start Date]</strong>{" "}
            to <strong>[End Date]</strong>. During this period, they
            demonstrated excellent skills, dedication, and a strong work ethic.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>[Intern's Full Name]</strong> was an integral part of our{" "}
            <strong>[Department/Team Name]</strong>, where they contributed to{" "}
            <strong>
              [mention specific projects or tasks they worked on, e.g., project
              development, research, analysis, etc.]
            </strong>
            . Their performance was commendable, and they consistently showed a
            willingness to learn and grow.
          </Typography>

          <Typography variant="body1" sx={{ mb: 4 }}>
            We appreciate their hard work and wish them the very best in their
            future endeavors.
          </Typography>

          <Divider sx={{ margin: "16px 0" }} />

          {/* Signature Section */}
          <Box sx={{ textAlign: "left", mt: 4 }}>
            <Typography variant="body1">
              <strong>[Authorized Signature]</strong>
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              [Name of the Signatory]
            </Typography>
            <Typography variant="body2">[Designation]</Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              [Company Name]
            </Typography>
          </Box>

          {/* Date */}
          <Typography variant="body2" sx={{ textAlign: "right", mt: 4 }}>
            Date: <strong>[Date]</strong>
          </Typography>
        </Box>
        {/* Download Button */}
        <Box sx={{ textAlign: "center", mt: 4, mb: 4 }}>
          <Button variant="contained" color="primary" onClick={downloadPDF}>
            Download Certificate
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default InternCertificate;
