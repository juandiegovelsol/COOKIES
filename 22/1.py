# app.py - Flask API
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    result = data['x'] / data['y']
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()
