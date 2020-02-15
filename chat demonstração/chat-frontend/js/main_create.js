var form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // <--- isto pára o envio da form. Para validar o campos com o bootstrap e jquery

	// quando o botão for clicado ele vai cadastrar o usuário e redirecionalo para a página de login
	const button = document.getElementById('buttoncad')
	//pega os elementos html que serão utilizados
	const email = document.getElementById('inputEmail').value
	const senha = document.getElementById('inputPassword').value
	const link = document.getElementById('inputlink').value
	const confirmasenha = document.getElementById('inputConfirmPassword').value
// verifica se as senhas conferem
if(confirmasenha == senha){
	axios.post('http://localhost:8080/cad',{"email":email,"senha":senha,"avatar":link})
	.then(function (response) {
		console.log('criado com sucesso');
		window.location.href = "login.html";

	})
	.catch(function (error) {
		console.log(error);
	});

}
});
