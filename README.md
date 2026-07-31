# 🏠 House Price Prediction Web Application

A Full Stack Machine Learning web application that predicts the estimated selling price of a house using a trained **Linear Regression** model.

The application combines **React**, **Node.js**, **Express**, **Flask**, and **Scikit-learn** to demonstrate an end-to-end Machine Learning deployment pipeline.

---

# 🚀 Features

- Modern React User Interface
- Machine Learning based Price Prediction
- Flask REST API for Model Inference
- Express Backend as Middleware
- Responsive UI using Material UI
- Pre-trained Linear Regression Model
- Fast Prediction Response
- End-to-End Full Stack Architecture

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
- Scikit-learn
- Pandas
- NumPy
- Joblib

---

# 📁 Project Structure

```
HousePricePrediction
│
├── client/          # React Frontend
├── server/          # Express Backend
├── ml-api/          # Flask + ML Model
├── README.md
└── LICENSE
```

---

# ⚙️ How the Project Works

```
User
   │
   ▼
React Frontend
   │
   ▼
Express Server
   │
   ▼
Flask API
   │
   ▼
Machine Learning Model
   │
   ▼
Predicted House Price
```

---

# 📊 Machine Learning Model

Algorithm Used

- Linear Regression

Libraries

- Scikit-learn
- Pandas
- NumPy
- Joblib

The trained model is stored as

```
house_price_model.pkl
```

The preprocessing scaler is stored as

```
scaler.pkl
```

The expected feature order is stored as

```
feature_names.pkl
```

---

# 📝 Input Features

The model predicts the selling price using the following property details.

| Feature | Description | Expected Value |
|----------|-------------|----------------|
| MSSubClass | Type of dwelling represented as a numerical building class | Common values: 20, 30, 50, 60, 70, 120, 160, 180 |
| LotArea | Total lot area in square feet | Positive value (typically **1,000 – 100,000+**) |
| OverallCond | Overall condition of the house | **1 – 10** |
| YearBuilt | Original construction year | Approximately **1872 – 2010** |
| YearRemodAdd | Year of remodeling/addition | Approximately **1950 – 2010** |
| BsmtFinSF2 | Finished basement area (Type 2) | **0 – 1500+ sq ft** |
| TotalBsmtSF | Total basement area | **0 – 6000+ sq ft** |

---

## One-Hot Encoded Features

Some categorical variables were converted into binary (0/1) values during preprocessing.

### MSZoning

General zoning classification.

Possible encoded columns

- MSZoning_FV
- MSZoning_RH
- MSZoning_RL
- MSZoning_RM

Input Value

```
0 or 1
```

Only **one** of these should normally be **1**, and the others should be **0**.

---

### LotConfig

Lot configuration.

Possible values

- Inside
- Cul-De-Sac
- Frontage Road (FR2)
- Frontage Road (FR3)

Encoded as

- LotConfig_Inside
- LotConfig_CulDSac
- LotConfig_FR2
- LotConfig_FR3

Input Value

```
0 or 1
```

---

### BldgType

Building type.

Possible values

- 1 Family
- 2 Family
- Duplex
- Townhouse
- Townhouse End Unit

Encoded columns

- BldgType_2fmCon
- BldgType_Duplex
- BldgType_Twnhs
- BldgType_TwnhsE

Input Value

```
0 or 1
```

---

### Exterior1st

Primary exterior covering material.

Possible encoded columns

- AsphShn
- BrkComm
- BrkFace
- CBlock
- CemntBd
- HdBoard
- ImStucc
- MetalSd
- Plywood
- Stone
- Stucco
- VinylSd
- Wd Sdng
- WdShing

Input Value

```
0 or 1
```

Only one exterior material should generally be selected.

---

# 🎯 Output

The application predicts

```
Estimated Selling Price (USD)
```

Example

```
Predicted House Price

$197,978
```

---

# ▶️ Installation

## Clone Repository

```bash
git clone https://github.com/Danish-khan77/HousePricePrediction.git
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

---

## Flask API

```bash
cd ml-api

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

---

# 📦 API Endpoint

```
POST /api/predict
```

Example Request

```json
{
  "LotArea": 8450,
  "OverallCond": 5,
  "YearBuilt": 2003,
  "YearRemodAdd": 2003,
  "TotalBsmtSF": 856
}
```

Example Response

```json
{
    "success": true,
    "predicted_price": 197978.29
}
```

---

# 👨‍💻 Author

**Danish Khan**

B.Tech Computer Science Engineering (Blockchain)

Samrat Ashok Technological Institute (SATI)

GitHub

https://github.com/Danish-khan77