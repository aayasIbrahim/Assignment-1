//Problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

//Problem 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};
reverseString("typescript");

//Problem 3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  } else {
    return "Unknown";
  }
}
checkType("Hello");
checkType(42);

//Problem 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name");

//Problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}
const Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(Book);

//Problem 6
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

//Problem 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set2 = new Set(arr2);

  return arr1.filter((num) => set2.has(num));
};
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
