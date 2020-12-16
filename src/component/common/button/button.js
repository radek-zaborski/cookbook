import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {

  state = {

  }
  
  
  static propTypes = {
    product: PropTypes.any,
  }
  handleClick=(value)=>{
    this.setState( {value});
  }
  render(){
    const {product} = this.props;
    console.log('tutaj', this.props);
    console.log('tutaj state', this.state);
    return(
      <button onClick={this.handleClick(product)}>dodaj do listy zakupów</button>
    );
  }
}

export default Button;