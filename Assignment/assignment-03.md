# Chapter 03 - Laying the Foundation
## Topics
● JSX

● React.createElement vs JSX

● Benefits of JSX

● Behind the Scenes of JSX

● Babel & parcel role in JSX

● Components

● Functional Components

        ○ Composing Components


## Assignment
● What is JSX?

● Superpowers of JSX

● Role of type attribute in script tag? What options can I use there?

 ● What is the difference between `{TitleComponent}`, `{<TitleComponent />}`, and `{<TitleComponent></TitleComponent>}` in JSX?

## Coding Assignment:

 1. Create a Nested Header Element using `React.createElement` (h1, h2, h3 inside a div with class "title")
- **Task**: Use `React.createElement` to create a `div` with class `"title"`, and inside the `div`, create `h1`, `h2`, and `h3` elements with respective texts.

 2. Create the Same Element Using JSX
- **Task**: Create the same structure using **JSX** syntax. The structure should be a `div` with class `"title"`, containing `h1`, `h2`, and `h3` elements.

 3. Create a Functional Component of the Same with JSX
- **Task**: Convert the JSX structure into a **functional component**.

 4. Pass Attributes into the Tag in JSX
- **Task**: Pass **attributes (props)** like `title`, `id`, etc., into the tag of a component.

 5. Composition of Component (Add a Component Inside Another)
- **Task**: Create a component (e.g., `Logo`) and compose it inside another component (e.g., `Header`).

 6. `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}` in JSX
- **Task**: Explain the difference between:
  - `{TitleComponent}`
  - `{<TitleComponent />}`
  - `{<TitleComponent></TitleComponent>}`

 7. Create a Header Component from Scratch using Functional Components with JSX
- **Task**: Create a **Header Component** that includes:
  - A **Logo** on the left
  - A **search bar** in the middle
  - A **User icon** on the right
  - Add **CSS** to make it look nice.

## References

- **Babel**: [https://babeljs.io/](https://babeljs.io/)
- **Attribute Type**: [MDN - Script Element Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- **JS Modules**: [MDN - JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- **Babel Playground**: [https://babeljs.io/repl#](https://babeljs.io/repl#)
- **React without JSX**: [React Docs - React without JSX](https://reactjs.org/docs/react-without-jsx.html)
