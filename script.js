// Digital Clock In Js

setInterval(showTime, 1000);

function showTime() {
  
  let Time = new Date();
  let Hour = Time.getHours();
  let Minut = Time.getMinutes();
  let Second = Time.getSeconds();
  am = "AM";


  if (Hour > 12) {
    Hour -= 12;
    am = "PM";
  }
  if (Hour == 0){
    Hour = 12;
    am = "AM";
  }
  Hour = Hour < 10 ? "0" + Hour : Hour;
  Minut = Minut < 10 ? "0" + Minut : Minut;
  Second = Second < 10 ? "0" + Second : Second;

  let currentTime = Hour + ":" + Minut + ":" + Second + am;
  document.getElementById("clock").innerHTML = currentTime; 

} showTime();

