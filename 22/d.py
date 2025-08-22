from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    if data['y'] == 0:
        return jsonify({'error': 'Division by zero is not allowed'}), 400
    result = data['x'] / data['y']
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()