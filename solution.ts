const formatValue = (value : string | number | boolean) : string | number | boolean => {
    if(typeof value === 'string'){
        return value.toUpperCase();
    }else if(typeof value === 'number'){
        return value * 10;
    }else{
        return value === true ? false : true;
    }
}


const stringValue = formatValue('hello')
const numberValue = formatValue(5)
const booleanValue = formatValue(true)







const getLength = <T>(value:string | T[]) : number => {
      if(typeof value === 'string'){
        return value.length;
      }else{
        return value.length;
      }
}

const stringLength = getLength('typescript')
const numberLength = getLength([10, 20, 30, 40])







class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails() : string {
        return (`'Name: ${this.name}, Age: ${this.age}'`);
    }
}


const person1 = new Person('John Doe', 30);

const person2 = new Person('Alice', 25);








type BookList = {title: string, rating: number}

const filterByRating = (books: BookList[]) : BookList[] =>{
    books.forEach((book) =>{
        const rating = book.rating >= 0 && book.rating <= 5;

        if(!rating){
            throw new Error('Rating should be between 0 and 5')
        }
    });

    return books.filter(book =>{
        return book.rating > 4;
    });
}


const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

const topRating = filterByRating(books);








interface Users{
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (values : Users[]) : Users[] =>{
       return values.filter(value =>{
        return value.isActive === true

       });
}


const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

const activeUsers = filterActiveUsers(users);








interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (values : Book) : string =>{
    return `Title: ${values.title}, Author: ${values.author}, Published: ${values.publishedYear}, Available: ${values.isAvailable === true ? 'Yes' : 'No'}`
}


const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

const bookDetails = printBookDetails(myBook);










const getUniqueValues = (arr1 : (number | string)[], arr2 : (number | string)[]) : (number | string)[] =>{
    const result: (number | string)[] = [];

    const addUnique = (arr: (number | string)[]): void => {
        for (let i = 0; i < arr.length; i++) {
            const value = arr[i];
            if (value !== undefined && !result.includes(value)) {
                result.push(value);
            }
        }
    }

    addUnique(arr1);
    addUnique(arr2);

    return result;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueValues = getUniqueValues(array1, array2);








type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const total = product.price * product.quantity;
            const discountAmount = product.discount ? (total * product.discount) / 100 : 0;
            return total - discountAmount;
        })
        .reduce((sum, curr) => sum + curr, 0);
}


const products: Product[] = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

const totalPrice = calculateTotalPrice(products);
