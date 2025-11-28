import React from 'react'
import pythonImage from "./assets/images/python.jpeg"
import cppImage from "./assets/images/cpp.png"
import javaScriptImage from "./assets/images/javascript.png"

function List() {
  return (

    <>
    <img src={cppImage} alt="C++ Image:-" />
    <img src={pythonImage} alt="Python Image:-" />
    <img src={javaScriptImage} alt="JavaScript Image:-" />
    </>
    
  )
}

export default List