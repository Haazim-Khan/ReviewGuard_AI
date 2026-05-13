import pickle
import numpy as np

from src.preprocess import clean_text

# Load Model
model = pickle.load(open('model/model.pkl', 'rb'))

# Load Vectorizer
vectorizer = pickle.load(open('model/vectorizer.pkl', 'rb'))


def get_top_words(vector, top_n=5):

    feature_names = vectorizer.get_feature_names_out()

    dense_vector = vector.toarray()[0]

    word_scores = list(zip(feature_names, dense_vector))

    sorted_words = sorted(
        word_scores,
        key=lambda x: x[1],
        reverse=True
    )

    important_words = []

    for word, score in sorted_words:

        if score > 0:

            important_words.append(word)

        if len(important_words) == top_n:

            break

    return important_words


def predict_review(review):

    cleaned = clean_text(review)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]

    probabilities = model.predict_proba(vector)[0]

    confidence = max(probabilities) * 100

    result = (
        "Genuine Review"
        if prediction == 1
        else "Fake Review"
    )

    important_words = get_top_words(vector)

    return {

        "prediction": result,

        "confidence": round(confidence, 2),

        "important_words": important_words
    }