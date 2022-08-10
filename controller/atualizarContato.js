import { contatoService } from "../service/contato-service.js"

(async () =>{
    const pegaURL = new URL(window.location)
    const id = pegaURL.searchParams.get('id')
    console.log(id)

    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector("[data-email]")
    const inputTelefone = document.querySelector('[data-telefone]')
    const inputCep = document.querySelector('[data-cep]')
    const inputRua = document.querySelector('[data-rua]')
    const inputBairro = document.querySelector('[data-bairro]')
    const inputNumero = document.querySelector('[data-numero]')
    const inputCidade = document.querySelector('[data-cidade]')
    const inputEstado = document.querySelector('[data-estado]')

   try{
    const dados = await contatoService.detalharContato(id)
    inputNome.value = dados.nome
    inputEmail.value = dados.email
    inputTelefone.value = dados.telefone
    inputCep.value = dados.cep
    inputRua.value = dados.rua
    inputBairro.value = dados.bairro
    inputNumero.value = dados.numero
    inputCidade.value = dados.cidade
    inputEstado.value = dados.estado




   }catch(erro){
        console.log(erro)
        window.location.href="../erro.html"
   }

    const formulario = document.querySelector('[data-form]')

        formulario.addEventListener('submit', async (evento) =>{
        evento.preventDefault()
        try{
            await contatoService.atualizarContato(id,inputNome.value, inputEmail.value, inputTelefone.value, inputCep.value, inputRua.value,inputBairro.value, inputNumero.value,inputCidade.value,inputEstado.value)
            window.location.href="./sucesso.html"
        }catch(erro){
            console.log(erro)
            window.location.href="../erro.html"
       }
    })

})()

