// Estabeleça a conexão WS.
const ws = new WebSocket('ws://localhost:8888')

window.onload = () => {
  //carregar o listar_user.js
  carregauser(); 
 // Carregar mensagens mais antigas do banco de dados.
 axios.get(`http://localhost:8080/messages/${sessionStorage.getItem('email')}/${sessionStorage.getItem('amigo')}`, {})
 .then(response => {
  console.log(response.data[0])
  const api =response.data[0];
  for(var i in api){
    if (api.hasOwnProperty(i)) {
      appendToChat(api[i].mensagem,api[i].usuarioid,api[i].envio)
    }
  }console.log(sessionStorage.getItem('amigo'))
     if(sessionStorage.getItem('amigo') != null && sessionStorage.getItem('amigo') != 'null'){
  //adiciona a imagem e o nome do chat selecionado
  const nomeamigo = document.getElementById('nomeamigo');
  let imgamigo = document.createElement('img')
  imgamigo.setAttribute("src",sessionStorage.getItem('amigoavatar'));
  imgamigo.setAttribute("class","d-inline-block align-top");
  imgamigo.setAttribute("width","30");
  imgamigo.setAttribute("height","30");
  nomeamigo.append(imgamigo);
  nomeamigo.append(` ${sessionStorage.getItem('amigo')}`);
}
})
 .catch(error => {
  console.log(error)
})
 //pega os elementos html que serão utilizados
 const chat = document.getElementById('messages')
 const button = document.getElementById('send')
 const input = document.getElementById('message')
 const nomeuser = document.getElementById('nomeuser');
 let img = document.createElement('img')

 img.setAttribute("src",sessionStorage.getItem('avatar'));
 img.setAttribute("class","d-inline-block align-top");
 img.setAttribute("width","30");
 img.setAttribute("height","30");
 nomeuser.append(img);
 nomeuser.append(` ${sessionStorage.getItem('email')}`);




//Se alguém clicar no botão enviar, envie uma mensagem do WS e redefina o input
button.onclick = () => {
 const array = `{"mensagem" : "${input.value}","email": "${sessionStorage.getItem('email')}", "amigo" :"${sessionStorage.getItem('amigo')}"}`;


 ws.send(array)

 input.value = ''
}

 // Anexe mensagens recebidas ao aplicativo.
 ws.onmessage = ({ data }) => {
    //recebe todos os dados em json
    obj = JSON.parse(data);

    //pega a data atual para mostrat na mensagem o dia e a hora enviado, sem precisar pedir ao banco de dados
    var dNow = new Date();
    var localdate = dNow.getFullYear() +'-'+(dNow.getMonth()+1)+'-'+dNow.getDate()+ 'T' + dNow.getHours() + ':' + dNow.getMinutes();

    //Esse if verifica para quem é a mensagem
    if((obj.userid == sessionStorage.getItem('email') && obj.amigo == sessionStorage.getItem('amigo')) || (obj.amigo == sessionStorage.getItem('email') && obj.userid == sessionStorage.getItem('amigo'))){
      appendToChat(obj.mensagem,obj.userid,localdate)
    }
  }

 // As funções que anexam as novas mensagens.
 const appendToChat = (data,user,envio) => {
  let div = document.createElement('div')
  let p = document.createElement('p')
  let span = document.createElement('span')
  span.innerText = envio
  p.innerText = data


  let img = document.createElement('img')
  img.setAttribute("width","30");
  img.setAttribute("height","30");
  div.append(img);
  div.append(p);
  div.append(span);



    //caso for você, adiciona uma formatação e caso for um usuário diferente ele usa outra formatação
    if(user == sessionStorage.getItem('email')){
      img.setAttribute("src",`${sessionStorage.getItem('avatar')}`);
      img.setAttribute("class","d-inline-block align-top left ");

      span.setAttribute("class","time-left");
      div.setAttribute("class","containermsg container");
    }
    else{
   
      img.setAttribute("src",`${sessionStorage.getItem('amigoavatar')}`);
      img.setAttribute("class","d-inline-block align-top right");


      span.setAttribute("class","time-right");
      div.setAttribute("class","container darker bg-info");
    }




    //adiciona a mensagem
    chat.appendChild(div)
    chat.scrollTop = chat.scrollHeight;
  }
}

