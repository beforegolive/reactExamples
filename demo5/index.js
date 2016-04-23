import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Mixin from 'react-mixin'

let mixinObject={
  componentDidMount(){
    this._alertMessage('completed');
  },
  _alertMessage(msg){
    alert(msg);
  }
}

class InputButton extends Component {
  constructor() {
    super()
    this.state={
      val:''
    }
    Mixin.onClass(InputButton, mixinObject);
  }

  render(){
    var val=this.state.val;
    return(
      <div>
        <input ref={c=>this._input=c }/>
        <button onClick={this._handleClick.bind(this)}>go Button</button>
        <p>input value : <b>{val}</b></p>
      </div>
    )
  }

  _handleClick(){
    this.setState({val: this._input.value})
  }
}

ReactDOM.render(
  <InputButton />,
  document.getElementById('demo5')
)

InputButton.propTypes = { initialCount: React.PropTypes.number };
InputButton.defaultProps = { initialCount: 0 };
