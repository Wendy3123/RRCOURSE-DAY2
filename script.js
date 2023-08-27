const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(author, title, pages, publicationDate, genres, hasMovieAdaptation);

// const firstGenre = genres[0];
// const secondGenre = genres[1];
const [firstGenre, secondGenre, thirdGenre, ...otherGenres] = genres; //the ...otherGenres prints all all the remaining genres in the array
console.log(firstGenre, secondGenre, thirdGenre, ...otherGenres);

const newGenres = [...genres, "epic fantasy"]; //without the 3 dots in front of genres it would print an array inside our new array meaning [[science fiction,etc], epic fantasy]
//with the three dots .. it looks like [science fiction,etc, epic fantasy]
// ...genres as seen above this method is another way of doing .push and adding 'epic fantasy' to end the array
newGenres;

const updatedBook = {
  ...book,
  //adding a new property called moviePublicationDate
  moviePublicationDate: "2001-12-19",
  //overwriting and changing new property value for pages
  pages: 1250,
};
updatedBook;

// function getYear(str) {
//   return str.split("-")[0];
// }
//the .split('-')[0] will only print out the year instead of the whole date. we split it then take the first element at [0]
const getYear = (str) => str.split("-")[0]; //arrow function compared to the one above is a reg function

const summary = `${title}, is a ${pages}-page long book, was written by ${author} and published in ${getYear(
  publicationDate
)}. 
    The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie `;
summary;

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
pagesRange;
console.log(`The book has ${pagesRange} page`);

const spanishTranslations =
  book.translations.spanish || "NOT TRANSLATED IN SPANISH YET";
//if there is spanish translations it will print out spanish. Else it will print out "NOT TRANSLATED IN SPANISH YET"
spanishTranslations;

//if we are on book 2 we can see that our book.reviews.librarything.reviewsCount is equal to 0 and is a falsy value
//so it would give us the answer 'no data' instead of 0 which is wrong
const countWrong = book.reviews.librarything?.reviewsCount || "no data";
countWrong;

//use the ?? to be able to access the 0
const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; //  the ?? 0 means that if it is falsy and undefined
  //set it to 0 so that when we print total reviews it doesnt give us undefined when it tries to add a number + undefined
  //we add a  ? after the librarything bc book 3 doesnt have a librarything object which means it will
  //show as an error if we include the ? it makes it optional chaining ONLY IF it exists
  return goodread + librarything;
}
console.log(getTotalReviewCount(book));
