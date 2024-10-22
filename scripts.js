const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')

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

function mapAllItems(){
    const newPrices = menuOptions.map ((product) => ({
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

buttonShowAll.addEventListener('click', () => showAll(menuOptions))

buttonMapAll.addEventListener('click', mapAllItems)




