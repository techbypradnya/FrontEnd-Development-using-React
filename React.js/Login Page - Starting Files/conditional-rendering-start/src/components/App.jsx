import React from "react";
import login from "./login";
import Form from "./form";




function App() {

  var isLoggedIn = false;

  return (
    <div className="container">
      {isLoggedIn ? <h1>Welcome!</h1> : <Form />}

    
      
    </div>
  );
}

export default App;
