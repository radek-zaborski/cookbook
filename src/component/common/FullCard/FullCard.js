import React from 'react';
import styles from './FullCard.module.scss';
import PropTypes from 'prop-types';

class FullCard extends React.Component {

  static propTypes = {
    product: PropTypes.any,
    title: PropTypes.string,
    image: PropTypes.string,
  }
  render(){
    
    const {title, image} = this.props.product;
    
   
    return(
      <div className={styles.component}>
        <h2>{title}</h2>git 
        <img src={image} alt=''/>
      </div>
    );
  }
}

export default FullCard;