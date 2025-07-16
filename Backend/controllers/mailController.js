import { sendEmail } from "../utils/sendEmail.js";

export const sendMail = async (req, res) => {
  const { recruiterEmail, subject, content } = req.body;
  const resumeFile = req.file;

  if (!recruiterEmail || !resumeFile) {
    return res
      .status(400)
      .json({ message: "Recruiter email and resume are required." });
  }

  try {
    await sendEmail({
      to: recruiterEmail,
      subject,
      content,
      attachmentPath: resumeFile.path,
    });

    return res.status(200).json({ message: "✅ Email sent successfully." });
  } catch (err) {
    console.error("❌ Error in sendMail:", err);
    return res.status(500).json({ message: "❌ Failed to send email." });
  }
};
