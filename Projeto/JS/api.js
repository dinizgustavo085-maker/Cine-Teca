let chaveapic = "9b87dd9b"

function busca() {
    let titulo = document.getElementById("titulo").value;
    let filmes = document.getElementById("lista-filmes");

    if (titulo === "") {
        return;
    }
    
     // Limpa os dados antigos antes de buscar/renderizar os novos
    filmes.innerHTML = "";
    
     // faz a requisição para a API do OMDB usando o método fetch e passando o título do filme como parâmetro
    fetch(`https://www.omdbapi.com/?apikey=${chaveapic}&s=${titulo}`)
        .then(function (resposta) {
            return resposta.json();
        })

        // converte a resposta da API em um objeto JavaScript
        // converte a resposta da API em um objeto JavaScript
        .then(function (dados) {
            if (dados.erro) {
                alert("Dados do filme não encontrado")
                return;
            }

            console.log(dados.Search);
            // COMENTÁRIO: percorre o array de filmes retornado pela API
            for (let index = 0; index < dados.Search.length; index++) {               
                // COMENTÁRIO: cria um elemento div para cada filme
                let sessaoFilmes = document.createElement("div");

                // COMENTÁRIO: armazena o imdbID do filme atual para passar para a função buscarFilme()
                const imdbID = dados.Search[index].imdbID;

                // COMENTÁRIO: monta o HTML com as informações do filme
                sessaoFilmes.innerHTML =
                    "<p><strong>Nome: </strong> " + dados.Search[index].Title + "</p>"+
                    "<p><strong>Ano: </strong> " + dados.Search[index].Year + "</p>" + 
                    "<p><strong>Type: </strong> " + dados.Search[index].Type + "</p>" +
                    "<img src='" + dados.Search[index].Poster + "' alt='Poster do filme' width='300'>";

                // COMENTÁRIO: adiciona estilo CSS para indicar que a div é clicável
                sessaoFilmes.style.cursor = "pointer";
                sessaoFilmes.style.padding = "10px";
                sessaoFilmes.style.border = "1px solid #ddd";
                sessaoFilmes.style.borderRadius = "4px";
                sessaoFilmes.style.marginBottom = "10px";
                sessaoFilmes.style.backgroundColor = "#f9f9f9";
                
                // COMENTÁRIO: adiciona evento de clique que chama buscarFilme() passando o imdbID
                // Colocado DEPOIS do innerHTML para não ser perdido
                sessaoFilmes.onclick = function() {
                    console.log("Clicou no filme com ID: " + imdbID);
                    buscarFilme(imdbID);
                };
                
                // COMENTÁRIO: adiciona a div à lista de filmes no HTML
                filmes.appendChild(sessaoFilmes);
            }


        })
}


