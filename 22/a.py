from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    x = data['x']
    y = data['y']

    if y == 0:
        return jsonify({"result": "Error: Division by zero"}), 400

    result = x / y
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run()