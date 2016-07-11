$(document).ready(function(){
  console.log("I'm ready")

  var clickCounter = 0;

  $(function(){
    $("#card-1").flip({
      axis: "y", // y or x
      reverse: false, // true and false
      trigger: "click", // click or hover
      speed: '400',
      front: $('.other-front'),
      back: $('.other-back'),
      autoSize: false
    });
//    $("#card-2").flip({
//      axis: "x",
//      reverse: true,
//      trigger: "click"
//    });
//  });

  //click event: class of button clicked, function called
  $("button").on("click", function(){
    //changes html of front and back of card
    $(".other-front").html(indexCards[clickCounter % indexCards.length].ques);
    $(".other-back").html(indexCards[clickCounter % indexCards.length].ans);
    clickCounter++;
  })

  //change html of front and back of card with random choice of question among the array

//  var quesArray=[quesOne, quesTwo];
  //Returns a random number between 0-quesArray.length
  var randomNum = function getRandomInt() {
    return Math.floor(Math.random() * indexCards.length);
    console.log("function getRandomInt is working")
  }


  if(randomNum===0){
    $("button").on("click", function(){
      //changes html of front and back of card
      $(".other-front").html(quesOne.ques);
      $(".other-back").html(quesOne.ans);
      getRandomInt();
      console.log("Ques 1")
    })
  } else if (randomNum ===1){
    $("button").on("click", function(){
      //changes html of front and back of card
      $(".other-front").html(quesTwo.ques);
      $(".other-back").html(quesTwo.ans);
      getRandomInt();
      console.log("Ques 2")
    })
  }



  var indexCards = [
    {
      ques: "Question: What are two ways to create an object?",
      ans: "Answer: 1. Object literal notation 2. Object constructor notation"
    },

    {
      ques: "Question: What is a method?",
      ans: "Answer: A function that is attached to an object"
    },


    {
      ques: "Question: How do you access 'Mary' in myArray =['Bob', 'Mary', 'Kim']",
      ans: "Answer: myArray[1]"
    },


    {
      ques: "Question: what does .val( ) method do?",
      ans: "Answer: It's used to get values of form elements like 'input', 'select', and 'textarea'."
    },


    {
      ques: "Question: What is a callback?",
      ans: "Answer: A piece of executable code that is passed as an argument to other code, which is expected to invoke that code at some convenient time."
    },


  ]

  indexCards[0]

/*
  var quesThree = {
    ques: "What does a modulus return?"
    answer: "The remainder of a division operation"
  }
  var  = {

  }

  var  = {

  }
  var  = {

  }
  var  = {

  }
  var  = {

  }


*/

  });
})
