function roubo(nota) {
    let esquerda = 0;
    let direita = nota.length - 1;

    while (esquerda < direita) {
        let soma = nota[esquerda] + nota[direita];
        if (soma === 150) {
            return 'Suspeito';
        } else if (soma < 150) {
            esquerda++;
        } else {
            direita--;
        }
    }

    return 'Livre';
}

console.log(roubo([10, 20, 30, 40, 50, 110]))
console.log(roubo([150]))