![cf](http://i.imgur.com/7v5ASc8.png) 30:  Component Composition
===

## Learning Objectives
* Students will learn to about composition vs inheritance
* Students will learn how to compose react components using props
* Students will be introduced to using Cypress, a populate integrated testing tool used for front end testing.

## Readings
* Read [conditional rendering](https://facebook.github.io/react/docs/conditional-rendering.html)
* Read [lists and keys](https://facebook.github.io/react/docs/lists-and-keys.html)
* Read [composition vs inheritance](https://facebook.github.io/react/docs/composition-vs-inheritance.html)
* Read [thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)
* Skim [Cypress docs](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-Requirements)
* Watch [this quick tutorial on how to start Using Cypress](https://www.youtube.com/watch?v=-qqBHdgqCMI)

## Outline

## Component Composition

### Composition  
Some components don't know their children ahead of time. React components can use the special `children` prop to pass children directly into their output. For example a `SpeechBubble` component could be passed a `SuccessMessage` or `ErrorMessage` component to be used as a child component.

### Specialization
Composition can be used to create special cases of another component. For example a `Modal` component could be composed to create a `SignupModal`, `LoginModal`, or even a generic `ContentModal`.
