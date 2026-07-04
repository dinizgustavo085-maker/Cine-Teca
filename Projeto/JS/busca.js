// chave api
const chaveapic = "9b87dd9b";

// COMENTÁRIO: variável global para armazenar o filme atual com todos os seus dados
let filmeAtual 

// COMENTÁRIO: função que recebe o imdbID do filme e busca seus detalhes completos na API
async function buscarFilme(imdbID) {

    // COMENTÁRIO: validação - verifica se o imdbID foi passado
    if (!imdbID) {
        alert("ID do filme não fornecido.");
        return;
    }

    try {

        // COMENTÁRIO: busca os detalhes COMPLETOS do filme usando o imdbID
        // plot=full garante que recebemos a sinopse completa
        const respostaDetalhes = await fetch(
            `https://www.omdbapi.com/?apikey=${chaveapic}&i=${imdbID}&plot=full`
        );

        const detalhes = await respostaDetalhes.json();

        // COMENTÁRIO: validação - verifica se a resposta da API foi bem-sucedida
        if (detalhes.Response === "False") {
            alert("Detalhes do filme não encontrado.");
            return;
        }

        // COMENTÁRIO: armazena os dados completos do filme na variável global filmeAtual
        filmeAtual = detalhes;

        // COMENTÁRIO: atualiza a imagem do poster no card
        // Se não houver poster disponível, usa uma imagem padrão
        document.getElementById("filmePoster").src =
            detalhes.Poster !== "N/A"
                ? detalhes.Poster
                : "https://dummyimage.com/300x450/f5f5f5/888888&text=Sem+Poster";

        // COMENTÁRIO: atualiza o título do filme no card
        document.getElementById("filmeTitulo").textContent =
            detalhes.Title;

        // COMENTÁRIO: atualiza o ano de lançamento no card
        document.getElementById("filmeAno").textContent =
            "Ano: " + detalhes.Year;

        // COMENTÁRIO: atualiza a sinopse/plot do filme no card
        document.getElementById("filmeSinopse").textContent =
            detalhes.Plot;

        // COMENTÁRIO: atualiza o nome do diretor no card
        document.getElementById("filmeDiretor").textContent =
            detalhes.Director;

        // COMENTÁRIO: remove a classe 'd-none' (que esconde elementos) para mostrar o card na interface
        document
            .getElementById("cardFilme")
            .classList.remove("d-none");

    }
    catch (erro) {
        // COMENTÁRIO: registra o erro no console para debug
        console.error(erro);
        alert("Erro ao buscar filme.");
    }
}