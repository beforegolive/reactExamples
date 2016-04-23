import React from 'react'
import ReactDOM from 'react-dom'
import LifecycleWatcher from './lifecycleWatcher'
import SimpleComponent from './simpleComponent'
import ComplicatedComponent from './complicatedComponent'

var BookListContainer= React.createClass({
  mixins:[LifecycleWatcher],
  render(){
    console.log('render');
    return <div>LifecycleWatcher</div>
  }
})

ReactDOM.render(
//  <SimpleComponent />,
  <ComplicatedComponent />,
  document.getElementById('demo8')
)
