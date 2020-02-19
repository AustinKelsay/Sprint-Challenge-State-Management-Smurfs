1. What problem does the context API help solve?

The Context API provides a way to share content/data between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is an immutable state tree that holds all of your data for the app.
Reducers are functions that manage state changes by dispatching the current state plus an Action
Actions are specific modifications to the store that are activated by the action.type which is usually a string like this "increment"

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global like the store in redux, application state allows you to access any data in that state from any component.

Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

Component state is only really good for small applications where slices of state operate across a small number of components and is easy to keep tabs on. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like Redux the most because it gives me predictability as I am starting to operate larger and larger applications by myself! I wish it was easier to set up but I'm starting to get used to it.
