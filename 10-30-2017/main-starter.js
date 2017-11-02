/*jshint esversion: 6 */

// multi-dimentional array
let top_movies = [
  ["The Shawshank Redemption", 1994, "Drama"],
  ["The Godfather", 1972, "Crime"],
  ["The Godfather: Part II", 1974, "Crime"],
  ["The Dark Knight", 2008, "Action"],
  ["12 Angry Men", 1957, "Drama"]
];


// write a for loop to output movie names
let movie_1 =[
  ["The Shawshank Redemption", 1994, "Drama"]
];

let movie_2 = [
  ["The Godfather", 1972, "Crime"]
];

let movie_3 = [
  ["The Godfather: Part II", 1974, "Crime"]
];

let movie_4 = [
  ["The Dark Knight", 2008, "Action"]
];

let movie_5 = [
  ["12 Angry Men", 1957, "Drama"]
];

for (let i = 0; i < movie_1.length; i++){
          console.log(movie_1[i])
  }
for (let j = 0; j < movie_2.length; j++){
          console.log(movie_2[j])
  }
for (let k = 0; k < movie_3.length; k++){
          console.log(movie_3[k])
  }
for (let p = 0; p < movie_4.length; p++){
          console.log(movie_4[p])
  }
for (let m = 0; m < movie_5.length; m++){
          console.log(movie_5[m])
  }




// use Iterator and Arrow function
// to loop over the array to out names with *** prefix
movie_1.forEach(movie => console.log("***" + movie));
movie_2.forEach(movie => console.log("***" + movie));
movie_3.forEach(movie => console.log("***" + movie));
movie_4.forEach(movie => console.log("***" + movie));
movie_5.forEach(movie => console.log("***" + movie));




// Use Iterator and Arrow functions, .filter()
// to output the name and genre of movies after 1990
movie_1.forEach(movie => console.log(">>>" + movie));
let new_movie1 = movie_1.filter(movie=> movie.slice(0,1) != ">=1990");
console.log(new_movie1);

movie_4.forEach(movie => console.log(">>>" + movie));
let new_movie4 = movie_4.filter(movie=> movie.slice(0,1) != ">=1990");
console.log(new_movie4);



// change genre category for either "Crime" or "Drame"
// to "Crime, Drama" using .map() and output the result
// see https://www.w3schools.com/jsref/jsref_map.as





// add code to calculate the number of years to become a millinaire
// with initial deposit of 10000 and 0.06 interest rate
let balance = 10000;
let years = 0;
while(balance < 1000000){
  balance += balance *.06
  years += 1;
}
console.log("You will be a millionaire in " + years + " years!");






// add player objects and output results according to lecture slides
let player1 = {
  name: "Stephen Curry",
  dob: "March 14, 1988",
  height: 1.91,
  weight: 86,
  shoot(){
    return "3-pointer"
  }
};

let player2 = {
  name: "Lebron James",
  dob: "December 30, 1984",
  height: 2.03,
  weight: 118,
  shoot(){
    return "dunk"
  },
  info(){
    return `$(this.name) is $(this.height)m and $(this.weight)kg.`;
  }
};

console.log(player1.name);
console.log(player2.name);
console.log(player2.weight - player1.weight);
console.log(player1.shoot());
console.log(player2.shoot());

console.log(player2.info());
player2.draft_year = 2003;
console.log(player2.draft_year);
