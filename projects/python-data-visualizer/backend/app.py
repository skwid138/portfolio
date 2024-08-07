from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Data Visualization Dashboard API"})

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "labels": ["January", "February", "March", "April", "May"],
        "values": [10, 20, 30, 40, 50]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    