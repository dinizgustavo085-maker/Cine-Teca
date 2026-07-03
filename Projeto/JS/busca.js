// chave api
const chaveapic = "9b87dd9b";

// variável global para armazenar o filme atual
let filmeAtual 

// botão buscar
document
    .getElementById("btnBuscar")
    .addEventListener("click", buscarFilme);

// função de busca
async function buscarFilme() {

    const titulo = document
        .getElementById("inputBusca")
        .value
        .trim();

    if (titulo === "") {
        alert("Digite o nome de um filme.");
        return;
    }

    try {

        // busca filmes
        const resposta = await fetch(
            `https://www.omdbapi.com/?apikey=${chaveapic}&s=${titulo}`
        );

        const dados = await resposta.json();

        if (dados.Response === "False") {
            alert("Filme não encontrado.");
            return;
        }

        // pega o primeiro filme encontrado
        const filme = dados.Search[0];

        // busca detalhes completos do filme
        const respostaDetalhes = await fetch(
            `https://www.omdbapi.com/?apikey=${chaveapic}&i=${filme.imdbID}&plot=full`
        );

        const detalhes = await respostaDetalhes.json();

        // guarda o filme atual
        filmeAtual = detalhes;

        // atualiza a interface
        document.getElementById("filmePoster").src =
            detalhes.Poster !== "N/A"
                ? detalhes.Poster
                : "https://dummyimage.com/300x450/f5f5f5/888888&text=Sem+Poster";

        document.getElementById("filmeTitulo").textContent =
            detalhes.Title;

        document.getElementById("filmeAno").textContent =
            "Ano: " + detalhes.Year;

        document.getElementById("filmeSinopse").textContent =
            detalhes.Plot;

        document.getElementById("filmeDiretor").textContent =
            detalhes.Director;

        // mostra o card
        document
            .getElementById("cardFilme")
            .classList.remove("d-none");

    }
    catch (erro) {
        console.error(erro);
        alert("Erro ao buscar filme.");
    }
}