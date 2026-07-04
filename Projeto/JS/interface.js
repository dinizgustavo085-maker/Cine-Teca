// COMENTÁRIO: função que salva a avaliação do filme no localStorage
function salvarAvaliacao() {

    // COMENTÁRIO: obtém o valor escrito na textarea de resenha
    const resenha = document.getElementById("campoResenha").value.trim();

    // COMENTÁRIO: obtém o valor selecionado no dropdown de nota
    const nota = parseInt(document.getElementById("campoNota").value);

    // COMENTÁRIO: validação - verifica se a resenha está vazia
    if (!resenha) {
        alert("Por favor, escreva uma resenha!");
        return;
    }

    // COMENTÁRIO: validação - verifica se a nota foi selecionada
    if (!nota || nota < 1 || nota > 5) {
        alert("Por favor, selecione uma nota de 1 a 5!");
        return;
    }

    // COMENTÁRIO: validação - verifica se um filme foi selecionado
    if (!filmeAtual || !filmeAtual.imdbID) {
        alert("Nenhum filme selecionado!");
        return;
    }

    try {

        // COMENTÁRIO: monta o objeto com todos os dados do filme a ser salvo
        const avaliacaoFilme = {
            // COMENTÁRIO: ID único do filme no OMDB (necessário para identificar filmes duplicados)
            imdbID: filmeAtual.imdbID,
            
            // COMENTÁRIO: título do filme vindo da API
            titulo: filmeAtual.Title,
            
            // COMENTÁRIO: ano de lançamento do filme
            ano: filmeAtual.Year,
            
            // COMENTÁRIO: URL do poster do filme
            poster: filmeAtual.Poster !== "N/A" ? filmeAtual.Poster : null,
            
            // COMENTÁRIO: nota fornecida pelo usuário (1-5)
            nota: nota,
            
            // COMENTÁRIO: resenha/opinião escrita pelo usuário
            resenha: resenha
        };

        // COMENTÁRIO: chama a função de storage.js que salva a avaliação no localStorage
        salvarAvaliacao(avaliacaoFilme);

        // COMENTÁRIO: exibe mensagem de sucesso
        alert("✨ Filme avaliado com sucesso!");

        // COMENTÁRIO: obtém a instância do modal usando Bootstrap
        const modalAvaliacao = bootstrap.Modal.getInstance(
            document.getElementById("modalAvaliacao")
        );

        // COMENTÁRIO: fecha o modal
        modalAvaliacao.hide();

        // COMENTÁRIO: limpa o campo de resenha
        document.getElementById("campoResenha").value = "";

        // COMENTÁRIO: reseta o campo de nota para o valor padrão
        document.getElementById("campoNota").value = "";

    }
    catch (erro) {
        // COMENTÁRIO: trata erros de validação ou salvamento
        console.error(erro);
        alert("❌ Erro ao salvar avaliação: " + erro.message);
    }
}
