var method;
var tamaño;
var contadorArreglo = 0;
arreglo = new Array();
 

function myFunction() {
    //Treamos valor de método
    method = document.getElementById("Metodos").value;
    
    //Traer Tamaño
    tamaño = parseInt(document.getElementById("Size").value);  
    
    //Selecciono función del Método
    switch (method)
    {
        case "1":
            bubbleSort(arreglo,tamaño);
        break;

        case "2":
            insertionSort();
        break;
    }
}

//Funcion de Bubble Sort
function bubbleSort(a,n)
{
    
    var cambio;
    var j;
    var iteracion;
    var estadoTermino = true;
    /*Este for controla las iteraciones */
    for(iteracion=0 ; iteracion<n-1 && estadoTermino==true ; iteracion++)
    {
        estadoTermino = false; /*Esta variable me ayuda a que no haya iteraciones adicionales  */
        for(j=0 ; j<n-iteracion-1 ; j++)
        /*Este for hace o no el cambio */
        {
            if(a[j] > a[j+1])
            {
                estadoTermino = true; /*Cambia el estado para que pase en el for en la siguiente iteración */
                cambio = a[j];
                a[j] = a[j+1];
                a[j+1] = cambio;
            }
        }
        document.getElementById("MostrarArreglo").innerHTML = a;
        console.log(a);
    }
}

//Funcion de Insertion Sort
function insertionSort()
{
    alert("Im Insertion Sort");
}

function guardar()
{
    var x = parseInt(document.getElementById("Element").value);
    document.getElementById("Demo").innerHTML = x;
    arreglo.push(x);
    contadorArreglo = contadorArreglo + 1;
    document.getElementById("ContadorSize").innerHTML = contadorArreglo;
    document.getElementById("Element").value = "";
    
    tamaño = parseInt(document.getElementById("Size").value);
    if(tamaño == contadorArreglo)
    {
        document.getElementById("Estado").disabled=true;
        alert("Can start");
    }
}

