var toggle = 0,toggle1 = 0;
function firstdropdown(){
  var dropdown = document.getElementsByClassName('dropdown-content')[0];
  if(toggle == 0){
    dropdown.style.display = "flex";
    toggle += 1;
    if(toggle1 == 1){
      toggle1 -= 1;
      document.getElementsByClassName('dropdown-content1')[0].style.display = "none";
    }
  }
  else{
    dropdown.style.display = "none";
    toggle -= 1;
  }
}
function seconddropdown(){
  var dropdown = document.getElementsByClassName('dropdown-content1')[0];
  if(toggle1 == 0){
    dropdown.style.display = "flex";
    toggle1 += 1;
    if(toggle == 1){
      toggle -= 1;
      document.getElementsByClassName('dropdown-content')[0].style.display = "none";
    }
  }
  else{
    dropdown.style.display = "none";
    toggle1 -= 1;
  }
}
function backgroundcolor_func(val){
    val.style.backgroundColor = "#0366d6";
}
function remove_background_color(val){
  val.style.backgroundColor = "white";
}
