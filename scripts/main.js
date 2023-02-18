import { validateString, vAvg, checkAvg} from './validate.js';
import { paintcard, addStudent,modalAlert,select, addProfe} from './paint.js';


const btnAgregar = document.getElementById('btnAgregar');
const btnMostrar = document.getElementById('btnMostrar');
const selec = document.querySelector('#opcion');

/*Gnerar eventos
  1. colocar el metodo en el atrubuto onclick, onmouseover, onmouseout de la etiqueta.
  2.Mediante Propiedad 

*/

selec.onclick = function(){
  const typ = document.getElementById('opcion').value;
  
  select(typ);
}




  btnAgregar.onclick = function(){
      const op = document.getElementById('opcion').value;
      if(op == "estudiante"){
          const name = document.getElementById('nombre').value;
          const lastName = document.getElementById('apellido').value;
          const avg = parseFloat(document.getElementById('promedio').value);
         
          if(validateString(name) && validateString(lastName) && op == "estudiante"){
              if((!isNaN(avg)) && (vAvg(avg))){
                  addStudent(name, lastName, avg);
                  modalAlert("..");

              }else{
                  document.querySelector('#promedio').value="";
                  modalAlert("..");
              }
          }else{
              modalAlert("Datos inválidos, revisar los datos");
  
          }
          

      }if(op == "profesor"){
          const name = document.getElementById('nombre').value;
          const lastName = document.getElementById('apellido').value;
          const profesion = document.getElementById('profesion').value;
          const edad= document.getElementById('edad').value;

          if(validateString(name) && validateString(lastName) &&  validateString(profesion) && op == "profesor"){
              addProfe(name,lastName,profesion, edad);
              modalAlert(" .. ")
          }else{
              modalAlert(" .. ");
          }
          
      }
      
          document.querySelector('#nombre').value="";
          document.querySelector('#apellido').value="";
          document.querySelector('#promedio').value="";
          document.querySelector('#edad').value="";
          document.querySelector('#profesion').value="";
   }

          

  btnMostrar.addEventListener("click", function (){

  const op = document.getElementById('opcion').value;
  
  if(op == "profesor"){
      paintCard("PROFESOR");
  }
  if(op == "estudiante"){
      paintCard("ESTUDIANTE");
  }
  
});
/*function captura() {
    console.log('Hizo click');
}
*/