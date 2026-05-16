````md id="p7m2q5"
# Vehicle Maintenance Scheduler

## Overview

This project is a backend-based Vehicle Maintenance Scheduler developed using Node.js and Express.js. The system fetches depot and vehicle maintenance task data from protected APIs, applies scheduling optimization logic, and generates optimized maintenance schedules based on mechanic hour constraints and task impact.

---

## Features

- Fetch depot data from external API
- Fetch vehicle maintenance tasks
- Optimize maintenance scheduling
- REST API implementation
- Logging middleware integration
- Modular backend architecture
- Notification system design documentation

---

## Tech Stack

- Node.js
- Express.js
- Axios
- Nodemon

---

## Project Structure

```bash
vehicle_scheduling/
│
├── logging_middleware/
│   └── logger.js
│
├── src/
│   ├── controller/
│   ├── route/
│   ├── service/
│   └── server.js
│
├── notification_system_design.md
├── package.json
├── .gitignore
└── .env
```

---

## API Endpoint

### Get Optimized Schedule

```http
GET /schedule
```

### Sample Response

```json
[
  {
    "depotId": 1,
    "selectedTasks": [],
    "totalHours": 6,
    "totalImpact": 20
  }
]
```

---

## Installation

```bash
npm install
```

---

## Run Project

```bash
npm run dev
```

Server runs on:

```bash
http://localhost:5000
```

---

## Environment Variables

Create `.env` file:

```env
CLIENT_ID=your_client_id
CLIENT_SECRET=your_client_secret
ACCESS_TOKEN=your_access_token
```Output
---
## Output
<img width="1600" height="844" alt="index" src="https://github.com/user-attachments/assets/f42c6dd2-9b3c-4558-9223-9709a7179e02" />
<img width="1600" height="852" alt="PostMan" src="https://github.com/user-attachments/assets/46801d1b-e29e-45d9-bad8-f960c6241c04" />


## Author

Sadiya
````
