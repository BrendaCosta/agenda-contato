import { contatoService } from "../service/contato-service.js"
console.log(contatoService.listarContatos())






function buscarContato() {
    let input = document.querySelector('#buscar').value
    input = input.toLowerCase();
    
    console.log(input)
}