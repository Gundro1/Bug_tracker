# 🐞 Interactive Enterprise Bug Tracker Dashboard & Sync Pipeline

A high-performance, single-file interactive QA Bug Tracking Dashboard and automated synchronization pipeline engineered by **Azeez Test Lab**. 

Designed for QA Leads, Developers, and Product Managers to seamlessly log, triage, filter, and track defects across complex ERP applications (e.g. PrimBooks ERP) with zero external database dependencies.

![Bug Tracker Status](https://img.shields.io/badge/Status-Live--Production-success?style=for-the-badge&logo=github)
![QA Standard](https://img.shields.io/badge/QA%20Standard-Senior%20QA%20Lead-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)

---

## 🌟 Key Features

* **⚡ Zero-Dependency Dashboard (`index.html`):** Fully interactive single-page application built with Vanilla JS and CSS grid/flexbox. Instant client-side filtering without page reloads.
* **🎯 Multi-Dimensional Triage Filters:**
  * **Severity:** Blocker, Critical, High, Medium, Low, Trivial.
  * **Status:** Open, Under Investigation, Dev Patch Pending, Resolved, Retested & Closed.
  * **Module Breakdown:** Auth, CRM, Records, Production, Purchase, Inventory, Assets, Finance, Payroll, Settings.
* **🔍 Instant Global Search:** Real-time fuzzy search across Bug IDs, titles, descriptions, steps to reproduce, and expected/actual outputs.
* **📊 Analytics & KPI Counters:** Live calculation of total bugs, resolved ratio, critical open count, and module defect density.
* **🖼️ Interactive Evidence Viewer:** Clickable modal popups for viewing screenshot evidence and video proof attached to bug reports.
* **🔄 PowerShell Automated Data Pipeline (`update_bugs.ps1` & `PUSH.bat`):** Seamless CLI batch updater that injects newly captured bug records from `new_bugs.txt` into the tracker and pushes directly to GitHub.
* **🌐 GitHub Pages Ready:** Automatic zero-config hosting via `index.html`.

---

## 🚀 Quick Start & Installation

### Option 1: View Online (GitHub Pages)
Access the live interactive tracker directly in your browser:
👉 **[https://gundro1.github.io/Bug_tracker/](https://gundro1.github.io/Bug_tracker/)**

---

### Option 2: Local Usage & Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Gundro1/Bug_tracker.git
   cd Bug_tracker
   ```

2. **Open the Dashboard:**
   Double-click `index.html` or open it with any web browser (Chrome, Firefox, Edge, Safari):
   ```bash
   # On Windows PowerShell
   Start-Process index.html
   ```

---

## 🛠️ Automated Bug Update & GitHub Push Workflow

Updating defects and pushing them to your developers takes 5 seconds:

### Method A: Automated PowerShell Script (`update_bugs.ps1`)

1. Open `new_bugs.txt` and append your newly formatted bug data inside the JS data array.
2. Run `update_bugs.ps1` in PowerShell:
   ```powershell
   .\update_bugs.ps1
   ```
3. Commit and push to GitHub:
   ```bash
   git add index.html bug_tracker.html new_bugs.txt
   git commit -m "Update bug tracker records - 91+ verified tickets"
   git push origin main
   ```

### Method B: One-Click Windows Batch Pusher (`PUSH.bat`)

1. Copy your new bug JSON block to your Windows Clipboard (`Ctrl + C`).
2. Double-click **`PUSH.bat`**.
3. The script validates clipboard data, updates `index.html` & `bug_tracker.html`, prompts for an optional commit message, and automatically executes `git push origin main`!

---

## 📁 Repository File Architecture

```
Bug_tracker/
├── index.html                     # Live GitHub Pages & main dashboard entry point
├── bug_tracker.html               # Backup interactive dashboard file
├── update_bugs.ps1                # PowerShell script for injecting new bug data
├── PUSH.bat                       # One-click Windows clipboard-to-git push batch file
├── new_bugs.txt                   # Raw bug database store & staging records
├── PRIMBOOKS_QA_LEAD_FINAL_REPORT # Executive summary reports & PDF exports
└── README.md                      # Documentation & instructions
```

---

## 👤 Author & QA Lead

**Ogundero Azeez A.**  
*Senior QA Lead Engineer & Test Automation Specialist*  
*Azeez Test Lab*

---

*Licensed under the MIT License.*
