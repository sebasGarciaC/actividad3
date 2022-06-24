


var datos =[]  // nombre

var datos2 = []  // apellido

var datos3 = [] // direccion

datos = JSON.parse (localStorage.getItem('nombre'))


var guardarnavegacion = function(){
    localStorage.setItem('nombre',JSON.stringify(datos))
}

// localStorage.setItem('datos',datos)



   //---- GUARDAR - NOMBRE

var guardarnombre = function(){                 


    var texto = document.getElementById('nombre').value

    console.log(texto)
    datos.push(texto) 

    guardarnavegacion()
   
}

    //----- GUARDAR  - APELLIDO

var guardarapellido = function(){                 


    var texto = document.getElementById('apellido').value

    console.log(texto)
    datos2.push(texto) 
    localStorage.setItem('apellido',JSON.stringify(datos2))
}


   // --- GUARDAR - DIRECCION

var guardardireccion = function(){                 


    var texto = document.getElementById('direccion').value

    console.log(texto)
    datos3.push(texto) 
    localStorage.setItem('direccion',JSON.stringify(datos3))    // con serItem almaceno en el local storage
}




                //--- MOSTRAR  - NOMBRE

                var mostrarnombre = function(){            

                    console.log(datos)   
                    console.log(localStorage.getItem('nombre'))

                    datos = JSON.parse (localStorage.getItem('nombre'))  // video 6 ??

                }

                    // MOSTRAR  - APELLIDO
                    
 
                var mostrarapellido = function(){            

                    console.log(datos2)   
                    console.log(localStorage.getItem('apellido'))

                }

                // MOSTRAR - DIRECCION

                var mostrardireccion = function(){            

                    console.log(datos3)   
                    console.log(localStorage.getItem('direccion'))

                }





var modificar = function(){
    var posicion = document.getElementById('modificar').value
    datos[posicion] = document.getElementById('nombre').value

    guardarnavegacion()

}


var eliminar = function(){

    var posicion = document.getElementById('eliminar').value
    datos.splice(posicion,1)

    guardarnavegacion()

}


            var cambiar = function(){
                var micontenido = document.getElementById('contenidonombre').innerHTML = localStorage.getItem('nombre')
                
                console.log(micontenido)
            }


            var cambiarapellido = function(){
                var micontenido = document.getElementById('contenidoapellido').innerHTML = localStorage.getItem('apellido')
                
                console.log(micontenido)
            }

            var cambiardireccion = function(){
                var micontenido = document.getElementById('contenidodireccion').innerHTML = localStorage.getItem('direccion')
                
                console.log(micontenido)
            }



            var ciclofor = function(){
               
                for (let a = 1; a <= 200 ; a++) {

                    // console.log( 70 + ' ' + 'x' + ' '+ a + ' ' +  '=' + ' ' + (a*70))

                    document.getElementById('for').innerHTML += '<div> ' + 70 + ' ' + 'x' + ' '+ a + ' ' +  '=' + ' ' + (a*70) +   ' </div>'
                    
                }
            }




// ---------------------------------







// var datos =[]

// // localStorage.setItem('datos',datos)

// var guardarnombre = function(){                 // GUARDAR


//     var texto = document.getElementById('nombre').value

//     console.log(texto)
    
//     datos.push(texto) 

//     localStorage.setItem('datos',JSON.stringify(datos))
       

// }

// var guardarapellido = function(){                 // GUARDAR


//     var texto = document.getElementById('apellido').value

//     console.log(texto)
    
//     datos.push(texto) 

//     localStorage.setItem('datos',JSON.stringify(datos))
       

// }


// var mostrar = function(){               // mostrar

//     console.log(datos)   
//     console.log(localStorage.getItem('datos'))

// }


// var modificar = function(){
//     var posicion = document.getElementById('modificar').value
//     datos[posicion] = document.getElementById('nombre').value

// }


// var eliminar = function(){

//     var posicion = document.getElementById('eliminar').value
//     datos.splice(posicion,1)

// }


