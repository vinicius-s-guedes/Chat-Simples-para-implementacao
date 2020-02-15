carregauser = () => {
//lista todos os usuários exeto o seu
axios.get(`http://localhost:8080/users/${sessionStorage.getItem('email')}`, {})
.then(response => {
  console.log(response)
  const api =response.data;
  for(var i in api){
    if (api.hasOwnProperty(i)) {
      appendToUser(api[i].email,api[i].avatar)
    }
  }

})
.catch(error => {
  console.log(error)
})
//pega os elementos html que serão utilizados
const usuarios = document.getElementById('usuarios')

  // Essa função vai adicionar os usuários
  const appendToUser = (data,avatar) => {
    let dete = document.createElement('dt')
    let button = document.createElement('button')
    button.setAttribute("class","btn btn-light container-fluid text-left");
    button.setAttribute("type","button");
    button.setAttribute("id",data);
    button.setAttribute("onClick",`btnchatuser('${data}','${avatar}')`)




    let img = document.createElement('img')
    img.setAttribute("src",`${avatar}`);
    img.setAttribute("class","d-inline-block align-top");
    img.setAttribute("width","30");
    img.setAttribute("height","30");
    button.append(img);
    button.append(data);


    //para caso você queira adicionar notificação de mensagem, eu preparei o código css para você

    /* let span = document.createElement('span')
    span.setAttribute("class","badge badge-primary badge-pill");

    span.innerText = '1'
    button.append(span);
    */

    dete.append(button);
    usuarios.appendChild(dete)


  }
}
//caso o chat for alternado será registrado o email e o avatar e as mensagens para o campo da conversa
function btnchatuser(email,avatar){
  sessionStorage.setItem("amigo", email);
  sessionStorage.setItem("amigoavatar", avatar);

  window.location.href = "index.html";

}