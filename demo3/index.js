import React from 'react'
import ReactDOM from 'react-dom'

var AjaxGetData= React.createClass({
  getInitialState(){
    return {rating: 0}
  },
  render(){
    console.log('render')
    var rating=this.state.rating;
    return(
      <div>书籍：《满月之夜白鲸现》 的豆瓣评分：{rating}分</div>
    )
  },
  componentDidMount(){
    console.log('componentDidMount')
    var url='https://api.douban.com/v2/book/6548683';

    $.ajax({
        type: "GET",
        dataType: 'jsonp',
        url: url
      }).done(function(json){
        var rating = json.rating.average;
        this.setState({rating:rating});
      }.bind(this));
  },
  componentWillMount(){
    console.log('componentWillMount')
  },
  componentWillUpdate(){
    console.log('componentWillUpdate')
  },
  componentDidUpdate(){
    console.log('componentDidUpdate')
  },
  shouldComponentUpdate(nextProps,nextState){
    console.log('shouldComponentUpdate')
    return this.state.rating!==nextState.rating;
  }
})

ReactDOM.render(
  <AjaxGetData />,
  document.getElementById('demo3')
)
