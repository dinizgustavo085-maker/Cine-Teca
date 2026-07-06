# 🎬 Cine-Teca

O **Cine-Teca** é uma aplicação web desenvolvida para pesquisar filmes, visualizar informações sobre eles e criar uma coleção pessoal de avaliações.

O projeto utiliza a **OMDb API** para buscar dados dos filmes e o **localStorage** do navegador para salvar as avaliações feitas pelo usuário.

---

## 📌 Funcionalidades

* Buscar filmes pelo nome.
* Consultar informações de filmes pela OMDb API.
* Exibir detalhes do filme, como:

  * título;
  * ano;
  * tipo;
  * pôster;
  * sinopse;
  * diretor.
* Avaliar filmes com nota de 0 a 5.
* Escrever uma resenha pessoal.
* Salvar avaliações no navegador.
* Listar filmes avaliados.
* Ordenar avaliações pela maior nota.
* Remover avaliações salvas.

---

## 🖥️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Bootstrap
* OMDb API
* LocalStorage

---

## 📁 Estrutura do projeto

```bash
Cine-Teca/
├── README.md
└── Projeto/
    ├── Interface.html
    ├── avaliacao.html
    ├── JS/
    │   ├── api.js
    │   ├── avaliacao.js
    │   ├── busca.js
    │   ├── interface.js
    │   └── storage.js
```

---

## 🎯 O que o projeto faz?

O **Cine-Teca** funciona como uma biblioteca pessoal de filmes.

Na página principal, o usuário pode pesquisar o nome de um filme. A aplicação faz uma requisição para a **OMDb API** e retorna os resultados encontrados.

Ao selecionar um filme, o sistema exibe informações detalhadas sobre ele e permite que o usuário registre uma avaliação com nota e resenha.

As avaliações são armazenadas no próprio navegador por meio do `localStorage`, permitindo que o usuário acesse depois sua lista de filmes avaliados.

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/dinizgustavo085-maker/Cine-Teca.git
```

### 2. Acesse a pasta do projeto

```bash
cd Cine-Teca/Projeto
```

### 3. Abra o projeto no navegador

Você pode abrir diretamente o arquivo:

```bash
Interface.html
```

Também é possível rodar usando a extensão **Live Server** no VS Code.

### Usando Live Server

1. Abra a pasta `Cine-Teca` no VS Code.
2. Acesse a pasta `Projeto`.
3. Clique com o botão direito no arquivo `Interface.html`.
4. Selecione a opção **Open with Live Server**.

---

## 🔑 Configuração da API

O projeto utiliza a **OMDb API** para buscar informações dos filmes.

A chave da API fica configurada no arquivo:

```bash
Projeto/JS/api.js
```

Procure pela variável responsável pela chave da API:

```javascript
let chaveapic = "SUA_CHAVE_AQUI";
```

Caso necessário, substitua o valor pela sua própria chave da OMDb.

Você pode gerar uma chave acessando:

```bash
https://www.omdbapi.com/apikey.aspx
```

---

## 📖 Como usar

1. Abra a página `Interface.html`.
2. Digite o nome de um filme no campo de busca.
3. Clique no botão de busca.
4. Selecione um filme da lista.
5. Veja os detalhes do filme.
6. Adicione uma nota de 0 a 5.
7. Escreva uma resenha.
8. Salve a avaliação.
9. Acesse a página de avaliações para visualizar sua coleção.

---

## 👥 Contribuintes

* [@dinizgustavo085-maker](https://github.com/dinizgustavo085-maker)
* [@sarahleoncio8-oss](https://github.com/sarahleoncio8-oss)
* [@gabsmrd](https://github.com/gabsmrd)

---

## 🧪 Status do projeto

Projeto em desenvolvimento.

Funcionalidades principais já implementadas:

* busca de filmes;
* integração com a OMDb API;
* exibição de detalhes dos filmes;
* criação de avaliações;
* armazenamento das avaliações no navegador;
* listagem de avaliações;
* remoção de avaliações.

---

## 📌 Observação

A OMDb API pode funcionar melhor com títulos de filmes em inglês.

Exemplos de busca:

```bash
The Notebook
Lady Bird
Legally Blonde
Spider-Man
```

---

## 📄 Licença

Este projeto ainda não possui uma licença definida.
