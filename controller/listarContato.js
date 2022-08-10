import { contatoService } from "../service/contato-service.js"
 const criaNovaLinha = (id, nome, email, telefone, cidade)=>{
        const linhaNovoContato = document.createElement('tr')
        const conteudo = `
                
                <td>${id}</td>
                <td>${nome}</td>
                <td>${email}</td>
                <td>${telefone}</td>
                <td>${cidade}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../detalha-contato.html?id=${id}"><ion-icon name="eye-outline"></ion-icon></a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">x</button></li>

                        
                    </ul>
                </td> `
                linhaNovoContato.innerHTML = conteudo
                linhaNovoContato.dataset.id = id
                return linhaNovoContato
    }
const tabela = document.querySelector('[data-tabela]')

    tabela.addEventListener('click', async (evento) =>{
        let botaoDeletar = evento.target.className =='botao-simples botao-simples--excluir'
        if(botaoDeletar){
            try{
                
            const linhaContato = evento.target.closest('[data-id]')
            let id = linhaContato.dataset.id
            await  contatoService.removerContato(id)
            linhaContato.remove()
            }catch(erro){
                console.log(erro)
                window.location.href="../erro.html"
            }
        }

    })
const render = async () =>{
    try{
        const listaContatos = await contatoService.listarContatos()
    
        listaContatos.forEach(elemento =>{
         tabela.appendChild(criaNovaLinha(elemento.id, elemento.nome,elemento.email, elemento.telefone, elemento.cidade))
     
     })
    }catch(erro){
        console.log(erro)
        window.location.href="../erro.html"
    }
}

render()
