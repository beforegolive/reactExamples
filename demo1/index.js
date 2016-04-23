import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'

var HelloName= React.createClass({
  propTypes:{
    year: PropTypes.number.isRequired
  },
  render(){
    var name=this.props.myName;
    var year=this.props.year;
    return(
      <p>Hello {name}! {year}</p>
    )
  }
})

ReactDOM.render(
  <HelloName myName='Jacky'/>,
  document.getElementById('demo1')
)

// app.propTypes={
//   selectedReddit:PropTypes.string.isRequired,
//   lastupdate: PropTypes.number
// }
