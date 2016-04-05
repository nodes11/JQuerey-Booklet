var current;
var tabNames = ["Apeture", "Shutter<br>Speed", "ISO", "Explore", "Snarf", "Hello"];
var pages = tabNames.length;
var tabWidth = 98.5/pages;

document.addEventListener("DOMContentLoaded", function (event) {

  /*Dynmaically Create tabs and pages*/
  function create(){
    for (var i = 0; i < pages; i++){
      var $newtab = $('<div id="tab-' + toWords(i+1) + '" class="tab">' + tabNames[i] + '</div>');
      $newtab.css("width", (i+1)*tabWidth+"%");
      $newtab.css("zIndex", pages-(i-1));
      $( "div#tabs" ).append( $newtab);

      var $newsection = $('<div id="section-' + toWords(i+1) + '" class="page page-' + toWords(i+1) + ' section-' + toWords(i+1) + ' ' + toWords(i+1) + '">Page ' + toWords(i+1) + '</div>');
      if (i == 0){
        $newsection.css("display", "block");
      }else{
        $newsection.css("display", "none");
      }
      $( "div#sections" ).append( $newsection);
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
