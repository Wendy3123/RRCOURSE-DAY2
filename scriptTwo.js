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

function getTotalReviewCount(book) {
  const goodread = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; //  the ?? 0 means that if it is falsy and undefined
  //set it to 0 so that when we print total reviews it doesnt give us undefined when it tries to add a number + undefined
  //we add a  ? after the librarything bc book 3 doesnt have a librarything object which means it will
  //show as an error if we include the ? it makes it optional chaining ONLY IF it exists
  return goodread + librarything;
}

const books = getBooks();

//using .map() to print out all titles from the books array
const titles = books.map((item) => item.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//using .filter method to filter out some elements of the array based n the condition
//this ex is filtering out books that are greater than 500
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation) //now filter out all book with movie adaptation as well
  .filter((book) => book.translations.korean); //now filter out only books with korean translations so we r left with one book
longBooks;

//.filter method to adventure books
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure")) //.includes returns true or false only
  .map((book) => book.title); //maps only the title of the result above

adventureBooks;

//.reduce method
//count up all pages read from all book
//so our var total is equal to the second parameter which we have as 0. Which means the total starts at count 0
//then we have another var book which is just like our other methods and we set book to equal each book we get from books array
//then select the total+ book.pages to get the total pages fro all books
const pagesFromAllBooks = books.reduce((total, book) => total + book.pages, 0);
pagesFromAllBooks;

//sort method takes two parameters in the callback function
const arr = [3, 1, 9, 5, 1, 8, 4];
const sorted = arr.slice().sort((a, b) => a - b); //if u do a-b it will put least to greatest
//if u do b-a it will print out highest to lowest
//for the sort method it updates the original array as well as the new array
//in order for the sort method to not do tht & change the original array (arr) we can add a .slice() before the .sort() method
//there u go! thats an easy fix
sorted;
arr;

//use sort method again to print out all books page numbers from highest to lowest
//dont forget to add slice to not change original data array
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

//adding new book object to our data
const newBook = {
  id: 6,
  title: "Harry Potter and chamber of secrets ",
  author: "J. K. Rowling",
};

const booksAfterNewAdd = [...books, newBook];
//this ... technique above is another way of doing .push newBook into the books array
//now if we check the booksAfterNewAdd we as can see the newBook added id:6 at the end of books array
booksAfterNewAdd;

//deleting a book object from array
const booksAfterDelete = booksAfterNewAdd.filter((book) => book.id !== 3);
//we delete by making a new array that filters out all books not are not equal to book id 3
booksAfterDelete;

//normally in a project, we would want to create functions for adding deleting and updating books instead of manually doing it
// for ex we can pass a prop of id to the delete and also pass in id instead of 3

//update a book object in the array
//our ex shows if book id === 1 then we go into our book array and update the pages to 1800 any other id just print the original book data
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1800 } : book
);
booksAfterUpdate;
