# Events and Callbacks

## Learning Objectives

### Events

* Explain event-driven development
* Understand the different types of events we can work with in JS
* Setup an event listener and an event handler
* Use the event object

### Callbacks

* Explain the concept of a "callback" and how we can pass functions as arguments to other functions
* Explain why callbacks are important to asynchronous program flow
* Pass a named function as a callback to **another** function
* Pass an anonymous function as a callback to another function

## Events
"DOM Events are sent to notify code of interesting things that have taken place." _- MDN_

- In plain English, what is an event?
- What might an event in the context of a web page be?
- What are some specific examples of common DOM events?

> You can find information on events and examples on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/Events).

For the time being, when we talk about "interesting things that have taken place" we are talking about user interactions with the page.

### Types of Events

There are many events that we can listen for and respond to in JavaScript. Broadly speaking, we can divide these events in to four categories:

**Document / Window Events**

- load
- resize
- scroll
- unload

**Mouse Events**

- click
- dblclick
- mouseenter
- mouseleave

**Key Events**

- keypress	
- keydown
- keyup

**Form Events**

- submit
- change
- focus

### Setting Up An Event Listener

Now that we have an idea of what DOM events are in theory, let's wire up our code and begin interacting with them. There are two steps to working with events: (1) Listening for an event and (2) Responding to an event.

In order to listen for an event, we need to define an **event listener**. Below you'll find a simple event listener associated with a `'click'` event on a `button` element.

First we target the button:

<details>
	<summary>If a button element has a class of 'js-button', how would we capture this from the DOM?</summary>

```js
const button = document.querySelector('.js-button')
```
</details>


Once we have the element from the DOM, we can tell JS to listen for an event: 

```js
// This is the event listener

button.addEventListener('click', handleClickEvent)

// first argument: event
// second argument: callback function
```

That completes step 1 of working with events - we're now listening for a click event on our button!

For step two, we need to define the function that will be called whenever this event is emitted. This is just a function, but it has a special name due to how it's being used: a **callback** function: 

```js
const handleClickEvent = function(){
  console.log('I was clicked!')
}
```

All together, our code looks like this: 

```js
const button = document.querySelector('.js-button')

const handleClickEvent = function(){
  console.log('I was clicked!')
}

button.addEventListener('click', handleClickEvent)
```

Or we could use an anonymous callback function:

```js
const button = document.querySelector('.js-button')
button.addEventListener('click', function() {
  console.log('I was clicked!')
})
```

The code above first gets an element from the DOM. It then attaches an event listener to that `button` element with the `addEventListener()` method. The `addEventListener()` method takes two arguments: (1) the event we want to listen for and (2) the function that should be called whenever that event is invoked. In the case of the code above, we're saying we want to listen for `click` events on our `button`, and whenever someone does click on our button, call the `handleClickEvent()` function.

## Aside: Callbacks -  Calling vs. Referencing

As a quick aside, let's answer the question, "What is a callback function?"

A callback function is a function that is passed in to another function as an argument, so that it can be called (invoked) at a later point. This is one of the many ways that JavaScript handles **asynchronous** code.

Let's see an example.

_Scenario_: Let's say we have a function called `doWork()` that takes a long time to execute (maybe it has to communicate with some external service). We want to perform some task when it is finished, which we wrap into a function called `getPaid()`. How can we ensure that `getPaid()` will only be called after `doWork()` is finished?

You might think that it is as simple as putting the two functions after each other:

```js  
doWork()
getPaid()
```

In some languages this will work, and the process will hang until `doWork` finishes - but not in JavaScript. JavaScript is an asynchronous programming language, which simply means things won't necessarily happen one after the other. Instead, what would likely happen is `doWork` would get called and start it's process, then `getPaid` would get called and then sometime later, `doWork` would finish running.

This is where callbacks come in!

We can imagine the implementation of `doWork` as looking something like this:

```js
const doWork = function( callback ) {

	// code for whatever it is that takes so long ...
	
	callback()
}

```

Making sure `getPaid` is called after `doWork` is finished is now as simple as passing it in to `doWork` as an argument:

```js
doWork( getPaid )
```

Note that we're passing a *reference* to `getPaid` in to `doWork`. 

<details>
	<summary>What is the difference between referencing and invoking a function?</summary>
	Invoking will actually run the function; referencing is just passing it around inside our program. 
</details>

<details>
	<summary>Where does `getPaid` actually get invoked?</summary>
	It will be invoked inside of `doWork`, at the very end of that functions' process or work. 
</details>

## Practice


Go to this [repository](https://git.generalassemb.ly/sei-nyc-dinosaurs/event-listener-practice) and follow the instructions.


## Color Scheme Switcher
 
 > We will build on the Color Scheme Switcher as we work through the following sections of the lesson.
 
 Visit this [repository](https://git.generalassemb.ly/sei-nyc-dinosaurs/color-scheme-switcher) and follow along!

## The Event Object

Comment out the code you just did in the Color Scheme Switcher exercise and put the following...

```js
let buttons = document.querySelector('li a')

const handleClickEvent = function(evt) {
    console.log('I was clicked!')
    console.log(evt)
}

buttons.addEventListener('click', handleClickEvent)
```

### Explore The Event Object

Open up your event listener practice exercise and modify your event handler to accept the event object as a parameter. Then print it to the console.

With your partner, spend three minutes clicking the button and exploring what properties the event (or `evt`) object contains. Look for...

* A way to figure out what element was clicked on.
* A way to tell the position of the mouse when it was clicked.
* One other piece of useful or interesting information.

### Preventing Default Behavior

The event object is useful to us as programmers for many reasons - one of those reasons is preventing the default browser behavior for a certain event. 

A very common use case for this is when the user clicks on an anchor element (`<a>`) but we want to control what happens in our code, rather than rely on what the browser tries to do in response to this event by default (navigate to another location).

For example:

To prevent the default behavior, we have a special method inside the event object: `preventDefault()`.

- How do we call methods on objects?
- How might we then invoke `preventDefault()` to prevent the default browser behavior?

<details>
	<summary> Answer </summary>
	
```js
let button = document.querySelector('.js-button');

button.addEventListener("click", handleClickEvent);

const handleClickEvent = function( evt ){
  evt.preventDefault();
  console.log("I was clicked!")
  console.log(evt)
}
```

</details>


### Refactor Color Switcher

Let's revisit the color switcher example together and find a way to put have just one event listener.


## We Do: DOTS: The Game

Visit this [repository](https://git.generalassemb.ly/sei-nyc-dinosaurs/event-listener-demo) and follow the instructions.

## Extra Practice: [Pixart](https://git.generalassemb.ly/sei-nyc-dinosaurs/pixart_js)

## Additional Reading
- [Build a Drum Kit in Vanilla JS](https://www.youtube.com/watch?v=VuN8qwZoego)
- [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)
- [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [Eloquent JavaScript: Handling Events](http://eloquentjavascript.net/14_event.html)
- [Philip Roberts: What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
