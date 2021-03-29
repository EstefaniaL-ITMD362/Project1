function init(){
  document.getElementById("result-name").innerHTML = sessionStorage.getItem('NAME');
  
}

window.addEventListener('load', init);