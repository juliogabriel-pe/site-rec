// seu-arquivo-de-interacao.js

// Quando o documento HTML estiver completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    const opcoes = document.querySelectorAll("#opcoes div");

    // Adicione um ouvinte de eventos para cada opção
    opcoes.forEach(function (opcao) {
        opcao.addEventListener("click", function () {
            const emocao = opcao.querySelector("h6").textContent;
            alert(`Você escolheu: ${emocao}`);
        });
    });
});