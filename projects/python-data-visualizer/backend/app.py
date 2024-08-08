from flask import Flask, send_from_directory, jsonify

app = Flask(__name__, static_folder='static')

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {
        "labels": ["January", "February", "March", "April", "May"],
        "values": [10, 20, 30, 40, 50]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
    