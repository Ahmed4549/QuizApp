var quecount = 0;
var score =0;
var questionsArray = [
  {
      number: "Question 1",
      question: "Full Form of RAM is?",
      answer: "random access memory",
      options: [
          "random access memory",
          "random actual memory",
          "right access memory",
          "none of the above",
      ]
  },
  {
    number: "Question 2",
      question: "Full Form of CPU is?",
      answer: "central processing unit",
      options: [
          "central program unit",
          "central processing unit",
          "control panel unit",
          "none of the above",
      ]
  },
  {
    number: "Question 3",
      question: "Full Form of E-MAIL is?",
      answer: "electronic mail",
      options: [
          "electric mail",
          "easy mail",
          "electronic mail",
          "none of the above",
      ]
  },
  {
    number: "Question 4",
      question: "Full Form of LCD is?",
      answer: "liquid crystal display",
      options: [
          "liquid crystal display",
          "light crystal display",
          "liquid cold display",
          "none of the above",
      ]
  },
  {
    number: "Question 5",
      question: "Full Form of SEO is?",
      answer: "none of the above",
      options: [
          "safe engine optimization",
          "secure engine optimization",
          "secret engine optimization",
          "none of the above",
      ]
  },
];

function User_Name(){
  sessionStorage.clear();
  var UserName1 = document.getElementById("UserName");
  if(UserName1.value == "" || UserName1.value == " "){
    alert("Please Enter Your name first");
  }
  else {
    sessionStorage.setItem("name",UserName1.value);
    startQuiz();
  }
}
function startQuiz(){
  window.location.href = "index.html";
}
function showQuestion(e){
  //ques number
  var Que_Number = document.getElementById("QueNumber");
  Que_Number.innerHTML = questionsArray[e].number;
  //question
  var question_element = document.getElementById("questionElement");
  question_element.innerHTML = questionsArray[e].question;
  //options
  var option_Element = document.getElementsByClassName("optionElement");
  for(var j=0; j < option_Element.length ; j++){
      option_Element[j].innerHTML = questionsArray[e].options[j];
  }
}
function nextQuestion(){
  quecount++;
  validate(quecount);
  showQuestion(quecount);
  RemoveActiveClass()
  setResult();
  
}

function activeClass(f){
  RemoveActiveClass()
  f.classList.add("active");
}
function RemoveActiveClass(){
var active= document.getElementsByClassName("active");
  for(var x =0; x < active.length; x++){
    active[x].classList.remove("active");
  }
}
function validate(y){
  var userAns = document.getElementsByClassName("active");
    if(userAns[0].innerHTML == questionsArray[y].answer){
        score++;
    }
}
function showResult(){
  document.getElementById("result") = sessionStorage.getItem("userscore");
}
function setResult(){
  if(quecount == questionsArray.length){
      window.location.href = "result.html";
  }
  var result = document.getElementById("result");
  sessionStorage.setItem("userscore", score);
}

function renderResult(){
  var cs = sessionStorage.getItem("userscore");
  result.innerHTML = "You scored "+ cs +" out of 5";

} 
