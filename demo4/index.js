import React from 'react'
import ReactDOM from 'react-dom'

var mixinObject={
  componentDidMount(){
    this._alertMessage('completed');
  },
  _alertMessage(msg){
    alert(msg);
  }
}

var InputButton=React.createClass({
  mixins:[mixinObject],
  getInitialState(){
    return { val: ''}
  },
  render(){
    var val=this.state.val;
    return(
      <div>
        <input ref={c=>this._input=c }/>
        <button onClick={this._handleClick}>go Button</button>
        <p>input value : <b>{val}</b></p>
      </div>
    )
  },
  _handleClick(){
    this.setState({val: this._input.value})
  }
});

ReactDOM.render(
  <InputButton />,
  document.getElementById('demo4')
)
