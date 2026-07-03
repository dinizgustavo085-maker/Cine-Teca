let chaveapic = "9b87dd9b"

function busca() {
    let titulo = document.getElementById("titulo").value;

    if (titulo === "") {
        return;
    }
    fetch(`https://www.omdbapi.com/?apikey=${chaveapic}&s=${titulo}`)
        .then(function (resposta) {
            return resposta.json();
        })

        .then(function (dados) {
            if (dados.erro) {
                alert("Dados do filme não encontrado")
                return;
            }

            console.log(dados.Search);
            
            for (let index = 0; index < dados.Search.length; index++) {               
                let filmes = document.getElementById("lista-filmes");
                let sessaoFilmes = document.createElement("div");

                sessaoFilmes.innerHTML =
                    "<p><strong>Nome: </strong> " + dados.Search[index].Title + "</p>"+
                    "<p><strong>Ano: </strong> " + dados.Search[index].Year + "</p>" + 
                    "<p><strong>Type: </strong> " + dados.Search[index].Type + "</p>"+
                    "<p><strong>Poster: </strong> " + dados.Search[index].Poster + "</p>"
                filmes.appendChild(sessaoFilmes);
            }


        })
}

const campo = document.getElementById("titulo");

