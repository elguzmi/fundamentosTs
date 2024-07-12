import { addProduct , products, calcStock } from './product.service'

addProduct({ title: 'Porducto1', createdAt : new Date , stock : 1 , size : 'M'})

addProduct({ title: 'bolsa plastica', createdAt : new Date , stock : 4 })

console.log(products)
const total = calcStock()
console.log(total);
