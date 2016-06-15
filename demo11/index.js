import React from 'react'
import {render} from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute, Redirect} from 'react-router'

const App =React.createClass({
  render(){
    return(
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About= ()=>{
  return(
    <h3>About</h3>
  )
}

const Inbox=({children})=>{
  return(
    <div>
      <h2>Inbox</h2>
      <p><Link to="/message/333">To Message</Link></p>
      {children || "Welcome to you Inbox"}
    </div>
  )
}

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

const Message= React.createClass({
  render(){
    return(
      <h3>Message {this.props.params.id}</h3>
    )
  }
})

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} onEnter={()=>alert('enter')} />
      <Route path="inbox" component={Inbox} >
        <Redirect from="message/:id" to="/message/:id" />
      </Route>
      <Route component={Inbox}>
        <Route path="message/:id" component={Message} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('demo11')
)
