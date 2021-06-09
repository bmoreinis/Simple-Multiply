function math1(){
  var answer = 0, x = 0, y = 0, tries = 0; correct = 0;
  while (answer != "q") {
    x = Math.floor(Math.random()*7)+3;
    y = Math.floor(Math.random()*7)+3;
    answer = prompt("What is "+x+" * "+y+"?");
    if (answer != x*y) alert("Wrong! "+x+" * "+y+" = "+x*y);
    else {
      correct++;
      alert("Correct!  "+correct+" ");
    }
    tries++;
  }
  alert("You did " + correct +" problems in "+tries+" turns.");
  if (correct < 25){
    alert("You can do more than that!");
  }
  else if (correct < 40){
    alert("So so");
  }
  else if (correct > 50){
    alert("Wow! A bit over board!");
  }
}