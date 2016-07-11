$(document).ready(function(){
  console.log("I'm ready")


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
    //instantiate var, grabs value of input
    //.val generally only on input fields
//    var input = $("input").val();
    //changes html of h1
    $(".other-front").html(quesOne.ques);
    $(".other-back").html(quesOne.ans);
  })


  //Returns a random number between 0-9
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * quesArray.length);
  }


  var quesOne = {
    ques: "What are two ways to create an object?",
    ans: "Object literal notation and object constructor"
  }
/*
  var quesTwo = {
    'question': "In the following array, how do we access 'Mary'? \n"
      "\t var names =["Bill", "Mary", "Ken"]"

    'answer: "names[1];"'
  }

  var quesThree = {
    'question: "What does a modulus return"'
    'answer: "The remainder of a division operation"'
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

  var quesArray=[quesOne, quesTwo, quesThree]
*/

  });
})
