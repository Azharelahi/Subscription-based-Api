<h1 align="center">🔔 Subscription Automation API</h1>

<p align="center">
  <strong>A fully automated subscription reminder and notification system — built with Node.js, Express, and MongoDB.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green" />
  <img src="https://img.shields.io/badge/Express.js-Backend-blue" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen" />
  <img src="https://img.shields.io/badge/Status-Production Ready-success" />
</p>

---

## 📌 Overview

This API is designed to **automate subscription reminders, renewal alerts, and notification workflows** with zero manual involvement.

Once you define:

- **Start date**
- **Expiry / renewal date**
- **Reminder intervals** (e.g., <strong>14 / 7 / 3 / 1 days</strong> before expiry)

The system will:

- Calculate every reminder trigger
- Send scheduled emails/notifications automatically
- Reset schedules on renewal
- Track user + subscription lifecycle
- Handle authentication & authorization
- Enforce security and workflow validation

After setup, **you never touch it again** — the entire process runs autonomously.

---

## 🚀 Features

- ✔️ Fully automated reminder engine  
- ✔️ Custom reminder intervals  
- ✔️ Authentication & Authorization (JWT)  
- ✔️ User management  
- ✔️ Subscription creation, updates, renewals  
- ✔️ Workflow automation (Upstash / Scheduled Jobs)  
- ✔️ Email / notification triggers  
- ✔️ Error-handling middleware  
- ✔️ Secure configuration with environment separation  
- ✔️ Node.js + Express.js + MongoDB architecture  

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB / Mongoose**
- **JWT Authentication**
- **Nodemailer / Custom Notification Logic**
- **Upstash Workflow / Cron-like scheduling**
- **Arcjet Security Middleware**

---

## 📂 Project Structure

```bash
Subscription based API/
├─ .vscode/
│  └─ settings.json
├─ config/
│  ├─ arcjet.js
│  ├─ env.js
│  └─ upstash.js
├─ controllers/
│  ├─ auth.controller.js
│  ├─ subscription.controller.js
│  ├─ user.controller.js
│  └─ workflow.controller.js
├─ database/
│  └─ mongodb.js
├─ middlewares/
│  ├─ arcjet.middleware.js
│  ├─ auth.middleware.js
│  └─ error.middleware.js
├─ models/
│  ├─ subscription.model.js
│  └─ user.model.js
├─ routes/
│  ├─ auth.route.js
│  ├─ subscription.route.js
│  ├─ user.route.js
│  └─ workflow.route.js
├─ .env.development.local
├─ .env.production.local
├─ .gitignore
├─ app.js
├─ eslint.config.js
├─ package-lock.json
└─ package.json
