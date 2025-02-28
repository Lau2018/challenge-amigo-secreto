let listaAmigos = [];

function agregarAmigo(){
    let amigo= document.getElementById("amigo").value;
    if(amigo==""){
        alert("Debes ingresar un nombre");
        return; 
}else{
    listaAmigos.push(amigo);
    document.getElementById("amigo").value="";
    document.getElementById("amigo").focus();
    
    
    mostrarAmigos(listaAmigos);

}
}
function mostrarAmigos(listaAmigos){
    let lista="";
    for(let i=0; i<listaAmigos.length; i++){
        lista += "<li>"+listaAmigos[i]+"</li>";
    }
    document.getElementById("listaAmigos").innerHTML=lista;
}
function sortearAmigo(){
    let amigoSorteado= Math.floor(Math.random()*listaAmigos.length)+1;
    document.getElementById("resultado").innerHTML=listaAmigos[amigoSorteado];
    //document.getElementById("resultado").disabled=true;
}