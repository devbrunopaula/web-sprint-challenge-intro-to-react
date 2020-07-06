Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
    React solves this problem, without even having the page reload. It does by a concept called virtual DOM. When a page is rendered using React, the state of the DOM tree structure/hierarchy is stored, and when there any updates to be made to the UI, it does a diff on the previous (old) DOM tree with the new one, and updates only the ones that have changed. In this way, lots of DOM operations/refreshes are reduced, improving performance considerably.

Describe component state.
    The State is an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.

Describe props.
    Props can best be defined as a way of passing data from component to component, basically from parent to child component.

What are side effects, and how do you sync effects in a React component to changes of certain state or props?
    It's really very simple. Side effect = changing something somewhere

    We can sync our effects by using the useEffect hook.

You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade.