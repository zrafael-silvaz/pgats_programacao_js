const dog1 = {
    nome: 'ralpf',
    minutos: 9,
    porte: 'medio'
}
const dog2 = {
    nome: 'lero',
    minutos: 15,
    porte: 'grande'
}
const dog3 = {
    nome: 'tuco',
    minutos: 2,
    porte: 'pequeno'
}

const tipoAtividade = (porte) => {
    switch (porte) {
        case 'pequeno':
            console.log('Brincar dentro de casa')
            break
        case 'medio':
            console.log('caminhada no quarteirao')
            break
        case 'grande':
            console.log('correr no parque')
            break
        default:
            console.log('Porte Invalido!')
    }
}

tipoAtividade(dog1.porte)
tipoAtividade(dog2.porte)
tipoAtividade(dog3.porte)
tipoAtividade('invalido')


// const funcaoPorte = (nome, peso) => {
//     let porte = peso <= 10 ? 'pequeno' : 'medio'

//     console.log('nome: ' + nome)
//     console.log('peso: ' + peso)
//     console.log('porte: ' + porte)
// }

// funcaoPorte(dog1.nome, dog1.peso)
// funcaoPorte(dog2.nome, dog2.peso)
