var $current;
var currentP;

//Just add tabnames and everything else will be done for you!
var tabNames = []; // = ["Apeture", "Shutter<br>Speed", "ISO", "Explore"];

var pages = tabNames.length;
var tabWidth = 98.5/pages;

document.addEventListener("DOMContentLoaded", function (event) {
  addPages();

  /*Dynmaically Create tabs and pages*/
  function create(){
    for (var i = 0; i < pages; i++){
      var $newtab = $('<div id="tab-' + toWords(i+1) + '" class="tab">' + tabNames[i] + '</div>');
      $newtab.css("width", (i+1)*tabWidth+"%");
      $newtab.css("zIndex", pages-(i-1));
      $( "div#tabs" ).append( $newtab);

      var $newsection = $('<div id="section-' + toWords(i+1) + '" class="page page-' + toWords(i+1) + ' section-' + toWords(i+1) + ' ' + toWords(i+1) + '">Hi Trevor<br>Page ' + toWords(i+1) + '</div>');
      if (i == 0){
        $newsection.css("display", "block");
      }else{
        $newsection.css("display", "none");
      }
      $( "div#sections" ).append( $newsection);
    }
  }

  create();

  $(document).on("click", function (event) {

    if (event.target.id.indexOf("tab-") >= 0 ){

      //Set page
      var tempEle2 = "section-" + event.target.id.substring(4, event.target.id.length-1) + " ";
      var te = event.target.parentElement.nextSibling.nextSibling;

      for (var i = 0; i < te.childNodes.length + 1; i++){
        if (te.childNodes[i].id == tempEle2){
          if (currentP){
            currentP.style.display = "none";
          }
          currentP = te.childNodes[i];
          currentP.style.display = "block";
          break;
        }
      }

      //Set tab
      if ($current){
        $current.style.backgroundColor = "white";
      }
      $current = event.target;
      $current.style.backgroundColor = "black";
    }
  });

});

/*Simply for testing*/
function addPages(){
  for (var i = 0; i < 100; i++){
    tabNames.push("hi");
  }

  pages = tabNames.length;
  tabWidth = 98.5/pages;
}
