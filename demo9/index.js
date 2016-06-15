import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { Router,Route, Link, hashHistory} from 'react-router'

var HelloName= React.createClass({
  propTypes:{
    year: PropTypes.number.isRequired
  },
  render(){
    var name=this.props.myName;
    var year=this.props.year;
    return(
      <div>
        <p>Hello {name}! {year}</p>
        <p><Link to="/about">About</Link></p>
      </div>
    )
  }
})

let About= ()=>{
  return(
    <div>
      <p>About page</p>
      <p><Link to="/">Hello</Link></p>
    </div>
  )
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={HelloName}/>
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('demo9')
)


// app.propTypes={
//   selectedReddit:PropTypes.string.isRequired,
//   lastupdate: PropTypes.number
// }
