
function start(){

alert('WELCOM TO OUR WORLD.')

var answer = prompt ("YOU WANT TO BE ELEGANC?")

if(answer == "yes"){confirm("SO FOLLOW US. ")}

else if(answer == "no"){confirm("BELIVE ME,YOU LIKE TO BE HERE" )
  }
}
function numberofimg(){
var numberofimg =prompt("How beautiful do you see yourself out of 10?")
while (numberofimg >= 10){
numberofimg=prompt("How beautiful do you see yourself out of 10?")
}
for(var i=0;i<numberofimg;i++){
document.write("<img ='img' src='https://media.istockphoto.com/vectors/funny-lettering-illustration-of-youre-gorgeous-vector-id1186676882' />" )
}
}

start();
numberofimg();
