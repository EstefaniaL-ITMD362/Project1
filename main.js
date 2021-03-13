
function submit () {
  console.log("in");
  const name = document.getElementById('submitted-name').value;
  sessionStorage.setItem("NAME", name);
  return;
}



