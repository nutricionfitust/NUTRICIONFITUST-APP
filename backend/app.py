from flask import Flask, request, jsonify

app = Flask(__name__)

# USUARIOS Y CONTRASEÑAS (en producción usa hashes y base de datos)
USERS = {
    "agustina": "agustina2025",
    "camila": "camila2025",
    "sofia": "sofia2025",
    "francisco": "francisco2025",
    "admin": "nutricionfitust429015"
}

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if USERS.get(username) == password:
        return jsonify({"success": True})
    return jsonify({"success": False}), 401

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)