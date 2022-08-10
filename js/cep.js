async function buscarEndereco(cep){
    var mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro){
            throw Error("CEP não existente")
        }
        let endereco = document.querySelector('#endereco')
        let bairro = document.querySelector('#bairro')
        let cidade = document.querySelector('#cidade')
        let estado = document.querySelector('#estado')

        endereco.value = consultaCEPConvertida.logradouro
        bairro.value = consultaCEPConvertida.bairro
        cidade.value = consultaCEPConvertida.localidade;
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida;

    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente</p>`
        endereco.value = ""
        bairro.value = ""
        cidade.value = ""
        estado.value = ""
        console.log(erro)
    }
}
let cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscarEndereco(cep.value) )

const maisInformacoes = document.querySelector(".mais-info")

function maisInfo() {
    maisInformacoes.classList.toggle("ativo");
}
