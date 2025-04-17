function cadastrarCliente() {
    const nome = document.getElementById('nome').value;
    const idade = Number(document.getElementById('idade').value)
    const saldo = Number(document.getElementById('saldo').value)
    const temCartao = Boolean(document.getElementById('cartao').value)

    const resposta = document.getElementById('resposta')
    
    let mensagem = `Obrigado ${nome}, continue sendo nosso cliente!`
    if (saldo < 0) {
        mensagem = `Prezado ${nome}, você está usando o cheque especial! Precisa de um empréstimo?`
        resposta.style.color = 'red'
    } else if (saldo > 10000) {
        resposta.style.color = 'green'
        mensagem = `${nome}, você tem um valor considerável em conta corrente! Vamos aplicar o seu dinheiro?`
    }

    resposta.textContent = mensagem
}

button = document.getElementById('cadastrar')
button.addEventListener('click', cadastrarCliente)