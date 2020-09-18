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
