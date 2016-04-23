import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Mixin from 'react-mixin'
import LifecycleWatcher from './lifecycleWatcher'

class SimpleComponent extends Component{
  constructor() {
    super()
    this.state={selectedValue: '' }
    Mixin.onClass(SimpleComponent, LifecycleWatcher);
  }

  _handleChange(event){
    this.setState({selectedValue: event.target.value})
  }

  render(){
    console.log(' render')
    return(
      <div>
        <select onChange={this._handleChange.bind(this)} >
          <option value=''></option>
          <option value='nodejs'>nodejs</option>
          <option value='react'>react</option>
        </select>
        <p>selected value is : {this.state.selectedValue}</p>
      </div>
    )
  }
}

export default SimpleComponent
