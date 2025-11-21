
//  1 problem solve 

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
// console.log(formatValue('talksjf'))



// 2nd problem 

function getLength(value:string|any[] ) {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}
// console.log(getLength('t '))
// console.log(getLength([22,22,22,4]))


// problem 3 

class Person{
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
const Person1 = new Person('tanjil',22)
const Person2 = new Person('tanjila',19)

// console.log(Person1.getDetails())
// console.log(Person2.getDetails())


//problem 4

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

// const highRatedItems = filterByRating(books);
// console.log(highRatedItems)


//porblem 5
 
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
 
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

// Sample Input
const users: User[] = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

// console.log(filterActiveUsers(users));


// problem 6
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


 
 




