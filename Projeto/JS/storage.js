//armazena todas as avaliações no localStorage.
const STORAGE_KEY = "cineteca_avaliacoes";

//busca todas as avaliações salvas
//caso não exista nenhuma avaliação retorna um array vazio
function buscarAvaliacoes() {

    const dados = localStorage.getItem(STORAGE_KEY);

    if (!dados) {
        return [];
    }

    //converte os dados salvos em texto para um array de objetos
    return JSON.parse(dados);
}

//salva uma nova avaliação de filme
//antes de salvar, valida filme duplicado, nota e resenha
function salvarAvaliacaoStorage(filme) {

    //adicionei o try/catch para capturar erros e exibir uma mensagem pro usuário que o professor tinha pedido para fazer
    //caso o usuário tente salvar um filme duplicado uma nota inválida ou uma resenha sem nada

    try {

        const lista = buscarAvaliacoes();

        //verifica se já existe um filme com o mesmo imdbID
        const filmeJaExiste = lista.some(item => item.imdbID === filme.imdbID);

        if (filmeJaExiste) {
            throw new Error("Este filme já foi avaliado.");
        }

        //verifica se a nota está entre 0 e 5
        if (filme.nota < 0 || filme.nota > 5) {
            throw new Error("A nota deve estar entre 0 e 5.");
        }

        //verifica se a resenha foi preenchida
        if (!filme.resenha || filme.resenha.trim() === "") {
            throw new Error("A resenha não pode estar vazia.");
        }

        //adiciona o filme à lista de avaliações
        lista.push(filme);

        //atualiza o localStorage com a nova lista
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(lista)
        );

    } catch (erro) {
        console.error("Erro ao salvar avaliação:", erro);
        alert(erro.message);
    }
}

//ordena as avaliações da maior nota para a menor
//retorna uma nova lista sem alterar a original
function ordenarPorNota(lista) {

    return [...lista].sort((a, b) => b.nota - a.nota);

}

//remove uma avaliação utilizando o imdbID do filme.
function removerAvaliacao(imdbID) {

    const lista = buscarAvaliacoes();

    //cria uma nova lista sem o filme informado.
    const novaLista = lista.filter(filme => filme.imdbID !== imdbID);

    //atualiza o localStorage com a lista modificada
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novaLista)
    );

}