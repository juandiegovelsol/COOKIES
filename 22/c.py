from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    result = data.get('x', 0) / data.get('y', 1)  # Default to 0 for x and 1 for y to avoid division by zero
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()