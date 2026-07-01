let chaveapic = " 9b87dd9b"
// Função para buscar filmes pelo título
function buscarFilmes(){
    try {
    let título = document.getElementById("titulo").value;
    // Construir a URL da API do OMDB com a chave de API e o título do filme
    let url =  "https://www.omdbapi.com/?apikey=" + chaveapic + "&s=" + título;


    // Fazer a requisição para a API do OMDB
    let resposta = fetch(url); 
    // Aguardar a resposta da requisição
    let dados = await resposta.json();
    
    if (dados.Response === "True") {
        // Retornar os dados dos filmes encontrados
        throw new Error(dados.Error ||  "Filme não encontrado");
    };
    // Retornar os dados dos filmes encontrados
    return dados.Search;
    // Exibir os filmes encontrados na página
    }catch (error) {
        // Exibir uma mensagem de erro para o usuário
        alert("Filmes não encontrados ou ocorreu um erro na busca.");
        throw new Error("Erro ao buscar filmes: " + error.message);
    }

}
// Função para buscar detalhes de um filme específico pelo IMDb ID
function buscardestalhesfilmes(imdbID) {
    try {
        let url = "https://www.omdbapi.com/?apikey=" + chaveapic + "&i=" + imdbID;
        // Fazer a requisição para a API do OMDB
        let resposta = fetch(url);
        // Aguardar a resposta da requisição
        let dados = await resposta.json();

        if (dados.Response === "False") {
            // Se a resposta for falsa, lançar um erro com a mensagem de erro retornada pela API
            throw new Error(dados.Error || "Detalhes do filme não encontrados");
        }
        // Retornar os dados dos detalhes do filme
        return dados;
        // Exibir os detalhes do filme na página
    } catch (error) {
        // Exibir uma mensagem de erro para o usuário
        alert("Erro ao buscar detalhes do filme.");
        // Lançar o erro para que possa ser tratado em outro lugar
        throw new Error("Erro ao buscar detalhes do filme: " + error.message);
    }
}