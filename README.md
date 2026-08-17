# 🐞 Enterprise Interactive Bug Tracker & Defect Management Dashboard

An ultra-fast, zero-dependency, single-file interactive QA Bug Tracker & Defect Triage System built with Vanilla JavaScript and CSS. Designed to serve as a lightweight, deployable, open-source alternative to Jira/Linear for software engineering teams, QA leads, and personal developer portfolios.

![Status](https://img.shields.io/badge/Status-Live--Production-success?style=for-the-badge&logo=github)
![Tech Stack](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

---

## 🌟 Key Features

* **⚡ Zero External Dependencies:** Single HTML page application. No frameworks, build steps, or server setups required.
* **🎯 Multi-Dimensional Filtering:**
  * **Severity Triage:** Critical, High, Medium, Low.
  * **Status Lifecycle:** Open, Fixed, Closed, Void.
  * **Module Categorization:** Authentication, Dashboard, API Gateway, User Management, Database, Payments & Billing, etc.
  * **Team Ownership:** Backend, Frontend, Fullstack.
* **🔍 Global Instant Search:** Real-time search across ticket IDs, descriptions, and module labels.
* **📊 Analytics & Resolution Progress:** Dynamic calculation of open vs. fixed defect metrics and team resolution percentages.
* **↩️ In-Memory Undo Stack:** Built-in history state allowing instant multi-step undo of accidental edits or status changes.
* **📋 One-Click Markdown Export:** Export full defect reports into clean GitHub-flavored Markdown tables for meeting syncs and stakeholder updates.
* **🚀 GitHub API Direct Auto-Push:** Push defect data changes directly to your GitHub repository using a personal access token (PAT).
* **🌐 GitHub Pages Hostable:** Deploy instantly on GitHub Pages for live interactive access.

---

## 🚀 Quick Start & Installation

### Option 1: Live Demo (GitHub Pages)
View the live interactive tracker dashboard directly in your web browser:
👉 **[https://gundro1.github.io/Bug_tracker/](https://gundro1.github.io/Bug_tracker/)**

---

### Option 2: Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Gundro1/Bug_tracker.git
   cd Bug_tracker
   ```

2. **Open the Dashboard:**
   Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari):
   ```bash
   # On Windows
   start index.html

   # On macOS
   open index.html
   ```

---

## 🛠️ How to Customize for Your Project

### 1. Change Default Bug List
Open `index.html` and edit the `DEFAULT_BUGS` array around line 270:
```javascript
const DEFAULT_BUGS = [
    { 
        ticket: "BUG-001", 
        module: "Authentication", 
        feature: "OAuth Flow", 
        description: "Token expires prematurely", 
        steps: "1. Log in\n2. Wait 15 mins", 
        expected: "Auto-refresh token", 
        actual: "401 Unauthorized", 
        severity: "High", 
        status: "Open", 
        team: "Backend" 
    }
];
```

### 2. Configure GitHub Repository Target
In `index.html`, set your GitHub repository details in `PROJECT_CONFIG`:
```javascript
const PROJECT_CONFIG = {
    name: "Enterprise Bug Tracker",
    subtitle: "Universal Defect Management",
    logo: "BT",
    repo: "YOUR_GITHUB_USERNAME/YOUR_REPO_NAME",
    file: "index.html",
    branch: "main"
};
```

---

## 📄 License

Distributed under the **MIT License**. Free for personal, academic, and commercial software projects.

---

**Developed & Maintained by:** [Gundro1](https://github.com/Gundro1)
