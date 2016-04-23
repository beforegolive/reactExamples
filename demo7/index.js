import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class BookListContainer extends Component{
  constructor() {
    super()
    this.state={ books:[] }
  }

  componentDidMount(){
    var url="https://api.douban.com/v2/book/search?q=nodejs";
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      url:url
    }).done(function(result){
      this.setState({books:result.books})
    }.bind(this))
  }

  render(){
    return(
      <BookListPresentation books={this.state.books} />
    )
  }
}

var BookListPresentation = ({ books })=>
    <ul>
      {books.map(e=><li key={e.id}>{e.title}</li>)}
    </ul>


// class BookListPresentation extends Component {
//   render(){
//       var books = this.props.books;
//       return (
//         <ul>
//           {books.map(e=><li key={e.id}>{e.title}</li>)}
//         </ul>
//       )
//   }
// }

ReactDOM.render(
  <BookListContainer />,
  document.getElementById('demo7')
)
