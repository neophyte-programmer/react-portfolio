// Import ReactDOM from react-dom module
import ReactDOM from "react-dom";
import App from "./App"; // Import App component
import "./index.css"; // Import index.css file

// Render the App component into the DOM element with id 'root' in the index.html
// file of the project folder and then run the application in the browser
// The App component is defined in the src/App.js file
// The App component is imported in the src/index.js file
// The App component is rendered in the index.html file
// The App component is the main component of the application
ReactDOM.render(<App />, document.getElementById("root"));



