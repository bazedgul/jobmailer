import React, { useState } from "react";
import axios from "axios";

const Popup = () => {
  const [formData, setFormData] = useState({
    recruiterEmail: "",
    subject: "Application for MERN Role",
    content: "Hi, I'm applying for the role. Please find resume attached.",
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const sendEmail = async () => {
    if (!formData.recruiterEmail || !resumeFile) {
      return setStatus("❌ Recruiter email and resume are required.");
    }

    try {
      const payload = new FormData();
      payload.append("recruiterEmail", formData.recruiterEmail);
      payload.append("subject", formData.subject);
      payload.append("content", formData.content);
      payload.append("resume", resumeFile);

      const res = await axios.post("http://localhost:5000/api/email/send", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStatus(`✅ ${res.data.message || "Email sent successfully!"}`);
    } catch (error) {
      console.error("Error sending email:", error.response || error);
      setStatus("❌ Failed to send email.");
    }
  };

  return (
    <div style={{ padding: "1rem", width: 300 }}>
      <h2>📩 Job Mailer</h2>

      <input
        type="email"
        name="recruiterEmail"
        placeholder="Recruiter Email"
        value={formData.recruiterEmail}
        onChange={handleChange}
        required
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />

      <textarea
        name="content"
        rows="5"
        placeholder="Email Content"
        value={formData.content}
        onChange={handleChange}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />

      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />

      <button
        onClick={sendEmail}
        style={{ width: "100%", padding: "0.5rem", cursor: "pointer" }}
      >
        Send Email
      </button>

      <p style={{ marginTop: "0.5rem", color: "green" }}>{status}</p>
    </div>
  );
};

export default Popup;
