# 📖 Quote API

A simple RESTful API built with **Express.js** that returns random inspirational quotes.  
Includes **IP-based rate limiting** to prevent abuse and **Swagger/OpenAPI docs** for easy testing.

---

## 🚀 Features
- **GET /api/quote** → Returns a random inspirational quote.
- **Rate Limiting** → Each IP can make **5 requests per minute**.  
  - If exceeded → returns `429 Too Many Requests` with retry info.
- **Swagger UI Docs** → Interactive API documentation at `/api-docs`.

---

## ⚙️ Tech Stack
- **Node.js** + **Express.js**
- **express-rate-limit** (rate limiting)
- **swagger-jsdoc** + **swagger-ui-express** (API documentation)

---

## 📂 Project Structure
```
├── src
│   ├── data
│   │   └── quotes.js   
│   ├── middlewares
│   │   └── rateLimiter.js
|   |-- routes
|   |   |-- quoteRoutes.js
│   ├── swagger.js           # Swagger setup
├── package.json
|-- serrver.js
└── README.md
```

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **express-rate-limit**
- **swagger-jsdoc**
- **swagger-ui-express**

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Nitishkumar8521/Kuppismart-Solutions-Pvt.-Ltd.git
cd quote-api
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the server
```bash
npm run dev
```

Server runs on:  
```
http://localhost:3000
```

---

## 📌 API Endpoints

### ✅ Get Random Quote
**Request**
```bash
curl http://localhost:3000/api/quote
```

**Response**
```json
{
  "quote": "The only way to do great work is to love what you do. - Steve Jobs"
}
```

---

### ❌ Rate Limit Exceeded
If you exceed **5 requests per minute per IP**:
```json
{
  "error": "Rate limit exceeded. Try again in 60 seconds."
}
```

---

## 📖 Swagger API Docs
Visit:
```
http://localhost:3000/api-docs
```

- View all endpoints
- Read request/response details
- Try the API directly in browser

---

## 🖼️ Screenshots

### Swagger UI
![Swagger UI Screenshot](https://github.com/Nitishkumar8521/Kuppismart-Solutions-Pvt.-Ltd/blob/main/swagger%20UI.jpg?raw=true)

### Quote API Response
![Quote API Screenshot](https://github.com/Nitishkumar8521/Kuppismart-Solutions-Pvt.-Ltd/blob/main/api.jpg?raw=true)

---

## 📝 Assumptions & Design Decisions
- Used **in-memory rate limiting** (`express-rate-limit`) → No DB required.
- Rate limit applied globally (per IP).
- Quotes stored in memory (simple array).
- Added Swagger for better API exploration.

---

## 🧪 Example Test Commands

### Get Quote
```bash
curl http://localhost:3000/api/quote
```

### View Swagger Docs
Open browser:
```
http://localhost:3000/api-docs
```

---

