function init(){
  var x = document.getElementById("submit"); 
  x.addEventListener('click', function(){
    const name = document.getElementById('submitted-name').value;
  sessionStorage.setItem("NAME", name);
  return;
  });
}
   
  window.addEventListener('load', init);