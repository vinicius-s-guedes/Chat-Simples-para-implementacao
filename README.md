 # DevRadar-Semana-Omnistack-10
> Na semana Omnistack, criei um radar de desenvolvedores

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Esse projeto localiza os desenvolvedor que estão perto de você, tendo a opção de perquisar por tecnologias especificas e também acessar o GitHub da pessoa

![](./static/site.gif)

## Instalação
Configure o MongoDB e atualize a string de conexão com seu `User:Senha` no arquivo `index.js`.  
Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:
```bash
cd backend
yarn install
yarn dev
```
Para iniciar o **Frontend** do React utilize os comandos:
```bash
cd frontend
yarn install
yarn start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000` contendo o Projeto desenvolvido no dia 3 de 5.  

Para testar o **Mobile** do React Native, primeiro coloque o endereço do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois execute os comandos:
```bash
# NÃO é preciso executar a linha de baixo caso ja tenha o Expo (CLI) instalado!
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```

## Como usar

![](./static/devradar.png)

Alguns exemplos interessantes e úteis sobre como seu projeto pode ser utilizado. Adicione blocos de códigos e, se necessário, screenshots.

_Para mais exemplos, consulte a [Wiki][wiki]._ 


## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)




echo "# Chat-Simples-para-implementa-o" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:Vinicius-Santos-Guedes/Chat-Simples-para-implementa-o.git
git push -u origin master
