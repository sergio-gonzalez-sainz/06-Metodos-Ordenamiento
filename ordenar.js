var method;
var tamaño;
var contadorArreglo = 0;
arreglo = new Array();
var ancho = screen.width; //Ancho de la pantalla
var altoCanvas = 0;
var indicadorBajar = 1;
var iteracion = 0;
var yPrimera = 1;
    //Variables de mi canvas
const miCanvas = document.getElementById("miCanvas");
miCanvas.setAttribute("width", ancho);
const context = miCanvas.getContext("2d");
context.strokeStyle = "#0000ff";

   //Escuchador para el contador de elementos 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("ContadorSize").innerHTML = contadorArreglo;
  });

function myFunction() 
    {
    //Treamos valor de método
    method = document.getElementById("Metodos").value;
    
    //Traer el número de elementos a ordenar
    tamaño = parseInt(document.getElementById("Size").value); 
    
    //Defino el alto del canvas
    var diametro = ancho / tamaño;
    altoCanvas = diametro * (tamaño);
    miCanvas.setAttribute("height", altoCanvas);
    
    dibujarCirculo(tamaño, iteracion);
      
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

//Dibujará el circulo
function dibujarCirculo(tamaño,iteracion)
{
  //Variables de los elementos (burbujas)
    var diametro = ancho / tamaño;                    /*Defino el diametro del circulo*/
    var radio = diametro / 2;                         /*Defino el radio*/
    var arrastre = radio - ((radio/10)*8);            /*Margen de arrastre para centrar el número */
    var size = ((radio/5) * 2);                       /*Tamaño del número de la burbuja*/
    var indice = 0;
   
  //Dibuja el arreglo
    for(var i = 1 ; i <= tamaño  ; i++)
    {
       var x = radio * ( 2*i - 1);                                          /*Cordenada en x para dibujar el circulo*/
       var y = radio * ( 2*yPrimera - 1);
       //dibujo Bola
       context.beginPath();
       context.fillStyle='#005CA3';
       context.arc(x,y,radio,0,Math.PI*2,true);                             /*Dibuja el circulo*/
       context.shadowOffsetX = 10;
       context.shadowOffsetY = 7;
       context.shadowBlur = 20;
       context.shadowColor = 'rgba(125,125,125,0.5)';
       context.stroke();
       context.fill();
       //dibujo Número
       context.beginPath();
       context.fillStyle='#ffffff';
       context.font = size + 'px Arial';                                    /*Define el tamaño de la letra*/
       context.fillText(arreglo[indice],x - arrastre ,y + arrastre);    /*Dibuja el label (número) de elemento*/
       context.stroke();
       context.fill();
 
       indice += 1 ;                                                        /*Contador del arreglo de elementos*/
    }
    yPrimera+=1;
    console.log("yPrimera:(funcion)"+yPrimera);
}

//Funcion de Bubble Sort
function bubbleSort(a,n)
{
    var cambio;
    var j;
    var estadoTermino = true;
    /*Este for controla las iteraciones */
    for(iteracion = 0 ; iteracion<n-1 && estadoTermino==true ; iteracion++)
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
        //document.getElementById("MostrarArreglo").innerHTML = a;
        dibujarCirculo(tamaño,iteracion);
        console.log("iteracion:" + iteracion);
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
