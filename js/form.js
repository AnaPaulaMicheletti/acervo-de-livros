/*document.querySelector, mesma coisa q, procure esse elemento na página*/
var botaoEnviar = document.querySelector("#enviar");
botaoEnviar.addEventListener("click", function(event){

    var dados = contato();

    /*Vai emitir mensagem de erro caso os campos estejam vazios*/
    var erros = validaInformacao(dados);
        if(erros.length > 0){
            exibeErros(erros);
            return;
        }
    
    /*Vai limpar o campo depois de enviar a mensagem*/
    var msgErro = document.querySelector("#mensagem-erro");
        msgErro.innerHTML = "";
        document.querySelector("form").reset();

    var msgSucesso = document.querySelector("#mensagem-sucesso");
        msgSucesso.innerHTML = "Mensagem enviada com sucesso!";
})

function contato() {
    var dados = {
        nome: document.querySelector("#nome").value,
        email: document.querySelector("#email").value,
        tel: document.querySelector("#tel").value,
        assunto: document.querySelector("#assunto").value,
        mens: document.querySelector("#mens").value,
    }
    return dados;
}

function validaInformacao(contato){
    var erros = [];

    if(contato.nome.length == 0){
        erros.push("O nome não pode estar em branco!");
    }

    if(contato.email.length == 0){
        erros.push("O E-mail não pode estar em branco!");
    }

    if(contato.tel.length == 0){
        erros.push("O telefone não pode estar em branco!");
    }

    if(contato.assunto.length == 0){
        erros.push("O assunto não pode estar em branco!");
    }

    if(contato.mens.length == 0){
        erros.push("O campo de mensagem nao pode estar em branco!");
    }
    return erros;
}

function exibeErros(erros){
    var ul = document.querySelector("#mensagem-erro");
        ul.innerHTML = "";

        erros.forEach(erro =>{
            var li = document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);
        });
}