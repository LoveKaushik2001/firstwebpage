//onloading of page show only content "Lorem" 
function page(){
  document.getElementById("sp").style.display="none";
  document.getElementById("lp").style.display="none";
}

//switching to login page

function loginpage(){
    var s=document.getElementById("sp");
    var l=document.getElementById("lp");
    var h=document.getElementById("here");
    var d=document.getElementById("demo");
    if (l.style.display !== l) {
        s.style.display = "none";
        d.style.display = "none";
        h.innerHTML=l.innerHTML;
      }    
    }

//switching to signup page

function signup(){
     var s=document.getElementById("sp");
     var l=document.getElementById("lp");
     var h=document.getElementById("here"); 
     var d=document.getElementById("demo"); 
     if (s.style.display !== s) {
        l.style.display = "none";
        d.style.display = "none";
        h.innerHTML=s.innerHTML;
      } 
}

//switching to home page

function home(){
     var s=document.getElementById("sp");
     var l=document.getElementById("lp");
     var h=document.getElementById("here"); 
     var d=document.getElementById("demo"); 
     if (d.style.display !== d) {
        l.style.display = "none";
        s.style.display = "none";
        h.innerHTML=d.innerHTML;
        } if(document.getElementById("demo").innerHTML === d.innerHTML){
        d.style.display="none";
      }
  }




  //validation for login 

  function check(){
      var name=document.getElementById("name").value;
      var age=document.getElementById("age").value;
      var gender=document.getElementById("gender").value;
      var email=document.getElementById("email").value;
      if(name==""){
      alert("Enter the name");
      return false; 
    }    
    if(isNaN(age)){
      alert("Enter a number!");
      return false; 
    }
    else if(age<17 || age>50){
      alert("Enter age between 17 and 50");
      return false; 
    }
    if(gender=="none"){
      alert("It can't be selected");
      return false;
    }
    if(email.indexOf("@")==-1){
      alert("write a valid email-id");
      return false;
    }
    else{
      alert("Conformation box"); 
    }
 }

 //work on login page
function verify(){
  var uname=document.getElementById("username").value;
  var password=document.getElementById("pass").value;
  if(uname == "lovekaushik2001" && password == "itsme"){
    alert("Welcome love kaushik");
  }
  else{
    alert("Invalid username or password");
    return false;
  }
}
