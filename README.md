# 🎓 Linkcode Hub

**A Full-Stack Alumni Mentorship & Placement Experience Sharing Platform**

Linkcode Hub is a centralized, student-driven web platform designed to bridge the gap between current students and verified alumni. By facilitating transparent interview experience sharing, 1-on-1 mentorship, resume reviews, and Q&A forums, it equips students with the real-world insights needed to succeed in campus placements.

---

## ✨ Features

- **Role-Based Access Control (RBAC):** Distinct dashboards and permissions for Students, Alumni, and Admins.
- **Secure Authentication:** JWT (JSON Web Tokens) based login and registration system.
- **Placement Experiences:** Verified alumni can share detailed interview rounds, questions, and preparation tips.
- **Mentorship System:** Students can request 1-on-1 mentorship from specific alumni. Alumni can accept or decline requests.
- **Admin Verification:** Admins have a dedicated dashboard to verify alumni credentials before granting them platform access.
- **Modern UI/UX:** A highly responsive, premium user interface built with React and Tailwind CSS.

---

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)

**Backend:**
- Python & Django
- Django REST Framework (DRF)
- SimpleJWT (Authentication)
- SQLite (Development Database)

---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project locally on your machine.

### Prerequisites
- Node.js (v18+)
- Python (3.10+)
- Git

### 1. Clone the Repository
```bash
git clone [https://github.com/monikayedave2005/Linkcode-Hub.git](https://github.com/monikayedave2005/Linkcode-Hub.git)
cd Linkcode-Hub
```

### 2. Backend Setup (Django)
Open a new terminal and navigate to the backend folder:
```bash
cd backend
```

Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Setup the Database and create an Admin account:
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
```

Start the Django server:
```bash
python manage.py runserver
```
The backend API will run on `http://127.0.0.1:8000/`

### 3. Frontend Setup (React)
Open a new terminal window and navigate to the frontend folder:
```bash
cd frontend
```

Install dependencies and start the Vite server:
```bash
npm install
npm run dev
```
The frontend will run on `http://localhost:5173/`

---

## 📂 Project Structure

```text
Linkcode-Hub/
│
├── backend/               # Django REST API
│   ├── backend/           # Main Django project settings
│   ├── core/              # Auth, Custom User Model, Admin Verification
│   ├── experiences/       # Placement Experience models and APIs
│   ├── mentorship/        # Mentorship Request models and APIs
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/              # React + Vite Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/    # Reusable UI and Page components
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── tailwind.config.js
│
└── README.md
```

---

## 🔐 User Roles & Workflow

1. **Student:** Registers via the portal. Can browse experiences, view company insights, and send mentorship requests to alumni.
2. **Alumni:** Registers with corporate email. Must be approved by an Admin. Once verified, can share experiences, accept mentorship requests, and review resumes.
3. **Admin:** Uses the Django backend (and a custom Admin UI) to verify pending alumni accounts, moderate content, and monitor platform health.

---

## 👥 Contributors

- **Monika Yedave** – Frontend Development & UI/UX (GitHub: [@monikayedave2005](https://github.com/monikayedave2005))
- **Vaishnavi Chavan** – Backend Development & API Integration (GitHub: [@VaishnaviChavan28](https://github.com/VaishnaviChavan28))

*Developed as a capstone project for the Django Batch.*