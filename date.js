module.exports.getDate = getDate;

function getDate() {
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}
module.exports.getDay = getDay;
function getDay() {
  var today = new Date();

  var options = {
    weekday: "long",
  };

  var day = today.toLocaleDateString("en-US", options);
  return day;
}
//   var currDay = today.getDay();
//   var day = "";

//   switch (currDay) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//       day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//       break;
//     default:
//         console.log(currDay);
//       break;
//   };
