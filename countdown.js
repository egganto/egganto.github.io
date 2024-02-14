function checkPass(){
  let password = document.getElementById("pswd").value;
  if (password == "laszloszabo") {
    window.location="welcome.html";
  } else {
    alert("wrong password ^_^ try again! hint: your first name + last name");
  }
}

function reveal(){
  document.getElementById('main').style.display = 'block';
};

