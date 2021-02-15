let password = document.getElementById("password");
let verificar_password = document.getElementById("verifica_password");

password.onkeyup = () => {
    let password_value = password.value;
    let verificar_password_value = verificar_password.value;
    let coinciden = document.getElementById("correcto");
    let verificar = document.getElementById("verifica");
    const minusculas = /[a-z]/;
    const mayusculas = /[A-Z]/;
    const numeros = /[0-9]/;
    coinciden.innerHTML = "";

    if(password_value.length < 6){
        coinciden.innerHTML += "<h4>Demasiado corta</h4>";
    }
    else if(password_value.length >= 6){
        coinciden.innerHTML = "";
    }

    if(password_value != verificar_password_value){
        verificar.innerHTML = "";
    }
    else{
        verificar.innerHTML = "";
    }
}

verificar_password.onkeyup = () => {
    let password_value = password.value;
    let verificar_password_value = verificar_password.value;
    let verificar = document.getElementById("verifica");

    if(password_value != verificar_password_value){
        verificar.innerHTML = "<h4>La contraseña es demasiado corta</h4>";
    }
    else{
        verificar.innerHTML = "<h4>Las contraseñas coinciden</h4>";
    }
}