(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL'
    const login = ( data : { user :string , pass :string } )=>{
        console.log( data.user , data.pass )
    }

    login({
        user : 'Santi0111',
        pass : 'pass12333'
    })

    const products:any[] = [];
    const addProduct = ( data : {title : string , createdAt : Date , stock :number , size ?: Sizes} )=>{
      products.push(data);
    }

    addProduct({ title: 'Porducto1', createdAt : new Date , stock : 1})
    addProduct({ title: 'Porducto1', createdAt : new Date , stock : 1 , size : 'M'})

    console.log( products );
})()
