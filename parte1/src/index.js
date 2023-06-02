
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {  return ( 
     <div>  
       <p>Hello {props.name} , you are {props.age} years old.</p>   
     </div>  )
}
const App = () => {
  const now = new Date().toLocaleDateString();
  const name = "Juan";
  const age = 20;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age={18+10}/>   
      <Hello name="Danilo" age={age}/>   
    </>
  )
};
ReactDOM.render(<App />, document.getElementById('root')) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
