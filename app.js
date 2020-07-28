function quizApp(){
var score = 0;
var right_Ans1 = document.getElementById("q1-a1");
var option_two = document.getElementById("q1-a2");
var option_three = document.getElementById("q1-a3");
if(right_Ans1.checked == true){
  score++
  alert("Q1: Right answer")
}
else{
  alert("Q1: Wrong answer")
}

var option_one = document.getElementById("q2-a1");
var right_Ans2 = document.getElementById("q2-a2");
var option_three = document.getElementById("q2-a3");
if(right_Ans2.checked == true){
  score++
  alert("Q2: Right answer")
}
else{
  alert("Q2: Wrong answer")
}

var option_one = document.getElementById("q2-a1");
var option_two = document.getElementById("q2-a2");
var right_Ans3 = document.getElementById("q3-a3");
if(right_Ans3.checked == true){
  score++
  alert("Q3: Right answer")
}
else{
  alert("Q3: Wrong answer")
}
alert("Your total score is: "+score);
}

function diselect(){
  var btn1 = document.getElementById("q1-a1").checked=false;
  var btn2 = document.getElementById("q1-a2").checked=false;
  var btn3 = document.getElementById("q1-a3").checked=false;
  var btn4 = document.getElementById("q2-a1").checked=false;
  var btn5 = document.getElementById("q2-a2").checked=false;
  var btn6 = document.getElementById("q2-a3").checked=false;
  var btn7 = document.getElementById("q3-a1").checked=false;
  var btn8 = document.getElementById("q3-a2").checked=false;
  var btn9 = document.getElementById("q3-a3").checked=false;
}