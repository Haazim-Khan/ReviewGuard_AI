# 🛡️ ReviewGuard AI

## Full Stack Explainable AI-Based Fake Review Detection Platform

ReviewGuard AI is a Full Stack AI-powered web application that detects fake product reviews using Natural Language Processing (NLP) and Machine Learning techniques.

The system allows users to:

* Register and login
* Submit product reviews
* Detect fake/genuine reviews using AI
* View confidence scores
* Understand AI explanations using TF-IDF influential terms
* Access dashboard analytics
* View review history
* Manage reviews through an admin panel

---

# 🚀 Features

## 🔐 Authentication System

* User Registration
* User Login
* Password Hashing using bcrypt

---

## 🤖 AI-Powered Review Detection

* NLP preprocessing
* TF-IDF vectorization
* SVC Machine Learning model
* Confidence score generation
* Explainable AI predictions

---

## 📊 Dashboard Analytics

* Fake vs Genuine review statistics
* Chart.js analytics visualization
* Stored review insights

---

## 📜 Review History

* View previously analyzed reviews
* Confidence score tracking
* Timestamp records

---

## 🛠️ Admin Panel

* View all analyzed reviews
* Delete suspicious reviews
* Monitor platform activity

---

# 🏗️ Tech Stack

## Frontend

* EJS
* Bootstrap 5
* Chart.js

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## AI Service

* Python
* Flask
* Scikit-learn
* NLTK

---

# 🧠 Machine Learning Workflow

## NLP Preprocessing

* Lowercase conversion
* Special character removal
* Stopword removal

## Feature Extraction

* TF-IDF Vectorization

## Machine Learning Model

* Support Vector Classifier (SVC)
* Probability-based prediction

## Explainable AI

* Top TF-IDF influential terms extraction

---

# 📂 Project Structure

```text
ReviewGuard_AI/
│
├── .gitignore
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── views/
│   ├── public/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── ai-service/
│   ├── venv/
│   ├── model/
│   ├── src/
│   ├── app.py
│   ├── requirements.txt
│   └── fake_reviews.csv
│
└── README.md
```

---

# ⚙️ Installation Guide

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/ReviewGuard_AI.git
```

---

## 2️⃣ Setup Backend

```bash
cd ReviewGuard_AI/backend
npm install
```

---

## 3️⃣ Setup AI Service

```bash
cd ../ai-service
python -m venv venv
```

---

## 4️⃣ Activate Virtual Environment

### Windows

```bash
venv\Scripts\activate
```

---

## 5️⃣ Install Python Dependencies

```bash
pip install -r requirements.txt
```

---

# ▶️ Running the Project

## TERMINAL 1 — Run Flask AI Server

```bash
cd ai-service
venv\Scripts\activate
python app.py
```

Flask server runs on:

```text
http://127.0.0.1:5000
```

---

## TERMINAL 2 — Run Express Server

```bash
cd backend
node server.js
```

Express server runs on:

```text
http://localhost:3000
```

---

# 🧩 System Architecture

```text
Frontend (EJS + Bootstrap)
            ↓
Express.js Backend
            ↓
MongoDB Database
            ↓
Python Flask AI Service
            ↓
TF-IDF + SVC Machine Learning Model
```

---

# 🔄 Project Workflow

1. User logs into the system
2. User enters product name, rating, and review
3. Express backend receives request
4. Backend sends review text to Flask AI service
5. Flask performs:

   * preprocessing
   * TF-IDF transformation
   * SVC prediction
6. AI service returns:

   * prediction
   * confidence score
   * influential terms
7. Express stores results in MongoDB
8. Results displayed on frontend dashboard

---

# 📌 Example Prediction

## Input Review

```text
This is the best product! Must buy!
```

## Output

```text
Prediction: Fake Review
Confidence: 89%
Top Influential Terms:
- best
- product
- buy
```

---

# 🎯 Future Scope

* Deep Learning Integration
* Transformer-based NLP Models
* Real-time API Deployment
* Cloud Deployment
* Multi-language Review Detection
* Advanced Explainable AI

---

# 👨‍💻 Author

Haazim
M.Tech CSE
Lovely Professional Un
