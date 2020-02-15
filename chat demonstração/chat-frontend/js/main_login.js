var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // <--- isto pára o envio da form
  const button = document.getElementById('buttonlog')
// ao clicar no button ele vai verificar se as informações do usuário batem
// se as informações estão corretas ele é redirecionado para a página index

//pega os elementos html que serão utilizados
const email = document.getElementById('inputEmail').value
const senha = document.getElementById('inputPassword').value

axios.get(`http://localhost:8080/user/${email}/${senha}`, {})
.then(response => {
  const api =response.data[0].avatar;
  console.log(api);
  if(api != '' || api!=null){
   sessionStorage.setItem("email",email);
   sessionStorage.setItem("senha", senha);
   sessionStorage.setItem("avatar", api);
   window.location.href = "index.html";

 }
})
.catch(error => {
  console.log(error)
})


});
