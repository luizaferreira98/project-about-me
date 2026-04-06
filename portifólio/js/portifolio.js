document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector("#contato");
 
  form.onsubmit = function(e) {
    e.preventDefault();
    alert("Mensagem enviada! :)");
    form.reset();
  };
});