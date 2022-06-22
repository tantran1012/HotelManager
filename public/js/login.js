const signIn = document.getElementById('signIn');
const loginButton = document.getElementById('loginButton');
const container = document.getElementById('container');


loginButton.addEventListener('click', () => {
	document.getElementById('loginForm').submit();
});