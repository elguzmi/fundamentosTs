(()=>{

  // undefined no estra dentro de los conjutnos de datos

  // queda como tipo anu
  let myNull:null = null;
  let myUndefined:undefined = undefined;

  let myNumber:number|null = null;

  function hi( name:string|null){
    let hello = 'hola ';
    if( name ){
      hello += name
    }else{
      hello += 'no body'
    }
    console.log(hello);
  }

  function hiV2( name:string|null){
    let hello = 'hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log(hello);
  }
  hiV2( 'Nicolas' )
  hiV2( null )


})()
