import React, {Component} from 'react';

class Account extends Component{

	componentDidMount(){
    //Render the blaze accounts form and then find the div we
    //just rendered in the 'render' method and place the
    //blaze accounts form in that div
    this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){
    //Find the form we created and destroy them
    //We need to clean up these form ourselves
    Blaze.remove(this.view);
  }

  render(){
    return(
      <div ref="container"></div>
    );
  };
};

export default Account;
