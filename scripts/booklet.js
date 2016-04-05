var current;
var pages = 4;
var tabWidth = 100/pages;

document.addEventListener("DOMContentLoaded", function (event) {

  function create(){
    for (var i = 0; i < pages; i++){
      var $newdiv1 = $( '<div id="tab-' + toWords(i+1) + '" class="tab">snarf</div>' );
      $( "div#tabs" ).append( $newdiv1);


    /*  $("section-one").append('<div id="tab-five">snarf</div>');
      $("tab-five").css("zIndex", "10");
      $("tab-five").css("backgroundColor", "red");
      $("tab-five").css("color", "red");
            $("tab-five").css("display", "block");
            $("tab-five").css("top", "0");*/


    }
  }

  create();



  /*var one = document.getElementById("section-one");
  var two = document.getElementById("section-two");
  var three = document.getElementById("section-three");
  var four = document.getElementById("section-four");

  current = document.getElementById("tab-one");
  current.style.backgroundColor = "darkgray";

  $("#tab-one").click(function(e) {
    e.stopPropagation();

    //Change the page
    one.style.display = "block";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    if (current){
      current.style.backgroundColor = "white";
    }

    current = document.getElementById("tab-one");
    current.style.backgroundColor = "darkgray";
  });

  $("#tab-two").click(function(e) {
    e.stopPropagation();

    //Change the page
    two.style.display = "block";
    one.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";

    if (current){
      current.style.backgroundColor = "white";
    }

    current = document.getElementById("tab-two");
    current.style.backgroundColor = "darkgray";
  });

  $("#tab-three").click(function(e) {
    e.stopPropagation();

    //Change the page
    three.style.display = "block";
    one.style.display = "none";
    two.style.display = "none";
    four.style.display = "none";

    if (current){
      current.style.backgroundColor = "white";
    }

    current = document.getElementById("tab-three");
    current.style.backgroundColor = "darkgray";
  });

  $("#tab-four").click(function(e) {
    e.stopPropagation();

    //Change the page
    four.style.display = "block";
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";

    if (current){
      current.style.backgroundColor = "white";
    }

    current = document.getElementById("tab-four");
    current.style.backgroundColor = "darkgray";
  });*/
});
