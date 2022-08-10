import { contatoService } from "../service/contato-service.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value
    const email = evento.target.querySelector('[data-email]').value
    const telefone = evento.target.querySelector('[data-telefone]').value
    const cep = evento.target.querySelector('[data-cep]').value
    const rua = evento.target.querySelector('[data-rua]').value
    const bairro = evento.target.querySelector('[data-bairro]').value
    const numero = evento.target.querySelector('[data-numero]').value
    const cidade = evento.target.querySelector('[data-cidade]').value
    const estado = evento.target.querySelector('[data-estado]').value

    contatoService.criarContatos(nome, email, telefone, cep, rua, bairro, numero, cidade, estado)
    .then(() =>{
        window.location.href = '..index.html'
    })
})