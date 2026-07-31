from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

# Create Flask application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing
CORS(app)

# Load saved files
model = joblib.load("house_price_model.pkl")
scaler = joblib.load("scaler.pkl")
feature_names = joblib.load("feature_names.pkl")


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "House Price Prediction API is running."
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Receive JSON data
        data = request.get_json()

        if data is None:
            return jsonify({
                "success": False,
                "message": "No JSON data received."
            }), 400

        # Check all required features
        missing_features = [
            feature for feature in feature_names
            if feature not in data
        ]

        if missing_features:
            return jsonify({
                "success": False,
                "message": "Missing required features.",
                "missing_features": missing_features
            }), 400

        # Arrange features in training order
        input_data = []

        for feature in feature_names:
            input_data.append(float(data[feature]))

        # Convert to NumPy array
        input_array = np.array([input_data])

        # Scale input
        scaled_input = scaler.transform(input_array)

        # Predict
        prediction = model.predict(scaled_input)

        return jsonify({
            "success": True,
            "predicted_price": round(float(prediction[0]), 2)
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)