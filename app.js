// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const lista = document.getElementById("listaAmigos");

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    
    if (nombreAmigo == "") {
        alert("Por favor inserte un nombre")
    }
    else{
        amigos.push(nombreAmigo);
        amigo.value = "";
    }
    console.log(amigos)
    actualizarListaAmigos(amigos)   
}

function actualizarListaAmigos(){    
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo(){    
    if (amigos.length != 0){
        lista.innerHTML = "";
        let indice = Math.floor(Math.random() * amigos.length);
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = "El amigo secreto es " + amigos[indice];
        
    }
}