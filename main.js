function init(){
  var x = document.getElementById("submit"); 
  x.addEventListener('click', function(){
  const name = document.getElementById('submitted-name').value;
  var students = []
  students.push(name);
  sessionStorage.setItem("NAME", name);
  sessionStorage.setItem("STUDENTS", students);

  return;
  });
}
   
  window.addEventListener('load', init);