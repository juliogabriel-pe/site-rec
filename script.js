document.addEventListener('DOMContentLoaded', function () {
    // Dados das equipes
    const equipeAds = [
        { nome: 'Membro 1', imagem: 'https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg' },
        { nome: 'Membro 2', imagem: 'https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg' },
        { nome: 'Membro 3', imagem: 'https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg' },
        { nome: 'Membro 4', imagem: 'https://img.myloview.com.br/adesivos/avatar-cabeca-perfil-silhueta-chamada-centro-masculino-foto-700-151766550.jpg' }
    ];

    // Função para criar membros da equipe
    function criarMembros(containerClass, equipe) {
        const containers = document.querySelectorAll(`.${containerClass}`);

        containers.forEach((container) => {
            equipe.forEach((membro) => {
                const membroDiv = document.createElement('div');
                membroDiv.classList.add('membro-equipe');
                membroDiv.innerHTML = `
                    <img src="${membro.imagem}" alt="">
                    <span>${membro.nome}</span>
                `;

                container.appendChild(membroDiv);
            });
        });
    }

    // Criar membros das equipes
    criarMembros('equipe-ads-members', equipeAds);
    // Adicione outras equipes aqui, se necessário
});
