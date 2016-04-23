import React from 'react'
import ReactDOM from 'react-dom'

var UserInput= React.createClass({
  getInitialState(){
    return {selectedColor:''}
  },
  render(){
    var color= this.state.selectedColor;
    return(
      <div>
        <select onChange={this._handleChange}>
          <option value=''></option>
          <option value='red'>Red</option>
          <option value='blue'>Blue </option>
          <option value='green'>Green </option>
        </select>
        <p>selected color is : {color} </p>
      </div>
    )
  },
  _handleChange(event){
    this.setState({selectedColor: event.target.value});
  }
})


ReactDOM.render(
  <UserInput />,
  document.getElementById('demo2')
)
