# COD Teams 

<div style="text-align:center"> <img src="https://github.com/BeatrizAlmeida/ionic-api/blob/main/src/assets/logoCODTeams.png"> </div>

## Índice

- [Informações Gerais](#informações-gerais)
- [Tecnologia](#tecnologia)
- [Setup](#setup)
  - [Windows](#windows)
  - [Linux](#linux)
- [Servir o projeto](#servir-o-projeto)

## Informações Gerais

Esse é o trabalho final desenvolvido para o Processo Seletivo Interno para Tech Lead da EJCM, no qual tínhamos que construir uma homepage de um APP integrado com uma API pública com autenticação. O maior desafio foi desenvolver a aplicação na área oposta a qual estamos trabalhando atualmente, no meu caso, esta área é o front-end e a tecnologia utilizada é o **ionic**.
No projeto, que você encontrará neste repositório, temos um aplicativo para os fãs de games, mais especificamente COD - **Call Of Duty**. Nele o usuário pode encontrar os melhores times de jogadores ao redor do mundo. Ainda é possível acessar os dados dessas equipes, como o username dos jogadores que estão cotados internacionalmente como os melhores do jogo. 

## Tecnologia

[ionic](https://ionicframework.com/)

Uma framework para desenvolvimento de aplicações mobile que utiliza HTML, CSS e JavaScript, permitindo o desenvolvimento multiplataforma.

## Setup

Antes de servir, você vai precisar ter o ambiente instalado. A seguir estão os passos para o setup no sistema operacional windows e no linux. 

### Windows

#### Instalar o node JS

Entre na página do [node.js](https://nodejs.org/en/download/) e escolha a opção de acordo com as configurações do seu sitema operacional. Execute o arquivo de instalação e siga os seus passos para concluir.

#### Instalar o angular

No seu terminal do git bash, dê o comando:

` npm install -g @angular/cli `

#### Instalar o ionic

Novamente no seu terminal do git bash, dê o comando:

` nnpm install -g ionic `

### Linux

#### Instalar o node js e npm

Você irá precisar instalar os pacotes de nodejs e npm. [Aqui](https://nodejs.org/pt-br/download/package-manager/) você encontra os comandos para diferentes distribuições linux. Para Arch Linux execute o seguinte comando no terminal:

` sudo pacman -S nodejs npm `

#### Instalar o angular

` sudo npm install -g @angular/cli `

#### Instalar o ionic


` sudo npm install -g ionic@latest `



## Servir o projeto

### 1 - Clonar o projeto e instalar dependências

O primeiro passo é clonar este repositório:

` git clone https://github.com/BeatrizAlmeida/ionic-api `

Em seguida, você deve instalar as dependências do projeto

` npm install `

### 2 - Servindo o projeto

Após todas configurações, podemos servir o projeto

` ionic serve `

