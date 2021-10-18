import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// React uses its own special syntax (in .jsx & .tsx files) that allows it to generate
// visual elements from HTML-style markup. The overlap in functionality is extremely similar,
// with almost everything you can do in HTML replicated in React, with the advantage that you can
// extend the attributes available. The most important thing to note here, however, is that outside
// the one exception below, React does NOT alter the original DOM. This means that you if you try
// to modify the DOM on your own (i.e. jQuery), you will get some surprising or dead-end results.

// Instead, React uses its own DOM -- the "Virtual" DOM -- and injects it into the original
// DOM with the code below.


ReactDOM.render(<App />, document.getElementById("root"));