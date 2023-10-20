from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Rota para renderizar a página HTML
@app.route("/")
def interacao():
    return render_template("interacao.html")

# Dados das opções e contagem de votos
opcoes = [
    {"id": 1, "nome": "Amei", "votos": 0},
    {"id": 2, "nome": "Não sei dizer", "votos": 0},
    {"id": 3, "nome": "Não sou muito fã", "votos": 0},
]

# Rota para receber votos via AJAX
@app.route("/votar", methods=["POST"])
def votar():
    data = request.get_json()
    opcao_id = data["opcao_id"]

    for opcao in opcoes:
        if opcao["id"] == opcao_id:
            opcao["votos"] += 1
            break

    return jsonify({"mensagem": "Voto registrado com sucesso!"})

# Função para buscar o contador de votos pelo ID
def buscar_contador_votos(id):
    for opcao in opcoes:
        if opcao["id"] == id:
            return opcao["votos"]
    return 0  # Retorna 0 se não encontrar

# Rota para retornar o contador de votos para o ID 1
@app.route("/contador_votos/<int:id>")
def contador_votos_id(id):
    contador = buscar_contador_votos(id)
    return jsonify({"contador_votos": contador})

if __name__ == "__main__":
    app.run(debug=True)