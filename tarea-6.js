const $botonCantidadIntegrantes = document.querySelector("#boton-cantidad-integrantes");

$botonCantidadIntegrantes.onclick = function(){
    const $cantidadIntegrantesFamilia = document.querySelector("#cantidad-de-integrantes-familia").value;
    console.log($cantidadIntegrantesFamilia)
    crearCantidadIntegrantes($cantidadIntegrantesFamilia);
    
    return false;
};

const $botonBorrarDatos = document.querySelector("#Boton-borrar-datos");
$botonBorrarDatos.onclick = function(){
    const $integrantesFamilia = document.querySelector("#integrantes-familia");
    $integrantesFamilia.innerHTML = ""; 
}

function crearCantidadIntegrantes($cantidadIntegrantesFamilia){
    
    for(let i =0; i < $cantidadIntegrantesFamilia; i++){
     crearIntegranteFamilia(crearCantidadIntegrantes, i+ 1);
    }
}


function crearIntegranteFamilia ($cantidadDeIntegrantesFamilia, index){
    const $integrantesFamilia = document.querySelector("#integrantes-familia");

    const nuevoLabel = document.createElement("label");
    nuevoLabel.textContent = `Edad del integrante  ${index}; `

    const nuevoInput = document.createElement("input");
    nuevoInput.type = "number";
    nuevoInput.id = `integranteNumero${index}`; 

    $integrantesFamilia.appendChild(nuevoLabel);
    $integrantesFamilia.appendChild(nuevoInput);

}


const $botonCalcular = document.querySelector("#calculos-sobre-edades");
$botonCalcular.onclick = function () {
    const $cantidadIntegrantesFamilia = document.querySelector("#cantidad-de-integrantes-familia").value;
    calcularEstadisticasEdades($cantidadIntegrantesFamilia);
}

function calcularEstadisticasEdades(cantidadIntegrantes){
    const edades = [];
    
    for (let i = 1; i <= cantidadIntegrantes; i ++){
        const input = document.querySelector(`#integranteNumero${i}`);
        const edad = parseInt(input.value, 10);
        edades.push(edad);
    }
        let mayorEdad = 0;
        for(let i = 0; i< edades.length; i++){
            if(edades [i] > mayorEdad){
                mayorEdad = edades[i]
            }
            
        }

        let menorEdad = edades[0];
        for (let i=0; i< edades.length;i++){
            if(edades [i]< menorEdad ){
                menorEdad = edades[i]
            }
            
        }    
       
    let promedio = 0;
    let suma = 0;
    for(let i = 0; i<edades.length; i++){
        suma = suma + edades[i]
        promedio = suma / edades.length
    }
    const $mayorEdad = document.querySelector("#mayor-edad");
    $mayorEdad.value =  mayorEdad;

    const $menorEdad = document.querySelector("#menor-edad")
    $menorEdad.value = menorEdad;

    const $promedio = document.querySelector("#promedio-edad")
    $promedio.value = promedio;
     
}
   















