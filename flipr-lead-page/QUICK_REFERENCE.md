# 🎯 QUICK REFERENCE CARD

## ⚡ QUICK START (Copy-Paste Ready)

### Terminal 1 - Backend:
```powershell
cd "c:\Users\uppub\Downloads\4th year full stack Assets\flipr-lead-page\server"
npm run dev
```

### Terminal 2 - Frontend:
```powershell
cd "c:\Users\uppub\Downloads\4th year full stack Assets\flipr-lead-page\client"
npm run dev
```

---

## 🌐 URLS TO ACCESS

| Purpose | URL |
|---------|-----|
| **Website** | http://localhost:5173/ |
| **Admin Panel** | http://localhost:5173/admin |
| **Backend API** | http://localhost:5000/api |

---

## ✅ VERIFY EVERYTHING IS RUNNING

### Backend Terminal Should Show:
```
✅ MongoDB connected
Server running on port 5000
```

### Frontend Terminal Should Show:
```
ROLLDOWN-VITE v7.2.5 ready in XXX ms
Local: http://localhost:5173/
```

---

## 🧪 QUICK TEST

1. Go to http://localhost:5173/
2. Fill contact form
3. Click Submit
4. See "✅ Message sent successfully!"
5. Go to http://localhost:5173/admin
6. See your contact in the table
7. ✅ Done!

---

## 📊 DATA SAVED

### Contact Form Saves:
- Full Name ✓
- Email ✓
- Mobile Number ✓
- City ✓

### Newsletter Saves:
- Email ✓

Both with automatic timestamps!

---

## 🔍 DEBUG WITH F12

Open **Developer Tools** (F12) → **Console** tab

**On Landing Page:**
```
📤 Submitting contact form: {...}
Response status: 201
✅ Contact saved: {...}
```

**On Admin Panel:**
```
🔄 Fetching contacts from: http://localhost:5000/api/contact
✅ Contacts data received: [...]
```

---

## 🚨 QUICK FIXES

| Problem | Solution |
|---------|----------|
| Pages won't load | Restart both servers |
| Data not appearing | Submit form first, then check admin panel |
| Backend not responding | Check if running on port 5000 |
| Frontend errors | Press F12 and check console |

---

## 📁 IMPORTANT FOLDERS

| Folder | Purpose |
|--------|---------|
| `server/` | Backend code |
| `client/` | Frontend code |
| `client/src/pages/` | Landing page + Admin panel |
| `server/models/` | Database schemas |
| `server/routes/` | API endpoints |

---

## 💾 DATABASE

- **Type:** MongoDB (in-memory)
- **Collections:**
  - Contacts - from contact form
  - Newsletters - from newsletter signup
  - Projects - sample data
  - Clients - sample testimonials

**Data resets when server restarts** (expected for in-memory DB)

---

## 🎨 FEATURES AT A GLANCE

- ✅ Contact form with 4 fields
- ✅ Newsletter signup
- ✅ Admin panel with statistics
- ✅ View all submissions
- ✅ Delete functionality
- ✅ Auto-refresh (5 sec)
- ✅ Proper error messages
- ✅ Professional styling
- ✅ Responsive design

---

## 📖 DOCUMENTATION

| File | Purpose |
|------|---------|
| `PROJECT_GUIDE.md` | Complete setup guide |
| `DEBUGGING_GUIDE.md` | Troubleshooting steps |
| `FINAL_GUIDE.md` | Full reference |
| `EXPECTED_OUTPUT.md` | What to expect |
| `PROJECT_COMPLETE_SUMMARY.md` | Overview |

---

## 🔗 API ENDPOINTS

```
GET  /api/contact           → Get all contacts
POST /api/contact           → Submit contact form
DEL  /api/contact/:id       → Delete contact

GET  /api/newsletter        → Get all subscribers
POST /api/newsletter        → Subscribe
DEL  /api/newsletter/:id    → Unsubscribe
```

---

## ✨ WHAT'S WORKING

✅ Frontend displays correctly
✅ Forms submit successfully
✅ Backend receives data
✅ Data saved to database
✅ Admin panel shows data
✅ Delete works
✅ Auto-refresh works
✅ Error handling works
✅ Logging works
✅ Everything integrated

---

## 🎯 NEXT STEPS

1. Test the forms (see QUICK TEST above)
2. Verify admin panel displays data
3. Try delete functionality
4. Check logs (F12 → Console)
5. Review documentation
6. Deploy when ready

---

## 📞 NEED HELP?

1. Check console logs (F12)
2. Read DEBUGGING_GUIDE.md
3. Restart servers
4. Clear browser cache (Ctrl+Shift+Delete)
5. Hard refresh (Ctrl+F5)

---

## 🎉 YOU'RE ALL SET!

Both servers running ✅
Database connected ✅
Frontend ready ✅
Admin panel working ✅

**Start testing now!** 🚀

---

**Version 1.0 | January 30, 2026**
