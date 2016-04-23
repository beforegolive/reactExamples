import React from 'react'
import ReactDOM from 'react-dom'

// function HelloMessage(props){
//   return (<div>Hello {props.name}, {props.year}</div>)
// }

//var HelloMessage=(props)=> <div>Hello {props.name}, {props.year}!</div>;

var HelloMessage=({name, year})=> <div>Hello {name}, {year}!</div>;

ReactDOM.render(
  <HelloMessage name="Jacky" year='2016' />,
  document.getElementById('demo6')
)
