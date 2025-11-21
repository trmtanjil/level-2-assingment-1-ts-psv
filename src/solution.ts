

function formatValue (Value:number|string|boolean){
if(typeof Value ==='number'){
    return Value= Value*10
}
else if(typeof Value === 'string'){
return Value.toUpperCase()
}
else{
    return !Value
}
}
 

 
function getLength(value:string|any[] ) {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}




class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails():string{
       return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}
const Person1 = new Person('tanjil',22)
const Person2 = new Person('tanjila',19)

 


interface Item {
  title: string;
  rating: number; 
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item: Item) => item.rating >= 4);
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
    { title: 'Book d', rating: 4.5 },
  { title: 'Book e', rating: 3.2 },
  { title: 'Book f', rating: 5.0 },
];

const highRatedItems = filterByRating(books);
 

 
 
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
 
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

 const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

 

 interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const availabilityStatus = book.isAvailable ? 'Yes' : 'No';
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
const myBook1: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};


printBookDetails(myBook1);
printBookDetails(myBook);



 
 


function getUniqueValues(array1: (string | number)[], array2: (string | number)[]): (string | number)[] {
  const uniqueValues: (string | number)[] = [];

   for (let i = 0; i < array1.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (array1[i] === uniqueValues[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueValues[uniqueValues.length] = array1[i]!;
    }
  }

   for (let i = 0; i < array2.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueValues.length; j++) {
      if (array2[i] === uniqueValues[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      uniqueValues[uniqueValues.length] = array2[i]!;
    }
  }

  return uniqueValues;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const filter =getUniqueValues(array1,array2)

 



 

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;  
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) {
    return 0;
  }

  const total = products.reduce((accumulator, product) => {
    let productTotalPrice = product.price * product.quantity;

    if (product.discount !== undefined) {
      const discountAmount = (productTotalPrice * product.discount) / 100;
      productTotalPrice -= discountAmount;
    }

    return accumulator + productTotalPrice;
  }, 0);

  return total;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const ratting =calculateTotalPrice(products)
 