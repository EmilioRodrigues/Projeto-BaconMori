const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')

let myLi = ""


function showAll(productsArray) {

    let myLi = ""

    productsArray.forEach((product) => {
        myLi +=
            `   <li>
                    <img src=${product.src}>
                    <p>${product.name}</p>
                    <p class="item-price">R$  ${product.price}</p>
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
    `<li>
    <p>O valor total dos itens é   : R$ ${totalValue}</p>
    </li>`


    console.log(totalValue)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonMapAll.addEventListener('click', mapAllItems)

buttonSumAll.addEventListener('click', sumAllItems)


