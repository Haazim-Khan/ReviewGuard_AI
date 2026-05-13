from flask import Flask, request, jsonify

from src.predict import predict_review

app = Flask(__name__)


@app.route('/predict', methods=['POST'])

def predict():

    data = request.json

    review = data['review']

    result = predict_review(review)

    return jsonify(result)


if __name__ == '__main__':

    app.run(debug=True)