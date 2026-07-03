//container onde as avaliações serão exibidas
const container = document.getElementById("containerListaAvaliacoes");

//carrega e exibe as avaliações salvas
function carregarAvaliacoes() {

    const avaliacoes = ordenarPorNota(buscarAvaliacoes());

    container.innerHTML = "";

    //exibe uma mensagem caso não existam avaliações
    if (avaliacoes.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center">
                <h4 class="text-muted">
                    Você ainda não avaliou nenhum filme.
                </h4>
            </div>
        `;

        return;
    }

    //cria um card para cada filme
    avaliacoes.forEach(filme => {

        console.log(JSON.stringify(filme, null, 2));

        const card = `
            <div class="col" style="max-width: 350px;">

                <div class="card bg-white text-dark h-100 border-light shadow-sm rounded-4 overflow-hidden">

                    <img
                        src="${filme.poster || 'https://dummyimage.com/300x450/f5f5f5/888888&text=Sem+Poster'}"
                        class="card-img-top object-fit-cover"
                        style="height:260px;"
                        alt="${filme.titulo}"
                    >

                    <div class="card-body p-4 d-flex flex-column">

                        <h5 class="card-title fw-bold mb-2">
                            ${filme.titulo}
                        </h5>

                        <p class="text-muted mb-2">
                            ${filme.ano}
                        </p>

                        <span
                            class="badge align-self-start mb-3 px-3 py-2 rounded-pill fw-bold"
                            style="background-color:#E1BEE7; color:#4A148C;"
                        >
                            Nota: ${filme.nota} / 5
                        </span>

                        <p class="card-text text-muted flex-grow-1">
                            ${filme.resenha}
                        </p>

                        <button
                            class="btn btn-outline-danger mt-3"
                            onclick="excluirFilme('${filme.imdbID}')">
                            Remover avaliação
                        </button>

                    </div>

                </div>

            </div>
        `;

console.log(card);

container.innerHTML += card;

    });

}

//Remove uma avaliação e atualiza a lista
function excluirFilme(imdbID) {

    removerAvaliacao(imdbID);

    carregarAvaliacoes();

}

//Executa o carregamento ao abrir a página
carregarAvaliacoes();