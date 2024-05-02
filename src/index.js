let cambio = document.getElementById("bordeCambio")  // esta llamando al class del borde gris

let foto = document.getElementById("foto")   

cambio.addEventListener("click", function() { //la funcion click se hace en el borde gris que esta encima de los dos gris como un vidrio

    if (document.getElementById("foto").src == "file:///C:/Users/PCADRIANA/Desktop/Cuaderno/Base/src/img/download.jpg") {
        document.getElementById("foto").src= "file:///C:/Users/PCADRIANA/Desktop/Cuaderno/Base/src/img/download3.jpeg"  
      } else {
        document.getElementById("foto").src="file:///C:/Users/PCADRIANA/Desktop/Cuaderno/Base/src/img/download.jpg";
    }

    //en vez de un switch se esta haciendo una decision
    //si la imagen es igual a la imagen, cambia 
})


///////////////////////////////////////////////////////////////////////////////////////////////////////

let musiquita = document.querySelector(".audiomp3");

    function music() {
        musiquita.play().catch(error => {
            // Autoplay was prevented, you can handle this case here
            console.error('Autoplay was prevented:', error);
        });
    }

    // Add an event listener to a user interaction event, such as a click
    document.addEventListener('click', function() {
        // Call the music function when the user interacts with the document
        music();
     });


////////////////////////////////////////////////////////////////////////


// Get the modal
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}



// When the user clicks anywhere outside of the modal, close it

//////////////////////////////////////////////////////////
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
}
/////////////////////////////////////////////////////////////////////
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function tres(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

///////////////////////////////////////////////////////////////////////
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}


var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var btn5 = document.getElementById("myBtn5");

// Get the <span> element that closes the modal
var span5 = document.getElementsByClassName("close5")[0];

// When the user clicks on the button, open the modal
btn5.onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span5.onclick = function() {
  modal5.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}



