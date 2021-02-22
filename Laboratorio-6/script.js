let pichu = document.getElementById("pichu");
let kirby = document.getElementById("kirby");
let wolf = document.getElementById("wolf");
let subtotal_pichu = 0;
let subtotal_kirby = 0;
let subtotal_wolf = 0;

pichu.onchange= () => {
    let producto = document.getElementById("producto_pichu");
    subtotal_pichu = 998*pichu.value;

    if(pichu.value == 0){
        producto.innerHTML = "";
    }
    else if(pichu.value == 1){
        producto.innerHTML = "Cantidad: 1 Amiibo Pichu SSB Series - Standard Edition $998";
    }
    else{
        producto.innerHTML = "Cantidad: " + pichu.value + " Amiibo Pichu SSB Series - Standard Edition $" + subtotal_pichu;
    }

    let subtotal = subtotal_pichu + subtotal_kirby + subtotal_wolf;
    let subtotal_datos = document.getElementById("subtotal");
    subtotal_datos.innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("amiibo_pichu");
}

kirby.onchange= () => {
    let producto = document.getElementById("producto_kirby");
    subtotal_kirby = 5250*kirby.value;

    if(kirby.value == 0){
        producto.innerHTML = "";
    }
    else if(kirby.value == 1){
        producto.innerHTML = "Cantidad: 1 Amiibo Kirby SSB Series - Standard Edition $5,250";
    }
    else{
        producto.innerHTML = "Cantidad: " + kirby.value + " Amiibo Kirby SSB Series - Standard Edition $" + subtotal_kirby;
    }

    let subtotal = subtotal_pichu + subtotal_kirby + subtotal_wolf;
    let subtotal_datos = document.getElementById("subtotal");
    subtotal_datos.innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("amiibo_kirby");
}

wolf.onchange= () => {
    let producto = document.getElementById("producto_wolf");
    subtotal_wolf = 3125*wolf.value;

    if(wolf.value == 0){
        producto.innerHTML = "";
    }
    else if(wolf.value == 1){
        producto.innerHTML = "Cantidad: 1 Amiibo Wolf SSB Series - Standard Edition $3,125";
    }
    else{
        producto.innerHTML = "Cantidad: " + wolf.value + " Amiibo Wolf SSB Series - Standard Edition $" + subtotal_wolf;
    }

    let subtotal = subtotal_pichu + subtotal_kirby + subtotal_wolf;
    let subtotal_datos = document.getElementById("subtotal");
    subtotal_datos.innerHTML = "Subtotal: $" + subtotal;
    document.getElementById("amiibo_wolf");
}