var $current;
var currentP;

//Just add tabnames and everything else will be done for you!
var tabNames = ["Aperture", "Shutter Speed", "ISO", "Explore"];
var htmltext = [
  "hello<br>hello again 1",
  "hello<br>hello again 2",
  "hello<br>hello again 3",
  "hello<br>hello again 4"
];


var pages = tabNames.length;
var tabHeight = 98.5/(2.4*pages);

document.addEventListener("DOMContentLoaded", function (event) {
  //addPages();

  /*Dynmaically Create tabs and pages*/
  function create(){
    for (var i = 0; i < pages; i++){
      var $newtab = $('<div id="tab-' + toWords(i+1) + '" class="tab">' + tabNames[i] + '<div id="right-tab">--</div>' + '</div>');
      $newtab.css("height", tabHeight+"%");
      //$newtab.css("zIndex", pages-(i-1));
      $( "div#tabs" ).append( $newtab);

      var $newsection = $('<div id="section-' + toWords(i+1) + '" class="page page-' + toWords(i+1) + ' section-' + toWords(i+1) + ' ' + toWords(i+1) + '">' + htmltext[i] + '</div>');
      if (i == 0){
        $newsection.css("display", "none");
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
        $current.style.backgroundColor = "#000000";
        $current.style.color = "#FFFFFF";

          if ($current.childNodes[1].id == "right-tab"){
            $current.childNodes[1].style.backgroundColor = "#282c35";
            $current.childNodes[1].style.color = "#FFFFFF";
          }
      }
      $current = event.target;
      $current.style.backgroundColor = "#f3d239";
      $current.style.color = "#000000";

      if ($current.childNodes[1].id == "right-tab"){
        $current.childNodes[1].style.backgroundColor = "#e0ca1e";
        $current.childNodes[1].style.color = "#000000";
      }
    }
  });

  $("#side").on("click", function(event){
    if (currentP){
      currentP.style.display = "none";
    }

    if ($current){
      $current.style.backgroundColor = "#000000";
      $current.style.color = "#FFFFFF";

        if ($current.childNodes[1].id == "right-tab"){
          $current.childNodes[1].style.backgroundColor = "#282c35";
          $current.childNodes[1].style.color = "#FFFFFF";
        }
    }
  })
});

/*Simply for testing*/
function addPages(){
  for (var i = 0; i < 4; i++){
    tabNames.push("hi");
  }

  pages = tabNames.length;
  tabHeight = 98.5/(pages*2.5);
}
