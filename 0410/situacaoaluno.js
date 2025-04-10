function calcularMedia() {
    document.getElementById('mensagens').innerHTML = "";
    let erros = "";
    const nome = document.getElementById('nome').value;

    if (nome === '') {
        erros += "Informe o nome <br>"
    }

    let nota1 = document.getElementById('nota1').value;
    if (nota1 === '') {
        erros += 'Informe a Nota1<br>';
    } else {
        nota1 = Number(nota1)
    }

    let nota2 = document.getElementById('nota2').value;
    if (nota2 === '') {
        erros += 'Informe a Nota2';
    } else {
        nota2 = Number(nota2)
    }

    if (erros.length === 0) {
        const media = (nota1 + nota2) / 2;

        document.getElementById('media').textContent = `Média das notas: ${media.toFixed(1)}`;

        const resultado = document.getElementById('resultado');

        if (media >= 7) {
            resultado.style.color = 'blue';
            resultado.textContent = `Parabéns, ${nome}! Você foi aprovado.`
        } else {
            resultado.style.color = 'red';
            resultado.textContent = `Sinto muito, ${nome}! Você foi reprovado.`
        }
    } else {
        document.getElementById('mensagens').innerHTML = erros;
    }

}

var button = document.getElementById('btnResultado');
button.addEventListener('click', calcularMedia);