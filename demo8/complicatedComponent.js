import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Mixin from 'react-mixin'
import LifecycleWatcher from './lifecycleWatcher'

class BookListContainer extends Component{
  constructor() {
    super()
    this.state={ books:[], selectedValue:''}
    this.color='blue';
    Mixin.onClass(BookListContainer, LifecycleWatcher)
  }

  _handleChange(event){
    var selectedValue=event.target.value
    var url="https://api.douban.com/v2/book/search?q="+selectedValue;
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url:url
    }).done(function(json){
      this.setState({ books:json.books, selectedValue: selectedValue})
    }.bind(this))
  }

  render(){
    console.log('%c render','color: '+this.color)
    return(
      <div>
        <select onChange={this._handleChange.bind(this)} >
          <option value=''></option>
          <option value='nodejs'>nodejs</option>
          <option value='react'>react</option>
        </select>
        <p>selected value is : {this.state.selectedValue}</p>
        <BookListPresentation books={this.state.books} />
      </div>
    )
  }
}

class BookListPresentation extends Component {
  constructor(){
    super()
    this.color='green';
    Mixin.onClass(BookListPresentation, LifecycleWatcher)
  }
  render(){
      console.log('%c render','color: '+this.color)
      var books = this.props.books;
      return (
        <ul>
          {books.map(e=><li key={e.id}>{e.title}</li>)}
        </ul>
      )
  }
}

export default BookListContainer
