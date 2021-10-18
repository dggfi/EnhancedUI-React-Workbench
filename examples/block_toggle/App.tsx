import React, { useState } from "react";
import ToggleItem from "./components/ToggleItem";
import "./styles/styles";

// Creating elements to be used in the React DOM is a straight-forward process.
// All that is required is to create a function that returns a single element.
// If you have never seen jsx, it is understandable that the code below might
// raise a few eyebrows. Nevertheless, a limited intermingling of JavaScript and
// HTML-style syntax is possible.

// The App is our top-level component. If you look in the Terminal.html file,
// you'll see that it is substantially empty save for the JavaScript injection.
// The <div> it returns has a className (the 'class' field equivalent) and uses
// a few utilities from TailwindCSS that ensures the element takes up the entire
// screen, that it uses the Space Engineers font, and that selecting is disabled
// so that we don't highlight text/etc. during onMouseDown events.

// The only thing this component, and thus the entire UI, allows is toggling
// the interfaced block on and off, and toggling whether or not Clang is angry.

const App = (props) => {
    // "But wait", you might be wondering. "If we create components with functions,
    // how do we keep track of state?"

    // You can declare variables in the function body, and they will be subject
    // to the usual rules of closure. However, React VDOM re-renders will call
    // the function again, creating a new component and new references, effectively
    // preventing you from maintaining state. React gives you a way around this with
    // useState, which hooks into the React state API and returns a read-only reference
    // and a setter for updating React's state store.

    const [blockOn, setBlockOn] = useState(false); // with a default value of 'false'
    const [clangHappy, setClangHappy] = useState(false);

    return (
        <div className="relative w-screen h-screen font-engineer text-xl text-blueGray-700 bg-white bg-opacity-90 select-none">
            <div className="flex w-full h-full justify-center items-center">
                <div className="w-1/3 flex flex-col">
                    <div className="flex justify-center items-center mb-12"><p>Clang is {!clangHappy && "NOT"} happy</p></div>
                    <div className="flex justify-between flex-col">
                        {/* The very neat thing about React is that you can nest custom components, treating them like HTML elements */}
                        {/* And also extend their available attributes, such as with setting, state, setter, etc. */}
                        <ToggleItem setting="Toggle" state={blockOn} setter={setBlockOn} />
                        <ToggleItem setting="Clang Happy" state={clangHappy} setter={setClangHappy} choiceA="Yes" choiceB="No" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;