(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  function createProductToJson(title : string , createdAt : Date , stock :number , size : Sizes){
    return {
      title, createdAt , stock , size
    }
  }

  const producto1 =  createProductToJson('p1' , new Date , 12 , 'XL');
  console.log(producto1.size);


  const createProductToJsonV2 = (title : string , createdAt : Date , stock :number , size ?: Sizes )=> ({
      title, createdAt , stock , size
  })

  const producto2 =  createProductToJsonV2('p1' , new Date , 12 );
  console.log(producto2);

})()
