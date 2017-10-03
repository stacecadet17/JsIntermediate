// draws a line of stars with the amount of stars being the given number
function StarString(num){
  line = "*".repeat(num);
  return line;
}

let stars = StarString(8);
console.log(stars)


//given an array where each index is the amount of stars in each line
function drawstars(arr){
  for(var i = 0; i < arr.length; i++){
    console.log(line = "*".repeat(arr[i]));
  }
}

console.log(drawstars([4, 6, 1, 3, 5, 7, 25]))


//given an array of both numbers and strings, where the number if stars is printed for
//numbers, and the first letter of the string is printed times the length of the string.
function drawstuff(arr){
  for(var i = 0; i < arr.length; i++){
    if(Number.isInteger(arr[i])){
      console.log('*'.repeat(arr[i]))
    }
    else if(typeof(arr[i]) == 'string'){
      arr[i].toLowerCase();
      console.log(arr[i][0].repeat(arr[i].length));
    }
  }
}

console.log(drawstuff([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]));
