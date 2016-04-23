import React from 'react'

var LifecycleWatcher = {
  _printMessage(msg){
   console.log(`%c ${msg}`, `color: ${this.color}`);
  },
  componentWillMount(){
    this._printMessage('componentWillMount');
  },
  componentDidMount(){
    this._printMessage('componentDidMount');
  },
  componentWillReceiveProps(){
    this._printMessage('componentWillReceiveProps');
  },
  shouldComponentUpdate(){
    this._printMessage('shouldComponentUpdate');
    return true;
  },
  componentWillUpdate(){
    this._printMessage('componentWillUpdate');
  },
  componentDidUpdate(){
    this._printMessage('componentDidUpdate');
  },
  componentWillUnmount(){
    this._printMessage('componentWillUnmount');
  }
};

export default LifecycleWatcher
