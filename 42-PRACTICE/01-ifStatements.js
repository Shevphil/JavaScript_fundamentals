let hour = 12

if (hour > 10) {
    greeting = "Good morning!";
}
else if (hour > 20) {
    greeting = "Good day!";
}
else {
    greeting = "Good evening!";
}


switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }