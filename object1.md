# CONSTRUCTOR

## Define a Constructor Function

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Here is an example of a constructor:

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

This constructor defines a Bird object with properties name, color, and numLegs set to Albert, blue, and 2, respectively.

Constructors follow a few conventions:

- Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
- Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
- Constructors define properties and behaviors instead of returning a value as other functions might.

```txt
Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
```

## USE A CONSTRUCTOR TO CREATE OBJECTS

Here's the Bird constructor.

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
// NOTE: "this" inside the constructor always refers to the object being created.
```

Notice that the new operator is used when calling a constructor. This tells JavaScript to create a new instance of Bird called blueBird. Without the new operator, this inside the constructor would not point to the newly created object, giving unexpected results. Now blueBird has all the properties defined inside the Bird constructor:

```js
blueBird.name;
blueBird.color;
blueBird.numLegs;

//Just like any other object, its properties can be accessed and modified:

blueBird.name = "Elvira";
blueBird.name;
```

- Exercise: Create a Dog constructor and also create a new instance of Dog, assigning it to a variable hound.

## OBJECT METHODS

Objects can have a special type of property, called a method.

Methods are properties that are functions. This adds different behavior to an object. Here is the duck example with a method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + duck.name + ".";
  },
};
duck.sayName();
```

The example adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name.

- create dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.

## 'THIS' KEYWORD

The last challenge introduced a method to the duck object. It used duck.name dot notation to access the value for the name property within the return statement:

sayName: function() {return "The name of this duck is " + duck.name + ".";}
While this is a valid way to access the object's property, there is a pitfall here. If the variable name changes, any code referencing the original name would need to be updated as well. In a short object definition, it isn't a problem, but if an object has many references to its properties there is a greater chance for error.

A way to avoid these issues is with the "this" keyword:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function () {
    return "The name of this duck is " + this.name + ".";
  },
};
```

"this" is a deep topic, and the above example is only one way to use it. In the current context, this refers to the object that the method is associated with: duck. If the object's name is changed to mallard, it is not necessary to find all the references to duck in the code. It makes the code reusable and easier to read.

- Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.

## EXTEND CONSTRUCTORS TO RECIEVE ARGUMENTS

The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

Suppose you were writing a program to keep track of hundreds or even thousands of different birds in an aviary. It would take a lot of time to create all the birds, then change the properties to different values for every one. To more easily create different Bird objects, you can design your Bird constructor to accept parameters:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

Then pass in the values as arguments to define each unique bird into the Bird constructor:

```js
let cardinal = new Bird("Bruce", "red");
```

This gives a new instance of Bird with name and color properties set to Bruce and red, respectively. The numLegs property is still set to 2. The cardinal has these properties:

```js
cardinal.name;
cardinal.color;
cardinal.numLegs;
```

The constructor is more flexible. It's now possible to define the properties for each Bird at the time it is created, which is one way that JavaScript constructors are so useful. They group objects together based on shared characteristics and behavior and define a blueprint that automates their creation.

- Create another Dog constructor. This time, set it up to take the parameters name and color, and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. Pass it two strings as arguments for the name and color properties.
