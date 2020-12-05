import React from 'react';
import styles from './Card.module.scss';
import propTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    prop: propTypes.object,
  }

  render(){
 
  
    return(
      <div className={styles.component}>
        <img src='' alt='zdjecie potrawy'/>
      </div>
    );
  }
}

export default Card;