
const repeatString = function(str, time) {
   let string = "";
   if(time < 0) return "ERROR";
   for (let i = 0; i<time; i++)
   {
   string += str;
   }
   return string;
}

// Do not edit below this line
module.exports = repeatString;
