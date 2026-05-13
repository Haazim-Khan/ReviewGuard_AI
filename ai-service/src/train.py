import pandas as pd
import pickle

from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

# Models
from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier

# Metrics
from sklearn.metrics import accuracy_score

from src.preprocess import clean_text


# Load Dataset
df = pd.read_csv("fake_reviews.csv")

# Encode Labels
df['label'] = df['label'].map({'OR': 1, 'CG': 0})

# Clean Text
df['clean_review'] = df['text_'].apply(clean_text)

# Feature Extraction
vectorizer = TfidfVectorizer(max_features=5000)

X = vectorizer.fit_transform(df['clean_review'])

y = df['label']

# Train Test Split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# Multiple Models
models = {

    "Logistic Regression": LogisticRegression(max_iter=1000),

    "Naive Bayes": MultinomialNB(),

    "SVM": SVC(probability=True),

    "Random Forest": RandomForestClassifier()
}

best_model = None
best_accuracy = 0

# Train All Models
for name, model in models.items():

    print(f"\nTraining {name}...")

    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)

    print(f"{name} Accuracy: {accuracy}")

    # Save Best Model
    if accuracy > best_accuracy:

        best_accuracy = accuracy

        best_model = model


# Save Best Model
pickle.dump(best_model, open('model/model.pkl', 'wb'))

# Save Vectorizer
pickle.dump(vectorizer, open('model/vectorizer.pkl', 'wb'))

print("\nBest Model Saved Successfully")
print(f"Best Accuracy: {best_accuracy}")