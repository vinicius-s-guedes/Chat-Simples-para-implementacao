 # Chat Simples para fácil implatação
> Foi utilizado node.js, MySQL, e a biblioteca axios


<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/axios-0.19.2-informational?logo=socket"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications">
    <img src="https://img.shields.io/badge/websocket-1.0.31-informational?logo=socket"></img>
  </a>
</p>

a versão  **chat demonstração** é a demostrada no gif e está mais completa. Já vem com o banco de dados(chat demonstração\chat-backend\src\database.sql), mas ela foi criada só para demonstração e para ter ideia de como usar o banco de dados na aplicação, tendo possibilidade de criar usuários, logar em sua conta e mandar mensagens privadas

a versão **chat para implantação** contem código mais básico, para voce poder editar com mais facilidade e adicionar seu banco de dado, o código está todo comentado para facilitar ainda mais o uso

## Instalação
execute o comando na pasta chat-backend

```bash
yarn install
```
**caso usar o char demonstração** rode o banco de dados(chat demonstração\chat-backend\src\database.sql) e configure ele em database.js

## Como usar

![](./static/site.gif)

**chat demonstração:**
Basta criar uma conta e fazer o login, após isso basta clicar em um dos usuários do chat e iniciar o bate-papo

**chat para implantação:**
Quando você iniciar a aplicação, será levado um chat coletivo, onde tu que enviar, as demais pessoas que estiverem utilizando o chat receberá a mensagem
