import { movies } from "../2-working with movies/movies.js";

const longMovies = [];
let count = 0;
let rating;
let countTotalNumber;

movies.forEach((item) => {
  if (1980 <= item.year && item.year <= 1989) {
    count++;
  }
  if (item.rating >= 7) item.tag = "Good";
  else if (item.rating >= 4 && item.rating < 7) item.tag = "Average";
  else item.tag = "Bad";
});

const keywords = ["surfer", "alien", "benjamin"];
countTotalNumber = movies.filter(
  (movie) =>
    typeof movie.title === "string" &&
    keywords.some((keyword) => movie.title.toLowerCase().includes(keyword))
).length;

const checkDuplicatedWords = (title) => {
  if (typeof title !== "string") {
    return false;
  }

  const words = title.toLowerCase().split(/\s+/);
  const wordCount = {};

  for (const word of words) {
    if (wordCount[word]) {
      return true;
    }
    wordCount[word] = true;
  }

  return false;
};

const duplicatedWordMovies = movies.filter(
  (movie) =>
    typeof movie.title === "string" && checkDuplicatedWords(movie.title)
);

console.log(duplicatedWordMovies);
console.log(countTotalNumber);
