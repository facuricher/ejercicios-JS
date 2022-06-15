let miAuto ={}
miAuto.marca = 'Ferrari'
miAuto.año = 2022
miAuto.nuevo= true
let propertyKey= 'modelo'
miAuto[propertyKey]='nuevo'
let  anotherPropertyKey= 'precio'
miAuto[anotherPropertyKey]= 2.000000
let  nextProperty = 'color'
miAuto[nextProperty]= 'rojo'

for(let propiedad in miAuto){
    console.log(propiedad)
}


let peliculas =[{titulo:'los piratas del caribe' , rating: 4, loHasVisto:true},
                {titulo:'rapidos y furiosos', rating: 5, loHasVisto:true},
                {titulo:'la vida es bella', rating: 5, loHasVisto: false},
                {titulo:'Norbit', rating:3 , loHasVisto: true}
]

for(let i = 0; i< peliculas.length; i++){
    let estadoPelicula=''
    for(let propiedad in peliculas[i]){
        if( propiedad == ['titulo']){
             estadoPelicula+= peliculas[i][propiedad]
        } else if(propiedad == ['rating']){
             estadoPelicula+=` - ${peliculas[i][propiedad]} estrellas`
        } else if( peliculas[i][propiedad] == true){
             estadoPelicula=`has visto ${estadoPelicula}`
        } else if(peliculas[i][propiedad] == false){
             estadoPelicula=` no has visto ${estadoPelicula}`
        }
    }
    console.log(estadoPelicula)
}
/*for(let i = 0; i < peliculas.length ; i++) {
     console.log(`${peliculas[i].loHasVisto} "${peliculas[i].titulo}" - ${peliculas[i].rating}`)
   }*/


let numeros = [2, 4, 5, 37, 0];
let numeros_duplicados = {};
//numeros.forEach(num=>numeros_duplicados[num] = num)
let numerosDuplicados= numeros.map(num=> num * 2)//duplicamos los valores del arreglo 
numerosDuplicados.forEach(num=> numeros_duplicados[(num/2)] = num)//iteramos el arreglo numerosDuplicados, pero en cada vuelta le decimos que el nuevo valor del objeto numneros_duplicados tome el valor de numerosDuplicados mediante la funcion forEach
console.log(numeros_duplicados)