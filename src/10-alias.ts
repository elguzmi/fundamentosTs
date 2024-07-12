(()=>{
  type UserID = number|string ;
  let userId :UserID;


  // literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize : Sizes ;
  shirtSize = 'M'
  shirtSize = 'L'

  function greeting( userId : UserID , Sizes : Sizes){
    // actuar de una forma diferente cuando sea string o number
    if ( typeof userId === 'string'){
      console.log(userId.toLocaleUpperCase());
    }
  }

  greeting('122',"M");


})()
