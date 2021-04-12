REACT JS

#### Background Story

If you just finished JavaScript online courses or other self-taught resources going to your first JS framework can be scary. One thing I would like to encourage you is that we all have some doubts as a beginner. But pushing through the 'fear/doubt' of I don't think I am ready enough or smart enough is a great skill to have. Coding is a continuous journey that evolves all the time with new programming languages or frameworks being created. If you are presented with an opportunity to be on a project that uses a framework like react and you haven't used it, don't be quick to say no. Just say you don't know the framework but you are willing and ready to learn it. At least that's what I did. In the next three months, I will be learning React as I contribute to the project and grow.
In the process of learning React JS, I have found a few things you should understand before starting it. I will brush through the features and add useful links to the documentation you can use to learn them on a deep level. These are ES6 syntax or ES7 syntax mostly used are:

- Es6/ES7 classes
- Arrow functions
- let and const
- Imports and Exports
- Spread and rest operator
- Destructuring
- Array functions especially filter and map

#### Using Let and Const variables

Before `var` was used to set new variables but with the ES6 updates let and const were introduced.
Scope: `var` variables are globally scoped or accessible. This means when they are declared outside a function they are accessible throughout your file or window. This can be dangerous because you can change it without knowing, hence getting a lot of errors. `let` and `const` have blocked scope. This means when they are declared inside a function or any block of code, they can’t be accessed outside it. Thus you can’t easily break your code by manipulating or redeclaring the same variable outside the function.
Re-assigning: Var variables can be re-assigned and updated easily, let can be updated but not re-assigned, and const can neither be re-assigned nor updated, it is constant(doesn’t change).

```js
//Var can be re-assigned
var name = "Jane Tracy 👩‍💻";
var name = "Luke Wilsey 🎥";
console.log(name);
//output => Luke wilsey 🎥

//var can be updated too
var name = "Spencer 👩‍💻";
name = "Tom🍄";
console.log(name);
//output => Tom🍄

//let can’t be re-assigned
let name = "Jane Tracy 👩‍💻";
let name = "Luke Wilsey 🎥 ";
console.log(name);
//output => Syntax error: the name has already been declared

// let can be updated
let name = "Spencer 👩‍💻";
name = "Tom🍄";
console.log(name);
//output => Tom🍄

//const can’t be re-assigned
const name = "Jane Tracy 👩‍💻";
const name = "Luke Wilsey 🎥 ";
console.log(name);
//output => Syntax error: the name has already been declared

//const can’t be updated
const name = "Spencer 👩‍💻";
name = "Tom🍄";
console.log(name);
//output => Uncaught TypeError: Assignment to constant variable.
```

#### Arrow functions

When I started learning about arrow functions, I immediately loved them. They are short and straight to the point. Basically arrow functions are a way to write functions with shorter syntax. They were also introduced in the ES6 update.
Named functions without arguments

```js
//old function syntax
function name() {
  console.log("Tracy 🚠");
}
name();

// arrow function
const name = () => {
  console.log("Tracy 🚠");
};
name();
//or you can even make it shorter by removing writing

const name = () => console.log("Tracy 🚠");
name();
```

Named functions with arguments

```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

//arrow function
const add = (a, b) => {
  return a + b;
};
console.log(add(3, 5));

//you can also shorten if it returns one thing
const add = (a, b) => a + b;
console.log(add(3, 5));
```

- Not using parentheses when you have one argument

```js
//Using template literals to avoid the old concatenation
const series = (favorite) => console.log(`I love watching ${favorite}`);
series("The office");
```

**Note:** Arrow functions are used a lot in modern frameworks, it will be better if you get comfortable with them. For a deep dive look at [Arrow functions by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### ES6 Classes

A class is another type of function which is declared by the `class` keyword and can be used to create new objects. A class contains properties and methods. The `constructor method` is used for initializing objects that are created by the class itself and we use `this` keyword to refer to the current class.

```js
class GreatMovies {
  constructor(movie) {
    this.movie = "The Lord of the Rings 🎥";
  }

  printMovie() {
    console.log(`My favorite movie is ${this.movie}`);
  }
}

//this creates an object by using new before the class name
const myMovies = new GreatMovies();
myMovies.printMovie();
//output => My favorite movie is The Lord of the Rings 🎥
```

Class inheritance

We use `extends` in classes to inherit properties from another class.
In the example below the class GreatSeries inherits the property and method from the GreatMovies class. The super method is used to call the parent constructor. In our case, it will call the constructor of the GreatMovies class.

```js
class GreatMovies {
  constructor(movie) {
    this.movie = movie;
  }

  printMovie() {
    return `My favorite movie is ${this.movie}`;
  }
}

class GreatSeries extends GreatMovies {
  constructor(movie, series) {
    super(movie);
    this.series = series;
  }

  printList() {
    return `${this.printMovie()}, now I am watching ${
      this.series
    } series today.`;
  }
}
const watchingList = new GreatSeries("The Social dilemma", "The Society");
console.log(watchingList.printList());
```

##### ES7 class syntax

The best thing about the ES7 class syntax you don’t have to write the constructor or the super method. We can also use the arrow functions as class methods. This for me makes it easier and faster to write code.
Let's redo the former classes we used and change it to ES7 syntax.

```js
class GreatMovies {
  movie = "The Social dilemma";

  printMovie = () => {
    console.log(`My favorite movie is ${this.movie}`);
  };
}

const myMovies = new GreatMovies();
myMovies.printMovie();
```

<img src="https://i.ibb.co/Xspwn9L/es7-syntax.png" alt="es7-syntax" border="0">

#### How to write extended classes without the super method

The constructor and super method are written behind the scenes, so you don’t have to write them.

```js
class GreatMovies {
  movie = "The Social dilemma";

  printMovie = () => {
    console.log(`My favorite movie is ${this.movie}`);
  };
}

class GreatSeries extends GreatMovies {
  movie = "The Social dilemma 🎥 ";
  series = "The Society";

  printList = () => {
    return `My favorite movie is ${this.movie} and now I am watching ${this.series} series today 🍹.`;
  };
}

const watchingList = new GreatSeries();
console.log(watchingList);
console.log(watchingList.printList());
```

For more about classes check out [MDN mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

#### Imports and exports

You can store functions in one Javascript file and later on export it to use it in another Js file by importing the file or a specific function/s.

How to export a file or some functions
You can use the default when exporting one main thing from the file. This can be done only once in a file.

```js
const movieList = (movie) => `I enjoyed watching ${movie} movie`;

export default movieList;

//If the function is more than one
const movieList = (movie) => `I enjoyed watching ${movie} movie 💕 `;

const seriesList = (series) => `I enjoyed watching ${series} series 🍹 `;

export { movieList, seriesList as default };

//You can also export function individually => named export
export const movieList = (movie) => `I enjoyed watching ${movie} movie 💕 `;

export const seriesList = (series) => `I enjoyed watching ${series} series 🍹 `;
```

How import files

```js
//How to import multiple functions individually
//uses the named export
import { movieList, seriesList } from "./watching/mylist.js";

//how to import one function called movieList
//using the default export
import movieList from "./watching/mylist.js";

//importing using an alias
import { movieList as MovieList } from "./watching/mylist.js";
```

If you want to learn more about imports and exports you can follow the following resources
[import and export in Javascript by Digital Ocean](https://www.digitalocean.com/community/tutorials/js-modules-es6)
[import and export by Javascript info](https://javascript.info/import-export)

#### Spread and rest operator

When I first heard of this operator I was so curious to understand how only three dots can be so powerful, simple and easy to use. To me the three dots were like magic, a safe way to copy reference types without any issues.
The spread and rest operator uses three dots (. . .) to initialize it.
The spread operator is used for splitting up the values of an array and adding them to another array or splitting properties of an object and adding them to another object.

```js
//In arrays
const jobs = ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻"];

const currentJobs = [
  ...jobs,
  "actor 🎥",
  "social media influencer 📴",
  "musician 🎻",
];

console.log(currentJobs);
//output => ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻", "actor 🎥", "social media influencer 📴", "musician 🎻"]

//In objects
const currentJob = {
  name: "Jane",
  job: "developer 👩‍💻",
};

console.log(currentJob);

const funJob = {
  ...currentJob,
  name: "Tracy",
  PartTimejob: "musician 🎻",
};

console.log(funJob);
//output => {name: "Tracy", job: "developer 👩‍💻", PartTimejob: "musician 🎻"}
```

#### The rest operator
- This operator is used to represent an infinite amount to arguments in a function.

```js
const num = (...args) => {
  return args.map((arg) => arg / 2);
};
const result = num(40, 60, 80, 120, 200, 300);
console.log(result);

//output => [20, 30, 40, 60, 100, 150]

//example 2
const myFruits = (...fruits) => {
  return fruits.filter((fruit) => fruit !== "🍌");
};

const result = myFruits("🍎", "🥝", "🍌", "🍍", "🍉", "🍏");

console.log(result);
//output
["🍎", "🥝", "🍍", "🍉", "🍏"];
```

#### Destructuring

At first I thought that destructuring and the spread operator do the same job, but I was wrong. The spread operator copies all the values of an array or all properties of an object while destructuring copies specific values or properties which you store in a variable.
Array destructuring

```js
const myFruits = ["🍎", "🥝", "🍌", "🍍", "🍉", "🍏"];
const [myFavorite, , , listFavorite] = myfruits;
console.log(myFavorite, listFavorite);
//output
🍎 🍍

```

Objects destructuring

```js
const { name, job } = { name: "Tracy", job: "musician 🎻" };
console.log(name, job);
//output
Tracy musician 🎻

```

---

**React Component LifeCycle**
- LifeCycle methods can be used to override at particular times in the process.

### Types of methods
#### Mounting
- These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- constructor()
- static getDerivedStateFromProps()
- render()
- componentDidMount()

#### Updating
- An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

#### Unmounting
- This method is called when a component is being removed from the DOM:

- componentWillUnmount()

#### Error Handling
- These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()


#### Constructor
- When using the constructor method, you have to include super(props), this will ensure the `this.props` is not undefined. 

Uses
- To intiliaze the local state
- Binding event handler methods to instance

- In the constuctor is the only method that should can use `this.state` directly. In other stages you can use `this.setState()`
- Also it's important to note that you should not copy props directly into `this.state`, the prop might not get updated in the state.
```js
constuctor(props){
  super(props);
  this.state = {score = 0};
  //don't do this
  this.state = {color: props.color}
  this.handleClick = this.hadleClick.bind(this);
}
```

#### static getDerviedStateFromProps()

- This method is used before invoking the render method. It can return an object to update the state or use null that will not update the state.
- It can be used when the state depends on the changes in props over time. Also it runs everytime render is invocked. 
```js
static getDerviedStateFromProps(props,state);
```

#### componentDidMount()
- componentDidMount() is invoked immediately after a component is mounted. 
- Helps React to know whether or not you want to re-render the  component. You can easily cancel the updating process with this method. 
uses
- Increasing performance of your app since you will cancel unnecessary component updates. 

```js
componentDidMount(nextProps, nextState)
```