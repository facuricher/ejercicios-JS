console.log('hello word')

//LISTA DE SUPER PARTE I
let listaDeSuper = []

listaDeSuper[0]='almendras'
listaDeSuper[1]='cholate'
listaDeSuper[2]='leche'
listaDeSuper[3]='carne'
listaDeSuper[4]='ravioles'

listaDeSuper[0]

//variable que llama al ultimo elemento
let ultimoElemento = listaDeSuper.length - 1

//LISTA DE SUPER PARTE II
listaDeSuper.push('cafe', 'azucar')
listaDeSuper.unshift('jugo', 'naranjas')
listaDeSuper.length //nos devuelve cuantas elementos tenemos en el arreglo en este mopmento 
let noHabia = listaDeSuper.pop()//quita el primero de  la lista 
let comprado = listaDeSuper.shift()//quitra el primero de la lista
listaDeSuper.length //nos dice cuantos elemoentos tenemos ene el arreglo en este momento 

//EJERCICIO BUSCADOR DE AMIGOS 
let amigos =['juan','pepe','jorge','francisco','juan']
function buscadorDeAmigos(nombre){
    let resultado = amigos.indexOf(nombre)

    if(resultado === -1){
        console.log(`seria bueno tener un amigo que se llame ${nombre}`)
    }else{
        console.log(`tengo un amigo que se llama ${nombre} y esta en el indice ${resultado} `)
    }
}
console.log(buscadorDeAmigos('pepe'))


//ejercicios metodo .map
let numbers = [3, 7, 13, 99]
 let dobles  = numbers.map(x => x * 2)
 console.log(dobles)


let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
let frasesExclamadas = frases.map(exclamacion => `¡${exclamacion}!`)
console.log(frasesExclamadas)


const playlist = [
    { nombre: 'Everlong', duracion: '120' },
    { nombre: 'The Pretender', duracion: '168' },
    { nombre: 'Learn to Fly', duracion: '204' }
   ];
const minutos = playlist.map(x => (x.duracion) / 60)
console.log(minutos)


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 
let fizzBuzz = numeros.map(x => {
    if(!(x % 3) && !(x % 5)){
        return 'fizzbuzz'
    } else if (!(x % 3)){
        return 'fizz'
    } else if (!(x % 5)){
        return 'buzz'
    }else{
        return x
    }
})
console.log(fizzBuzz)


let number = [6, 1, 34, 94, 3, 17];
let mul = number.reduce((acc, el) => acc * el)
console.log(mul)


let num = [3, 7, 6, "13", 2, 24, 99];
let impares = num.reduce((acc,el) =>{
    if(el %  2 == 1){
        acc.push(parseFloat(el))
    }
    return acc
}, [])
console.log(impares)


let numb = [5, 4, 1, 9, 2]
let max = numb.reduce((acc,el) => Math.max(acc, el), 0)//math.max nos devuelve el numero mas grande 
console.log(max)


let notasDeTPs = [4, 7, 8, 5, 10]
let notaFinal = notasDeTPs.reduce((acc, el)=> (acc + el / 5),0)
console.log(notaFinal)


let numer = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]
let sinRepetir = numer.reduce((acc, el)=>{
    if(acc.indexOf(el) === -1){
        acc.push(el)
    }
    return acc
}, [])
console.log(sinRepetir)


let join1 = arreglo => arreglo.reduce((acc, el)=> acc + el, "")
console.log(join1([1,2,3]))


//lista de super parte III
let logiItems= (ar)=>{
    for(let i=0; i < ar.length; i++){
        console.log(ar[i])
    }
}
logiItems(listaDeSuper)
let invento = [1,2,3,4,5,6,7,8,9]
logiItems(invento)

let logiItems2= ar=>{
    ar.forEach(elemento => console.log(elemento))
}
logiItems2(amigos)

let printReverse = algo=>{
    for(let i= algo.length-1; i>= 0; i--){
        console.log(algo[i])
    }
}
printReverse(amigos)

//let reverser = array1=> console.log(array1.reverse())
//reverser([1,2,3,4])

let reversa = (arra1)=>{
 let newReverse = arra1.slice()
 console.log(newReverse.reverse())
}
reversa([1, 2, 3, 4])


//sumArray
let sumArray = array2=> array2.reduce((acc, el)=> acc + el, 0)
console.log(sumArray([-5,100]))


//Array.join()
let join= array3=> array3.reduce((acc, el)=> acc + el, "")
console.log(join(["h","o","l","a"]))


//FILTER
let aprobadas = notas=>{
  return notas.filter(nota => nota >= 5)
}
console.log(aprobadas([3, 6, 8, 21]))


let numeros1 = [3, 7, 6, 13, 2, 24, 99];
let pares = numeros1.filter(num =>{
    if((num % 2) == 0){
        return num
    }
})
console.log(pares)


let palabras1 = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']
let palabrasCortas = palabras1.filter(pal =>{
    if(pal.length <= 3){
        return pal
    }
})
console.log(palabrasCortas)

let personas = [ { nombre: 'Ana', edad: '28'},
{ nombre: 'María', edad: '24' }, { nombre: 'José', edad: '31' }
]
let personasConMasDe27 = personas.filter(per=> per.edad > 27)
console.log(personasConMasDe27)


const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [ 1, 2, 3],
    'Dolore.'
   ]

let soloStrings = mix.filter(str=>{
    if(typeof(str) == 'string'){
        return str
    }
})
console.log(soloStrings)