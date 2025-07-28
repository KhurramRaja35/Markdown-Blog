---

id: 1
title: Getting Started with React
author: Jane Doe
date: October 15, 2023
description: Learn the basics of React and how to create your first component.
imageUrl: /react.jpg
tags: React, JavaScript, Web Development
slug: getting-started-with-react

---

# Introduction

React is a popular JavaScript library for building user interfaces, particularly single-page applications. Developed and maintained by Facebook, React makes it painless to create interactive UIs.

## What is React?

React allows developers to create large web applications that can change data without reloading the page. Its main goal is to be fast, scalable, and simple. It works only on the user interface in the application, corresponding to the view in the MVC (Model-View-Controller) pattern.

## Prerequisites

Before diving into React, you should have a basic understanding of:
- HTML
- CSS
- JavaScript (ES6+)

## Setting Up Your Development Environment

To get started with React, you'll need Node.js and npm installed on your computer. Here's how to create a new React application:


## Using Create React App

```
npx create-react-app my-first-app
```

## Navigate to the project folder

```
cd my-first-app
```

## Start the development server
```
npm start
```

This will create a new React application and start the development server. You can now open your browser and go to `http://localhost:3000` to see your app in action.

## Understanding React Components

Components are the building blocks of any React application. A component is a self-contained module that renders some output. There are two types of components in React:

### Functional Components

Functional components are JavaScript functions that accept props as arguments and return React elements.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```


### Class Components

Class components are ES6 classes that extend React.Component and have a render method.

```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


## Creating Your First Component

Let's create a simple React component:

```
import React from 'react';
function HelloWorld() {
  return (
    <div className="greeting">
      <h1>Hello, World!</h1>
      <p>This is my first React component.</p>
    </div>
  );
}
export default HelloWorld
```


To use this component in your application, you would import it and include it in your JSX:

```
import React from 'react';
import HelloWorld from './HelloWorld';
function App() {
  return (
    <div className="app">
      <HelloWorld />
    </div>
  );
}
export default App;
```


## Understanding JSX

JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code in your JavaScript files, which React then transforms into pure JavaScript.

```
const element = <h1>Hello, world!</h1>;
```


JSX is not required for React, but it makes your code more readable and helps you visualize the structure of your UI.

## Props: Passing Data to Components

Props (short for properties) are how you pass data from a parent component to a child component.


```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}
```


## State: Managing Component Data

State is a JavaScript object that stores component data that might change over time. When state changes, React re-renders the component.

```
import React, { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Handling Events

React events are named using camelCase and passed as functions:

```
function Button() {
  function handleClick() {
    alert('Button was clicked!');
  }
  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
```


## Conditional Rendering

In React, you can conditionally render components using JavaScript operators like `if` or the conditional (ternary) operator.


```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```


## Lists and Keys

You can render lists in React using JavaScript's `map()` function:


```
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
```

The `key` prop is important for React to identify which items have changed, been added, or been removed.

## Conclusion

This blog post covered the basics of React, including components, JSX, props, state, events, conditional rendering, and lists. With this foundation, you're now ready to start building your own React applications.

React has a lot more to offer, such as hooks, context API, and more advanced patterns. Stay tuned for future posts where we'll dive deeper into these topics.

## Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React GitHub Repository](https://github.com/facebook/react)
- [Create React App](https://create-react-app.dev/)
- [React DevTools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html)

### Happy coding!