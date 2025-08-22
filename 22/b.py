from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    x = data.get('x', 0)
    y = data.get('y', 1)  # Default y to 1 to avoid division by zero

    if y == 0:
        return jsonify({'error': 'Division by zero is not allowed'}), 400

    result = x / y
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()