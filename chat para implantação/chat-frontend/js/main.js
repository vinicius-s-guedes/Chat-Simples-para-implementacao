
// Estabeleça a conexão WS.
const ws = new WebSocket('ws://localhost:8888')

window.onload = () => {
  // Carregar mensagens mais antigas do banco de dados.
  axios.get('http://localhost:8080/messages')
  .then(({ data }) => appendToChat(data))

  const chat = document.getElementById('messages')
  const button = document.getElementById('send')
  const input = document.getElementById('message')

  //Se alguém clicar no botão enviar, envie uma mensagem do WS e redefina o input
  button.onclick = () => {
    ws.send(input.value)

    input.value = ''
  }

  // Anexe mensagens recebidas ao aplicativo.
  ws.onmessage = ({ data }) => appendToChat([data])

  // As funções que anexam as novas mensagens.
  const appendToChat = (data) => {
    
    for (message of data) {
      let el = document.createElement('li')
      el.innerText = message

      chat.appendChild(el)
    }
  }
}
