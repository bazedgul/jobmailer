# 📩 Job Mailer Extension

A Chrome extension + backend app that allows users to send job application emails with a resume attachment directly from a browser popup — powered by React, Express, and Gmail OAuth2 API.

---

## 📦 Features

- 🔐 OAuth2-secured Gmail API integration
- 📎 Resume attachment via file upload
- 📨 Send email directly to recruiter
- 💡 Chrome Extension popup UI (Vite + React)
- 🧪 Tested with Postman and in-browser

---

## 🧰 Tech Stack

| Frontend (Extension) | Backend (API Server) |
|----------------------|----------------------|
| React + Vite         | Express.js           |
| TailwindCSS (optional) | Gmail API (OAuth2)  |
| Axios                | Multer               |

---

## 📁 Project Structure

jobmailer/
├── Backend/ # Express server with email sending logic
│ ├── controllers/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ ├── uploads/ # Temp resume storage
│ └── server.js
│
├── Extension/ # Chrome Extension (React + Vite)
│ ├── public/
│ ├── src/
│ │ ├── Popup.jsx
│ │ └── ...
│ ├── manifest.json
│ └── vite.config.js
│
├── .gitignore
└── README.md


---

## 🚀 Getting Started

### 🔧 Backend Setup

1. `cd Backend`
2. Install dependencies:
   ```bash
   npm install


## Create .env:

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
REDIRECT_URI=https://developers.google.com/oauthplayground
REFRESH_TOKEN=...

$ Start server: 
npm start

✅ You should see Server running on port 5000

🧪 Test Backend with Postman
POST http://localhost:5000/api/send
Form-Data:

Key	           Type	              Value
recruiterEmail text	         test@example.com
subject	       text	         Application for MERN Role
content	       text	         Hello, please find my CV.
resume	       file	         Attach .pdf or .docx


🌐 Extension Setup
cd Extension
Install:
npm install

Build:
npm run build


Go to chrome://extensions/
Enable Developer Mode
Click Load Unpacked
Select Extension/dist folder


🛡️ Gmail OAuth2 Setup (One-time)
Go to: Google Cloud Console

Create OAuth 2.0 credentials


Add the following scope:

https://mail.google.com/
Use OAuth Playground to:

Exchange client id/secret for refresh token

Copy into your .env

✅ Sample Email Sent
From: Your Gmail (OAuth authorized)

To: Recruiter's email

Subject: Custom text from extension

Body: Rich text input

Attachment: Resume file (.pdf, .doc, .docx)

🤝 Contributions
Feel free to fork, raise issues, or submit PRs!

📄 License
MIT © 2025 Bazed Gul

---

## 🔚 Final Steps

1. Put both files:
   - `.gitignore` → in `jobmailer/`
   - `README.md` → in `jobmailer/`

2. Then run in terminal:

```bas
git init
git add .
git commit -m "🎉 Initial commit - Job Mailer with extension + backend"
git remote add origin https://github.com/bazedgul/jobmailer.git
git push -u origin main