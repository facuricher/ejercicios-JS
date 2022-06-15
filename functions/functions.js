let sumarLosTres = (num1, num2, num3)=> num1 + num2 + num2

console.log(sumarLosTres(1, 2, 3))

let cuadrados = num => num * num

console.log(cuadrados(2, 2))

let decirHola = () => console.log(`HOLA!`)

decirHola()

let saludar = nombre =>{
    if(nombre === undefined){
        return `hola anonimo`
    } else {
        return `hola ${nombre}`
    }
}

console.log(saludar(`Facu`))


//arreglos de arrow functions 
let nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`
console.log(nombreCompleto('facu', 'richer'))

let exclamar = srt => srt
console.log(exclamar(`Hedy`))

let mayusculas = srt => srt.toLocaleUpperCase()
console.log(mayusculas(`grace`))

let minusculas =  srt => srt.toLowerCase()
console.log( minusculas('SHERYL'))

//PARAMETROS POR DEFAULT
 const longitudDelNombre = (nombre= 'facu') => nombre.length
 console.log(longitudDelNombre())



const saludarVisitanteWeb = nombreUsuario =>{
   return (!nombreUsuario) ? `hola anonimo` : `hola ${nombreUsuario}`
}

console.log( saludarVisitanteWeb())
console.log( saludarVisitanteWeb(`facu`))


let primerElemento = arr => arr[0]

console.log(primerElemento([]))
console.log(primerElemento([3, 2 , 1]))

//MATEMATICA SIMPLE
let triplicador = num => num * 3

let multiplicador = (num1, num2) => num1 * num2

let division = (num1, num2) => num1 / num2

let resto = (num1, num2) => num1 % num2

console.log(resto(division(multiplicador(triplicador(5),12),12),3))// siempre se resuelven los parentesis de adentro hacia afuera


//contarDeA_n
let contarDeA_n = (contar_de_a=3, contar_hasta=100) => {
    while(contar_de_a <= contar_hasta){
        console.log(contar_de_a)
        contar_de_a+=3
    }
}

console.log(contarDeA_n())

//FIZZBUZZ II
 let fizzbuzz2 = (palabra1,  palabra2, num_fin, fizz_num, buzz_num)=>{
        let contador= 1
        while (contador <= num_fin){
            if (!(contador %  fizz_num) && !(contador % buzz_num)){
                console.log(`${palabra1} ${palabra2}`)
            } else if (!(contador % fizz_num)){
                console.log(palabra1)
            } else if (!(contador % buzz_num)){
                console.log(palabra2)
            }else{
                console.log(`${contador},`)
            }
            contador++
        }
 }

 console.log(fizzbuzz2(`hola`, `mundo`, 50, 2, 7))

//FACTORIAL()


let factorial = (factorial) =>{
let resultado=1
let i = 1

while (factorial < 0) {
    console.log('el numero que ingreso es invalido')
    factorial= prompt('vuelva a ingresar un numero mayor o igual que 0')
}

while (i <= factorial) {
    resultado= resultado * i
    i++
}
console.log(resultado)
} 

factorial(10)