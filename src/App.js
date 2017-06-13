import React, { Component } from 'react';
var marked = require('marked');

class App extends Component {
	constructor(props){
	super(props);
	this.state={
		value:'hello \n==\n\nhello\n--\n\ngoodbye \
		\n\nGitHub flavored markdown\
		\n\n*[Steven Le](https://www.freecodecamp.com/lesteven)*'
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event){
		this.setState({value:event.target.value})
	}

  render() {

    return (
      <div className="wrapper">
      	<div className="left">
      		<h1>Markdown</h1>
      		<textarea 
      		value={this.state.value}
      		onInput={this.handleChange} 
      		/>
      	</div>
      	<div className="right">
			<h1>Preview</h1>
			<div className="preview" dangerouslySetInnerHTML={{__html:marked(this.state.value)}}></div>
      	</div>
      </div>
    );
  }
}



export default App;
