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
        .then(function (dados) {
            if (dados.erro) {
                alert("Dados do filme não encontrado")
                return;
            }

            console.log(dados.Search);
            // percorre o array de filmes retornado pela API e cria elementos HTML para exibir as informações de cada filme
            for (let index = 0; index < dados.Search.length; index++) {               
                // cria um elemento div para cada filme e adiciona as informações do filme dentro dele
                let sessaoFilmes = document.createElement("div");

                // Adiciona a classe "filme" à div criada
                sessaoFilmes.innerHTML =
                    "<p><strong>Nome: </strong> " + dados.Search[index].Title + "</p>"+
                    "<p><strong>Ano: </strong> " + dados.Search[index].Year + "</p>" + 
                    "<p><strong>Type: </strong> " + dados.Search[index].Type + "</p>" +
                    "<img src='" + dados.Search[index].Poster + "' alt='Poster do filme' width='150'>";
                filmes.appendChild(sessaoFilmes);
            }


        })
}

const campo = document.getElementById("titulo");

