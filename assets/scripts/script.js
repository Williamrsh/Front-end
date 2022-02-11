

function clique(){
    alert("Você clicou no botão!")
}
let nome = window.document.getElementById("nome")
let email = document.getElementById("email")
let assunto = document.getElementById("assunto")
let erroNome = false
let erroEmail = false
let erroAssunto = false
let mapa = document.querySelector("#mapa")

function enviar(){
    if(nome.value=="" || email.value==""||assunto.value ==""){
     alert("Todos os campos são obrigatórios")
    }else{
        if(erroNome==true&&erroEmail==true&&erroAssunto==true){
            alert("Óla "+ nome.value +"! Seu email foi enviado com sucesso!")
        }else{
            alert("Todos os campos tem que ser preenchidos corretamente!")
        }
    }
    
}

nome.style.width="90%"
email.style.width="90%"

function validaNome(){
        let txtNome = document.querySelector("#txtNome")
        if(nome.value.length <3){
        txtNome.innerHTML="Nome Inválido"
        txtNome.style.color="red"
        erroNome = false
         } else{
        txtNome.innerHTML="Nome Válido"   
        txtNome.style.color="green"
        erroNome = true
        }
    
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if(email.value.indexOf("@")== -1 ||email.value.indexOf(".")== -1 ){
        txtEmail.innerHTML ="E-mail inválido"
        txtEmail.style.color="red"
        erroEmail=false
    }else{
        txtEmail.innerHTML ="E-mail Válido"
        txtEmail.style.color="green"
        erroEmail=true
      
    }
   

}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >=100){
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
        txtAssunto.style.backgroundColor="red"
        txtAssunto.style.display="block"
        erroAssunto=false
       
    }else{
        txtAssunto.style.display="none"
        erroAssunto=true
      
    }
}

function mapaZoom(){
    mapa.style.width = "1000px"
    mapp.style.height ="700px"

}
function mapaNormal(){
    mapa.style.width = "600px"
    mapp.style.height ="450px"

}
