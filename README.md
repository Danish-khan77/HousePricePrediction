# 🏠 House Price Prediction Web Application

A Full Stack Machine Learning web application that predicts the estimated selling price of residential houses using a trained **Linear Regression** model.

This project demonstrates an end-to-end Machine Learning deployment pipeline by integrating **React**, **Node.js**, **Express.js**, **Flask**, and **Scikit-learn** into a single application.

---

# 🚀 Features

- 📈 Predict house prices using Machine Learning
- ⚛️ Modern React Frontend
- 🎨 Responsive Material UI Interface
- ⚡ Express.js Backend
- 🐍 Flask REST API
- 🤖 Scikit-learn Linear Regression Model
- 🔄 End-to-End ML Deployment
- 📦 REST API Communication
- 🌐 Full Stack Architecture

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Material UI
- Axios

## Backend

- Node.js
- Express.js

## Machine Learning

- Python
- Flask
- Pandas
- NumPy
- Scikit-learn
- Joblib

---

# 📁 Project Structure

```
HousePricePrediction
│
├── client/          # React Frontend
├── server/          # Express Backend
├── ml-api/          # Flask API + ML Model
├── README.md
└── LICENSE
```

---

# ⚙️ Application Workflow

```
               User
                 │
                 ▼
      React Frontend (Vite)
                 │
                 ▼
      Express.js Backend API
                 │
                 ▼
        Flask Machine Learning API
                 │
                 ▼
      Linear Regression Model (.pkl)
                 │
                 ▼
      Predicted House Selling Price
```

---

# 📊 Machine Learning Model

## Algorithm

- Linear Regression

---

## Libraries Used

- Scikit-learn
- Pandas
- NumPy
- Joblib

---

## Saved Model Files

### Trained Model

```
house_price_model.pkl
```

### Standard Scaler

```
scaler.pkl
```

### Feature Order

```
feature_names.pkl
```

These files are loaded by the Flask API during prediction.

---

# 📝 Model Input Features

The trained model accepts **37 input features**.

### Numerical Features (7)

| Feature | Description | Expected Range |
|----------|-------------|----------------|
| MSSubClass | Building Class | 20–190 |
| LotArea | Lot Area (Square Feet) | 1000 – 100000+ |
| OverallCond | Overall House Condition | 1 – 10 |
| YearBuilt | Construction Year | 1872 – 2010 |
| YearRemodAdd | Remodel Year | 1950 – 2010 |
| BsmtFinSF2 | Finished Basement Area Type 2 | 0 – 1500+ |
| TotalBsmtSF | Total Basement Area | 0 – 6000+ |

---

## One-Hot Encoded Features

The following categorical features were converted into binary (0/1) values using **One-Hot Encoding** before training.

---

### MSZoning

General zoning classification.

Possible encoded columns

- MSZoning_C (all)
- MSZoning_FV
- MSZoning_RH
- MSZoning_RL
- MSZoning_RM

Input

```
0 or 1
```

Only **one** column should normally be **1**.

---

### LotConfig

Lot configuration.

Possible encoded columns

- LotConfig_Corner
- LotConfig_CulDSac
- LotConfig_FR2
- LotConfig_FR3
- LotConfig_Inside

Input

```
0 or 1
```

Only **one** column should normally be **1**.

---

### BldgType

Building type.

Possible encoded columns

- BldgType_1Fam
- BldgType_2fmCon
- BldgType_Duplex
- BldgType_Twnhs
- BldgType_TwnhsE

Input

```
0 or 1
```

Only **one** column should normally be **1**.

---

### Exterior1st

Primary exterior covering material.

Possible encoded columns

- Exterior1st_AsbShng
- Exterior1st_AsphShn
- Exterior1st_BrkComm
- Exterior1st_BrkFace
- Exterior1st_CBlock
- Exterior1st_CemntBd
- Exterior1st_HdBoard
- Exterior1st_ImStucc
- Exterior1st_MetalSd
- Exterior1st_Plywood
- Exterior1st_Stone
- Exterior1st_Stucco
- Exterior1st_VinylSd
- Exterior1st_Wd Sdng
- Exterior1st_WdShing

Input

```
0 or 1
```

Only **one** exterior material should normally be selected.

---

# 🎯 Output

The application predicts

```
Estimated Selling Price (USD)
```

Example

```
Predicted House Price

$284,337.93
```

---

# ▶️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/Danish-khan77/HousePricePrediction.git
```

Move into the project directory.

```bash
cd HousePricePrediction
```

---

## 2️⃣ Install Frontend Dependencies

```bash
cd client
npm install
npm run dev
```

The React application will start on:

```
http://localhost:5173
```

---

## 3️⃣ Install Backend Dependencies

```bash
cd ../server
npm install
npm run dev
```

The Express server will start on:

```
http://localhost:5000
```

---

## 4️⃣ Setup Flask API

Navigate to the ML API folder.

```bash
cd ../ml-api
```

Create Virtual Environment

```bash
python -m venv venv
```

Activate Virtual Environment

Windows

```bash
venv\Scripts\activate
```

Install Required Libraries

```bash
pip install -r requirements.txt
```

Run Flask Server

```bash
python app.py
```

---

# 📦 API Endpoint

```
POST /api/predict
```

The Express backend forwards prediction requests to the Flask API, which loads the trained Linear Regression model and returns the predicted selling price.

---

# 📤 Sample Request

```json
{
  "MSSubClass": 60,
  "LotArea": 8450,
  "OverallCond": 5,
  "YearBuilt": 2003,
  "YearRemodAdd": 2003,
  "BsmtFinSF2": 0,
  "TotalBsmtSF": 856,

  "MSZoning_C (all)": 0,
  "MSZoning_FV": 0,
  "MSZoning_RH": 0,
  "MSZoning_RL": 1,
  "MSZoning_RM": 0,

  "LotConfig_Corner": 0,
  "LotConfig_CulDSac": 0,
  "LotConfig_FR2": 0,
  "LotConfig_FR3": 0,
  "LotConfig_Inside": 1,

  "BldgType_1Fam": 1,
  "BldgType_2fmCon": 0,
  "BldgType_Duplex": 0,
  "BldgType_Twnhs": 0,
  "BldgType_TwnhsE": 0,

  "Exterior1st_AsbShng": 0,
  "Exterior1st_AsphShn": 0,
  "Exterior1st_BrkComm": 0,
  "Exterior1st_BrkFace": 0,
  "Exterior1st_CBlock": 0,
  "Exterior1st_CemntBd": 0,
  "Exterior1st_HdBoard": 0,
  "Exterior1st_ImStucc": 0,
  "Exterior1st_MetalSd": 0,
  "Exterior1st_Plywood": 0,
  "Exterior1st_Stone": 0,
  "Exterior1st_Stucco": 0,
  "Exterior1st_VinylSd": 1,
  "Exterior1st_Wd Sdng": 0,
  "Exterior1st_WdShing": 0
}
```

---

# 📥 Sample Response

```json
{
  "success": true,
  "predicted_price": 284337.93
}
```

---

# 📌 Project Highlights

- End-to-End Machine Learning Deployment
- Full Stack MERN + Flask Architecture
- REST API Communication
- Linear Regression Model
- Feature Scaling
- One-Hot Encoding
- Model Serialization using Joblib
- Responsive React User Interface

---

# 🔍 Project Workflow

```
Dataset
   │
   ▼
Data Cleaning
   │
   ▼
Missing Value Handling
   │
   ▼
Feature Engineering
   │
   ▼
One-Hot Encoding
   │
   ▼
Feature Scaling
   │
   ▼
Train-Test Split
   │
   ▼
Linear Regression Training
   │
   ▼
Model Evaluation
   │
   ▼
Save Model (.pkl)
   │
   ▼
Flask API
   │
   ▼
Express Backend
   │
   ▼
React Frontend
   │
   ▼
Prediction Result
```

---

# 📊 Model Evaluation

The model was evaluated using the following regression metrics.

| Metric | Purpose |
|---------|----------|
| MAE | Mean Absolute Error |
| MSE | Mean Squared Error |
| RMSE | Root Mean Squared Error |
| R² Score | Measures goodness of fit |

These metrics were used to assess the prediction performance of the Linear Regression model.

---

# 📚 Learning Outcomes

Through this project, the following concepts were implemented and practiced:

- Data Preprocessing
- Handling Missing Values
- One-Hot Encoding
- Feature Scaling
- Linear Regression
- Model Serialization
- REST API Development
- Flask API Integration
- Express Middleware
- React Frontend Development
- Client-Server Communication
- Full Stack Machine Learning Deployment

---

# 👨‍💻 Author

## Danish Khan

**B.Tech Computer Science & Engineering (Blockchain Technology)**

Samrat Ashok Technological Institute (SATI), Vidisha

### GitHub

https://github.com/Danish-khan77

---

⭐ If you found this project useful, consider giving the repository a star.