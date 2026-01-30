# Flipr Lead Page - Backend

This is a minimal backend for the Flipr placement assignment.

Features:
- REST API endpoints for projects, clients, contact form, and newsletter.
- Uses MongoDB Atlas if `MONGODB_URI` is set, otherwise falls back to an in-memory MongoDB for development (no external DB required).

Run locally:

1. Install dependencies:

```powershell
cd server
npm install
```

2a. To use your Atlas DB, set `MONGODB_URI` in `server/.env` and start:

```powershell
npm run dev
```

2b. If you do NOT have Atlas configured, the server will start with an in-memory database automatically.

API endpoints:
- `GET /api/projects` - list projects
- `GET /api/clients` - list clients
- `POST /api/contact` - submit contact form { fullName, email, mobile, city }
- `POST /api/newsletter` - subscribe { email }
- `GET /api/newsletter` - list subscribers (admin)

Notes:
- For production, provide a proper `MONGODB_URI` and disable the in-memory fallback.
