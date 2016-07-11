$(document).ready(function(){
  console.log("I'm ready")
  
  $(function(){
    $("#card-1").flip({
      axis: "y", // y or x
      reverse: false, // true and false
      trigger: "hover", // click or hover
      speed: '400',
      front: $('.other-front'),
      back: $('.other-back'),
      autoSize: false
    });
    $("#card-2").flip({
      axis: "x",
      reverse: true,
      trigger: "click"
    });
  });
})
