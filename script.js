$(document).ready(function(){
  console.log("I'm ready")

  var clickCounter = 0;
  // Creates a var to catch array of checked index cards
  var culledIndexCards = []

  $(function(){
    $("#card-1").flip({
      axis: "y", // y or x
      reverse: true, // true and false
      trigger: "click", // click or hover
      speed: '400',
      front: $('.other-front'),
      back: $('.other-back'),
      autoSize: false
    });

  var indexCards = [
    {
      ques: "Question 1: What are two ways to create an object?",
      ans: "Answer: 1. Object literal notation 2. Object constructor notation",
      favorite: false
    },

    {
      ques: "Question 2: What is a method?",
      ans: "Answer: A function that is attached to an object",
      favorite: false
    },

    {
      ques: "Question 3: How do you access 'Mary' in myArray =['Bob', 'Mary', 'Kim']",
      ans: "Answer: myArray[1]",
      favorite: true
    },

    {
      ques: "Question 4: what does .val( ) method do?",
      ans: "Answer: It's used to get values of form elements like 'input', 'select', and 'textarea'.",
      favorite: true
    },

    {
      ques: "Question 5: What is a callback?",
      ans: "Answer: A piece of executable code that is passed as an argument to other code, which is expected to invoke that code at some convenient time.",
      show: true
    },

    {
      ques: "Question 6: What's the difference between <strong>button.on('click', handleClickEvent );</strong> <br>and <br><strong>button.on('click', handleClickEvent( ) );</strong>",
      ans: "Answer: The latter handleClickEvent( ) invokes the function, the first handleClickEvent references it.",
      show: true
    },

    {
      ques: "Question 7: What does a modulus return?",
      ans: "Answer: The remainder of a division operation",
      show: true
    }
  ]

    //click event: class of button clicked, function called
    //  var checkboxy = $("<input type='checkbox' id='checkboxy'></input>")
    $("button").on("click", function(){
      //changes html of front and back of card




      $(".other-front").html(indexCards[clickCounter % indexCards.length].ques);
      $(".other-back").html(indexCards[clickCounter % indexCards.length].ans);
      $('.other-front').prepend('<input type="checkbox" name="myCheckbox" id="checkboxCheck"/>');







      clickCounter++;

      if(clickCounter===indexCards.length){
        indexCards = culledIndexCards
        clickCounter=0
      }
/*
      //click event: class of button clicked, function called
      //  var checkboxy = $("<input type='checkbox' id='checkboxy'></input>")
      $("button").on("click", function(){
        //changes html of front and back of card




        $(".other-front").html(culledIndexCards[clickCounter % culledIndexCards.length].ques);
        $(".other-back").html(culledIndexCards[clickCounter % culledIndexCards.length].ans);
        $('.other-front').prepend('<input type="checkbox" name="myCheckbox" id="checkboxCheck"/>');
      });
*/







      $('input:checkbox').on('change', function(){

        console.log("Hey wassup");


        // Creates a for loop to go thru list of questions and put them in an array.
//          for(var i=0; i<indexCards.length; i++){
            if($(this).is(':checked')){
//          if (indexCards[i].show===true){

            culledIndexCards.push(indexCards[clickCounter-1])
            console.log("putting in culled Index Cards")
            }
//          }
        })

      })


      indexCards[0]
    })
  })







  //show if favorite

  //else don't show

//  function isItChecked(){
//    console.log("shows checked")
//    return ($('input.checkbox').is(':checked'))
//  }




//})




//  SECOND CARD DELETED
//    $("#card-2").flip({
//      axis: "x",
//      reverse: true,
//      trigger: "click"
//    });
// });

//  ATTEMPTS AT CHECKBOX FUNCTIONS
//    if ($('input.checkbox').is(':checked')) {
//      console.log("shows checked")
//    if(document.getElementById("testName").checked) {
//      document.getElementById('testNameShown').disabled = true


/*
checkboxy.click(function(){
if (this.checked) {
var checkedArray = new Array();

//        $("input:checkbox[name=type]:checked").each(function() {
$("checkboxy:checked").each(function(){
checkedArray.push($(this).val());
});
alternateCards(selected);
console.log("checked")
}
})
*/




//change html of front and back of card with random choice of question among the array

//  var quesArray=[quesOne, quesTwo];
//Returns a random number between 0-quesArray.length
//  var randomNum = function getRandomInt() {
//    return Math.floor(Math.random() * indexCards.length);
//    console.log("function getRandomInt is working")
//  }

/*
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
*/
