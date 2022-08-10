const listarContatos = ()=>{
    return fetch(`http://localhost:3000/contatos`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel listar os contatos')
    })
}

const criarContatos = (nome, email, telefone, cep, rua, bairro,numero, cidade, estado) => {
    return fetch(`http://localhost:3000/contatos`, {
        method: 'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone,
            cep: cep,
            rua:rua,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            estado:estado
        })
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.nody
        }throw new Error('Não foi possivel adicionar novo contato')
    }) 
    
}
const removerContato = (id) =>{
    return fetch(`http://localhost:3000/contatos/${id}`,{
        method: 'DELETE'
    }).then(resposta =>{
        if(!resposta.ok){
            throw new Error('Não foi possivel remover cliente')
        }
    })
}

const detalharContato = (id)=>{
    return fetch(`http://localhost:3000/contatos/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }throw new Error('Não foi possivel detalhar o cliente')
    })
}
const atualizarContato = (id,nome, email, telefone, cep, rua, bairro,numero, cidade, estado) =>{
    return fetch(`http://localhost:3000/contatos/${id}`,{
        method: 'PUT',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            telefone: telefone,
            cep: cep,
            rua:rua,
            bairro: bairro,
            numero: numero,
            cidade: cidade,
            estado:estado
        })
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }throw new Error('Não foi possivel atualizar cliente')
    })
}



export const contatoService = {
    listarContatos,
    criarContatos,
    removerContato,
    detalharContato,
    atualizarContato
}
