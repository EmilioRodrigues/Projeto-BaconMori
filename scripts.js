const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        sytle: 'currency',
        currency: 'BRL',
    })

    return newValue
}

function showAll(productsArray) {

    let myLi = ""

    productsArray.forEach((product) => {
        myLi +=
            `   <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$  ${formatCurrency(product.price)}</p>
                </li>
            `
    })

    list.innerHTML = myLi
}

function mapAllItems() {
    const newPrices = menuOptions.map((product) => ({
        // name:   product.name,
        // price: product.price * 0.9,
        // vegan: product.vegan,
        // src: product.src

        // usando spread operator
        ...product, //comando SPREAD - espalha o array mas só altera o que vc determinar 
        price: product.price * 0.9, // alterado somente o preço dando desconto de 10%

    }))

    showAll(newPrices)


}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
    `
    <li>
    <p>O valor total dos itens é   : R$ ${formatCurrency(totalValue)}</p>
    </li>
    `


    console.log(totalValue)
}


function filterAllItems() {
    const filterJustVegan = menuOptions.filter((product) => product.vegan)


    showAll(filterJustVegan)
}


buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonMapAll.addEventListener('click', mapAllItems)

buttonSumAll.addEventListener('click', sumAllItems)

buttonFilterAll.addEventListener('click', filterAllItems)


