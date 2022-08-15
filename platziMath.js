const platziMath = {};

platziMath.mediaAritmetica = function calcularMediaAritmetica(array){
    let sumaArray = array.reduce((suma,item) => suma + item,0);
  let mediaAritmetica = sumaArray/array.length;

  return mediaAritmetica;

  // if(sumaArray % 2 === 0){
  //    console.log('La suma es: '+sumaArray+ ' y es un número par' );
  // } else if (sumaArray % 2 === 1){
  //  console.log('La suma es: '+sumaArray+ ' y es un número impar' );
  // }

}

platziMath.esPar = function esPar (array){
    if(array.length % 2 === 0){
        return true;
    }
    else {
        return false;
    }
}

platziMath.esImpar = function esImpar (array) {
    if(array.length % 2 === 1){
        return true;
    }
    else {
        return false;
    }
}

platziMath.calcularMediana = function calcularMediana (array) {
    const  ordenedList = platziMath.ordenarLista(array); 
    let par = platziMath.esPar(ordenedList);
    let impar = platziMath.esImpar(ordenedList);

    if(par === true){
        let pos1 = Math.ceil((array.length)/2);
        let pos2 = Math.ceil(((array.length)/2)-1);
        let mediana = (array[pos1] + array[pos2])/2;
        return mediana;
    } else if (impar === true){
        let posicion = Math.ceil(((array.length)/2)-1);
        let mediana = array[posicion];
        return mediana;
    }
    return mediana;
}

platziMath.calcularModa = function calcularModa (array) {
    const listaCount = {};

    for(i=0; i < array.length; i++){
        const element = array[i];
        if(listaCount[element]){
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }
    

    const listaArray = Object.entries(listaCount);

    let newArrayOrdered = listaArray.sort((a,b) => a[1]-b[1]);

    const lastElement = newArrayOrdered[(newArrayOrdered.length) - 1];

    console.log('La moda es',lastElement[0]);
    return lastElement[0];
}


platziMath.ordenarLista =function ordenarLista(array){
   const orderList  = array.sort((a,b) => a-b);
   return orderList;
}


console.log(platziMath);

