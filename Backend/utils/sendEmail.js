// utils/sendEmail.js
import fs from "fs";
import path from "path";
import { gmail } from "./googleClient.js";

export const sendEmail = async ({ to, subject, content, attachmentPath }) => {
  const attachmentData = fs.readFileSync(attachmentPath).toString("base64");
  const fileName = path.basename(attachmentPath);

  const messageParts = [
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: multipart/mixed; boundary="boundary123"`,
    ``,
    `--boundary123`,
    `Content-Type: text/plain; charset="UTF-8"`,
    ``,
    content,
    ``,
    `--boundary123`,
    `Content-Type: application/octet-stream; name="${fileName}"`,
    `Content-Transfer-Encoding: base64`,
    `Content-Disposition: attachment; filename="${fileName}"`,
    ``,
    attachmentData,
    `--boundary123--`,
  ];

  const rawMessage = Buffer.from(messageParts.join("\r\n"))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: rawMessage,
    },
  });
};
