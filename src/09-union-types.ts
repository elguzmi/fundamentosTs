// felxibilidad en el tipado

(()=>{
  let myUserId: string | number;
  myUserId =222
  myUserId = '33'

  function greeting( myText : string|number ){
    // actuar de una forma diferente cuando sea string o number
    if ( typeof myText === 'string'){
      console.log(myText.toLocaleUpperCase());
    }else{
      console.log(myText.toFixed());
    }
  }
  greeting('saludo');
  greeting( 212.22 );


})()
