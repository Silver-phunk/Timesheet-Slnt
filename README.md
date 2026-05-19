# Silver Linings NT — Timesheet Portal

A simple, self-contained timesheet website for GitHub Pages.

## Features
- Employee login & registration
- Password reset (self-service + admin)
- Daily timesheet (Mon–Sun) with start/end times
- Interactive calendar with week navigation
- Admin dashboard with fortnightly hour totals
- Employee account management

## Deploy to GitHub Pages (Free)

1. Create a free account at **github.com**
2. Click **New Repository** → name it `timesheet` → set to **Public**
3. Upload all these files (index.html, timesheet.html, dashboard.html, js/auth.js)
4. Go to **Settings → Pages → Source → main branch → Save**
5. Your site will be live at: `https://YOUR-USERNAME.github.io/timesheet/`

## How to Use

### First-time Setup
1. Open the site and click **Register**
2. Create an **Admin** account first
3. Admin can then add employee accounts from the Dashboard

### For Employees
- Log in → fill in daily start/end times → click **Save Week**
- Use the calendar to jump between weeks

### For Admin
- Log in → go to **Dashboard**
- View **Fortnightly Hours** tab to see all staff totals
- Go to **Manage Employees** to add accounts or reset passwords

## Notes
- All data is stored in the browser (localStorage) — no server needed
- Data is per-device; employees must use the same browser/device each time
- For shared data across devices, a backend would be needed (e.g. Firebase — free tier)
