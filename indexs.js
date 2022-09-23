//count variable
let count = 0;
//Capturo los valores de las etiquetas del DOM
const valor = document.querySelector("#section__value");
//Obtengo todos los botones "btn" del DOM
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    //Agrego un Listener para el evento click en alguno de los botones
    btn.addEventListener("click", function (e) {
      const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        console.log("Hice un click en decrementar")
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        console.clear();
        count = 0;
      }
  
      if (count > 0) {
        valor.style.color = "green";
      }
      if (count < 0) {
        valor.style.color = "red";
      }
      if (count === 0) {
        valor.style.color = "#222";
      }
      valor.textContent = count;
    });
  });