const produtos = [
    {
        nome: 'Mouse',
        preco: 69,
    },
    {
        nome: 'Teclado',
        preco: 150
    }
]
const total = produtos.reduce((a, b) => a + b.preco, 0)
console.log(total)



/*const EmDolar = produtos.map(p => p.preco * 4)

console.log(EmDolar)*/ //usar o map() ira me trazer uma nova lista com novos valores gerados a partir do objeto padraao mas n modifica a padrão