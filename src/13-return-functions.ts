(()=>{

  const calcTotal = (prices :number[]):number=>{
    let total = 0
    prices.forEach(item=>{
      total+= item

    })
    return total;
  }

  // tipo void porque no retorna nada
  const printTotal = (prices : number[]): void =>{
    const rta = calcTotal(prices)
    console.log( 'el total es : ' + rta );
  }

  const rta = calcTotal([1,3,4,3,2,3]);
  printTotal([1,3,4,3,2,3])
  console.log(rta);




})()
