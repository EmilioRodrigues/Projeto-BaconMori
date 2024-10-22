const list = document.querySelector('ul')
let myLi = ""

menuOptions.forEach((product) => {
myLi +=
`       <li>
            <img src="./img/bacon-egg.png" alt="hamburger bacon-egg">
            <p>X-Bacon Egg</p>
            <p class="item-price">R$ 30,00</p>
        </li>
`
})

console.log(myLi)