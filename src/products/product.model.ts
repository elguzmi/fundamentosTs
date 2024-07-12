// el archvuo tiene un modelado de los datos
export type Sizes = 'S' | 'M' | 'L' | 'XL'
export type Product = {title : string , createdAt : Date , stock :number , size ?: Sizes}
