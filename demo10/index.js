import React,{ Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory} from 'react-router'

const App=React.createClass({
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

let About=()=>{
  return(
    <div>About</div>
  )
}

let Inbox=({children})=>{
  return(
    <div>
    Inbox
    <p>
      <Link to="/inbox/message/123">Message 123</Link>
    </p>
    <p>
      <Link to="/inbox/message/aaa?name=jacky">Message name</Link>
    </p>
    <div>{children}</div>
    </div>
  )
}

let Home=()=>{
  return(
    <div>Home</div>
  )
}

let Message=({params,location})=>{
  return(
    <div>
      Message
      <p>id: {params.id}</p>
      <p>name: {location.query.name}</p>
    </div>
  )
}

let InboxStatus=()=>{
  return(
    <div>
      InboxStatus
      <p>  <Link to="/inbox/message/123">Message 123</Link></p>
    </div>
  )
}

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="/inbox" component={Inbox} >
        <Route path="message/:id" component={Message} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('demo10')
)
