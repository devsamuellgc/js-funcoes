const tela = document.getElementById('exemplo')
const arr = [1, 2, 3, 4, 5, 605, 7, 8, 9, 10]
const arr2 = [...arr, 55, 210, 490]

function soma(num1, num2) {
    return tela.innerHTML = `<p>${num1 + num2}</p>`
}

soma(15, 20)

function maiorNumero(lista) {
    let maior = lista[0]

    for (let num of lista) {
        if (num > maior) {
            maior = num
        }
    }

    return tela.innerHTML += `<p>${maior}</p>`
}

maiorNumero(arr)

function mediaLista(lista) {
    let soma = 0
    for (let num of lista) {
        soma += num
    }
    console.log(soma)
    console.log(lista.length)
    return soma / lista.length
}

console.log(mediaLista(arr2))