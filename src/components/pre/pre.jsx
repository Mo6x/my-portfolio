import { useState, useRef } from "react";

export default function Chat() {
  // const btnRef = useRef(null);
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  let timeoutID = useRef();

  function handleSend() {
    setIsSending(true);
    timeoutID.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 5000);
  }

  function handleUndo() {
    setIsSending(false);
    clearTimeout(timeoutID.current);
  }

  return (
    <>
      <input
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={isSending} onClick={handleSend}>
        {isSending ? "Sending..." : "Send"}
      </button>
      {isSending && <button onClick={handleUndo}>Undo</button>}
    </>
  );
}




// Another solution 
export function getFinalState(baseState, queue) { 
    let finalState = baseState;   
  for (let update of queue) {    
     if (typeof update === 'function') {  
            // Apply the updater function.
      finalState = update(finalState);    
         } else {     
      // Replace the next state.、     
            finalState = update;  
           } 
          }   return finalState; }


        // Another solution
        import React, { useState } from "react";
        import ReactDOM from "react-dom";

        const people = [
          "Shashi Koshy",
          "Dhriti Taneja",
          "Dipa Mishra",
          "Ansh Thakkar",
          "Lakshmi Thaker",
          "Sushila Matthai",
          "Shresth Nigam",
          "Bhavana Biswas",
          "Vasudha Mangat",
          "Priya Saran",
          "Andrea Pirlo",
          "Xabi Alonso",
          "Uti Kevin",
          "Magnu Carlsen",
          "Anatoly Karpov",
          "Bobby Fischer",
          "Ilkay Gundogan",
        ];

        // COMPLETE THE TASK BY ADDING SEARCH FUNCTIONALITY.
        // LOWERCASE AND UPPERCASE SHOULD BE IGNORED.

        function App() {
          const [searchItem, setSearchItem] = useState("");
          const [filteredNames, setFilteredNames] = useState(people);

          const handleSearch = (event) => {
            setSearchItem(event.target.value);
            setFilteredNames(
              people.filter((name) =>
                name.toLowerCase().includes(event.target.value.toLowerCase())
              )
            );
          };
          return (
            <div className="App">
              <input
                type="text"
                value={searchItem}
                placeholder="Search"
                onChange={handleSearch}
              />
              <ul>
                {filteredNames.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        const rootElement = document.getElementById("root");
        ReactDOM.render(<App />, rootElement);

        // Link to them 
        /*
https://codesandbox.io/s/patient-meadow-xhxef9?file=/src/index.js:0-1196
        https://codesandbox.io/s/dark-moon-nddekr?file=/src/Chat.js:0-822
        */

        // Another solution 

const unique = (arr) => {

 
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
        newArr.push(arr[i])
        }
    }
    return newArr
}

    //refactoring code using Hash Method 
            const uniquehash = (arr) => {
              const hash = {};
              const result = [];

              for (let i = 0; i < arr.length; i++) {
                if (!hash[arr[i]]) {
                  result.push(arr[i]);
                  hash[arr[i]] = true;
                }
              }

              return result;
            };
  // id its --- Bhuvaneshwaran that want to interview 

            //convert the alortithm above to array using javascript
        //let obj = { id: "1": "user22", age: "26", work: "programmer" };
   
            //what is the output 
            var x = 23;
            (function () {
                var x = 43;
                function random() {
                    x++;
                    console.log(x);
                    var x = 21
                }
            })
            
            //output Undefined 
/*

what is virtual dom 
what is benefit of react 
what is difference between let, const , and var
difference between foreach and map
what is closure
what is hoisting
what is async await 
difference between reset and normal css
universal selectors in html
position properties in html
difference between strong and bold tag in html 
what is void element in html 
what is difference between block element and line element in html 
what is hooks 
what useMemo
different between props and state 
what is redux 
what is useContext
what is webpack
is Javascriipt single thread and how does it multitask
what is synthetic event
*/

 // Theory to read
        /*
Callback 
is a function which can be executed after another function has finished execution 

Memoization 
is a performance technique which attempt to increase function performance by caching previously computed results 

Closures 
is a function that is evaluated in an environment containing one or more variables .

Lexical function 
this helps to resolve a variable name when a function is being created inside another function 

HOISTING 
Hoisting is a javascript mechanism where function declaration are moved to the top of a scope before declaration

FirstOrderFunction 
its a function that does not accept other function as an argument and does not return a function 

Opposite its Higher order function 

Higher order component 
is an advanced technique in react for reusing component logic 

Controlled component- 
a component that controls the input element within the forms on subsequent user input. for example to write a name in Uppercase letters we can use handleChange

Uncontrolled component -
are the one that store their own state internally and can their DOM can be query using ref to find its current value 


useRef is a React Hook that lets you reference a value that's not needed for rendering. const ref = useRef(initialValue). 
It can be used to store a mutable value that does not cause a re-render when updated.

A stateless system sends a request to the server and relays the response (or the state) back without storing any information. On the other hand, stateful systems expect a response, track information, and resend the request if no response is received. The state is a built-in React object that is used to contain data or information about the component

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

useState is the ability to encapsulate local state in a functional component. 

DOM is an interface that allows the script to update the content, style, and structure of the document. Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
Virtual DOM features make it use less noticeable space in memory usage

GET: Retrieves data from the server. Should have no other effect. 
PUT: Replaces target resource with the request payload. Can be used to update or create a new resource.
The main difference between the PUT and PATCH method is that the PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server. 
The DELETE method deletes the specified resource.
React library is responsible for creating views and ReactDOM library is responsible to actually render UI in the browser.

 What are props in React?
Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

10. What is the difference between state and props?Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.

What's split coding 
what is key in react 
why do we use react



//
        */