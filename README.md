 # Chat Simples para fácil implatação
> Foi utilizado react native, node.js, MySQL e JavaScript


<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="">
    <img src="https://img.shields.io/badge/axios-0.19.2-informational?logo=socket"></img>
  </a>
  <a aria-label="Versão do WebSocket" href="">
    <img src="https://img.shields.io/badge/websocket-informational?logo=socket"></img>
  </a>  
  <a aria-label="Versão do React Native" href="https://reactnative.dev/">
    <img src="https://img.shields.io/badge/React%20Native-0.60-informational?logo=React"></img>
  </a>  
  <a aria-label="Versão do Expo" href="https://expo.io/">
    <img src="https://img.shields.io/badge/Expo-informational?logo=Expo"></img>
  </a>
</p>

a versão **chat para implantação** contem código mais limpo, para voce poder modelar com mais facilidade seu código e adicionar seu banco de dado, o código está todo comentado para facilitar ainda mais o uso. **E contém a versão mobile**


a versão **chat demonstração** já vem com o banco de dados(chat demonstração\chat-backend\src\database.sql), mas ela foi criada só para demonstração e para ter ideia de como usar o banco de dados na aplicação, tendo possibilidade de criar usuários, logar em sua conta e mandar mensagens privadas.


## Instalação
execute o comando na pasta chat-backend

```bash
yarn install
```
**caso usar o char demonstração** rode o banco de dados(chat demonstração\chat-backend\src\database.sql) e configure ele em database.js

## inicie o backend
use o comando na pasta do backend
```bash
yarn nodemon src/index.js
```

## Como usar

![](./static/site.gif)

**chat para implantação:**
Quando você iniciar a aplicação, será levado um chat coletivo, onde poderá enviar mensagens em um chat global, tanto na versão web como na mobile.


**chat demonstração:**
Basta criar uma conta e fazer o login, após isso basta clicar em um dos usuários do chat e iniciar o bate-papo