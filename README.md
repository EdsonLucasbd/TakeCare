<p align="center"><img src="https://raw.githubusercontent.com/EdsonLucasbd/TakeCare/main/public/readmeLogo.png" alt="TakeCare" /><p>
  
<p align="center">
  <a href="#information_source-sobre-o-projeto"> Projeto</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-elementos-e-funcionalidades"> Funcionalidades</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-plus">Milha extra</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-como-instalar">Instalação</a>
<p/>

<p align="center"><img width="700" src="https://raw.githubusercontent.com/EdsonLucasbd/TakeCare/main/public/example.png" alt="Screenshot" /><p>

## :information_source: Sobre o projeto

#### O Take Care é uma aplicação que utiliza a técnica de Pomodoro com a realização de exercícios físicos para ajudar pessoas que passam muito tempo em frente ao computador.</br> Foi desenvolvida durante a Next Level Week 4 da <a href="https://rocketseat.com.br/">Rocketseat</a>.</br></br> Voçê pode ver o resultado aqui: <a href="https://takecare-gamma.vercel.app/">Take Care</a>


## ✨ Tecnologias
<p>Foram usadas as seguintes tecnologias:</p>
<ul>
  <li>[React](https://pt-br.reactjs.org/)</li>
  <li>[Next.Js](https://nextjs.org/)</li>
  <li>[TypeScript](https://www.typescriptlang.org/)</li>
  <li>[NextAuth](https://next-auth.js.org/)</li>
  <li>[Auth0](https://auth0.com/)</li>
  <li>[MongoDB](https://www.mongodb.com/cloud/atlas)</li>
</ul>

## :gear: Elementos e funcionalidades
<ul>
  <li>Sistema de login usando NextAuth com Auth0;</li>
  <li>Sidebar para navegar entre as páginas home e ranking, além de possibilitar a alteração de tema e fazer logout;</li>
  <li>Barra de experiência;</li>
  <li>Cronômetro;</li>
  <li>Botão Iniciar/abandonar ciclo;</li>
  <li>Card lateral onde são exibidos os desafios;</li>
  <li>Apresenta um modal a cada novo nível alcançado;</li>
  <li>Dados (nível, experiência e desafios concluídos) salvos em cookies;</li>
  <li>Página de ranking onde todos os usuários da aplicação são mostrados num ranking de acordo com o nivel e experiência;</li>
</ul>

## 🆙 O plus

- ✔ Tela inicial
- ✔ Login com github ou google
- ✔ Sidebar
- ✔ Tema Dark
- ✔ Responsividade

## 🛠️ Como instalar
### Pré-requisitos 
  Para conseguir utilizar o projeto, você precisará instalar as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://classic.yarnpkg.com/en/docs/install). Além de criar uma conta e um banco no mongoDB e uma conta na Auth0 caso tenha interesse em utilizar o mesmo provedor de autenticação que foi usado neste projeto.

### Váriaveis de Ambiente
  Um ponto muito importante para a perfeita execução do projeto são as váriaveis de Ambiente, você pode conferir quais irá precisar aqui: <a href="https://github.com/EdsonLucasbd/TakeCare/blob/main/env.example">.env.example</a>

```bash
# Clone este repositório
$ git clone https://github.com/EdsonLucasbd/TakeCare

# Acesse a pasta do projeto no seu terminal
$ cd TakeCare

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# A aplicação abrirá na porta:3000
```
<p>Agora você pode acessar <code><a href="https://localhost:3000">localhost:3000</a></code> do seu navegador. <img width="25" src="https://emojis.slackmojis.com/emojis/images/1531849430/4246/blob-sunglasses.gif?1531849430" alt="Sunglasses emoji" /></p>

<hr>
</br></br>
<p align="center">Feito com 💖 por Edson Lucas</p>
