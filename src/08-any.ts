(()=>{
  // el any es cualquiera , casi es lo mismo que js
  // es quitarle el sistema de tipado estatico
  let myDinamicVar:any ;
  myDinamicVar = 100;
  myDinamicVar = '22';


  // se aconseja que el any no sea utilizado , es una mala practica
  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLocaleLowerCase();  /// tipo de cast
  console.log(rta);

  myDinamicVar = 1222;
  const rta1 = (<number>myDinamicVar).toFixed();  // un tipo de cast
  console.log(rta1);

})
