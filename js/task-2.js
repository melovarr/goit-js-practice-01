// function makeArray(firstArray, secondArray, maxLength) {
//     const summArray = firstArray.concat(secondArray);
//     if (summArray.length < maxLength) {
//         return summArray;
//     } else return summArray.slice(0, maxLength);
// }



// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []



// const bookProp = 'title';
// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38,},
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51,},
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 7.75,}
// ];
// const booksArray = [];
// for (const book of books) {
//     booksArray.push(book.bookProp);
// //   console.log(book); // Об'єкт книги
// //   console.log(book.title); // Назва
// //   console.log(book.author); // Автор
// //   console.log(book.rating); // Рейтинг
// }
// console.log(booksArray);



// function getAllPropValues(propName) {
//   const propNameArray = [];
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (let nameProp of products) {
//     if (nameProp[propName] !== undefined){
//     propNameArray.push(nameProp[propName]);
//   }
// }
//   alert (propNameArray);
// }
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");
// getAllPropValues("name");



// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (let nameProp of products) {
//     if (nameProp.name === productName) {
//       return nameProp.price;
//     }
//   } return null;
// }
// alert(getProductPrice("Radar"));
// alert(getProductPrice("Grip"));
// alert(getProductPrice("Scanner"));
// alert(getProductPrice("Droid"));
// alert(getProductPrice("Engine"));



// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   for (let nameProduct of products) {
//     if (nameProduct.name === productName) {
//       return nameProduct.price * nameProduct.quantity;
     
//     }
//   } return `Product ${productName} not found!`;
// }

// alert(calculateTotalPrice("Radar"));
// alert(calculateTotalPrice("Droid"));
// alert(calculateTotalPrice("Grip"));
// alert(calculateTotalPrice("Scanner"));
// alert(calculateTotalPrice("Blaster"));




// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const locate = user.location;
// console.log(locate); // {country: "Jamaica", city: "Ocho Rios"}

// const count = user.location.country;
// console.log(count); // "Jamaica"
// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3
// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// console.log(book.genres); // ["historical prose", "adventure"]
// console.log(book["genres"]); // ["historical prose", "adventure"]

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']



// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }


// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   }
// ];
// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }



// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }


//


// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
// ];

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); // 8



// function add(...args) {
//   let ind = 0;
//   for (let name of args) {
//     ind += name;
//   }
//   return ind;
// }

// console.log(add(32, 6, 13, 19, 8));
// console.log(add(12, 4, 11, 48));




// function addOverNum(value, ...args) {
//   let ind = 0;
//   for (let name of args) {
//     if (name > value) {
//       ind += name;
//     }
//   }
//   return ind;
// }

// console.log(addOverNum(50, 15, 27)); //---повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //---повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //---повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //--- 218


// function getExtremeScores(scores) {
//   const extreme = {best: Math.max(...scores), worst: Math.min(...scores)};
//   return extreme;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])) //---повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])) //---повертає об'єкт { best: 81, worst: 4 }



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(bestScore, worstScore);


// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = {
//   ...defaultSettings, ...overrideSettings
// };
// console.log(finalSettings);