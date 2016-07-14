$(document).ready(function(){
  console.log("I'm ready")

  var clickCounter = 0;
  // Creates a var to catch array of checked index cards
  var culledIndexCards = []

  // JQuery plug-in for flip animation
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

  //Associative array of all questions
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

    //click event: button clicked, function called
    $("button").on("click", function(){
      //changes html of front and back of card
      $(".other-front").html(indexCards[clickCounter % indexCards.length].ques);
      $(".other-back").html(indexCards[clickCounter % indexCards.length].ans);
      $('.other-front').prepend('<input type="checkbox" name="myCheckbox" id="checkboxCheck"/>');

      clickCounter++;

      // When clickCounter reaches the final card, replace indexCards with
      // culledIndexCards array, and show only the checked question.
      if(clickCounter===indexCards.length){
        indexCards = culledIndexCards
        clickCounter=0
      }

      // Click event for checking the box:
      $('input:checkbox').on('change', function(){
        // Creates a for loop to go thru list of questions and put them in an array.
//          for(var i=0; i<indexCards.length; i++){
            // If checkbox is checked, put that ques/ans in culledIndexCards array
            if($(this).is(':checked')){
            culledIndexCards.push(indexCards[clickCounter-1])
            console.log("putting in culled Index Cards")
            }
//          }
        })
      })
      indexCards[0]
    })
  })
