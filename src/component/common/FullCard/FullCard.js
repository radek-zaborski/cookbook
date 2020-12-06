import React from 'react';
import styles from './FullCard.module.scss';
import PropTypes from 'prop-types';

class FullCard extends React.Component {

  static propTypes = {
    product: PropTypes.any,
    title: PropTypes.string,
  }
  render(){
    const {title} = this.props.product[0];
    console.log('tutaj',this.props);
    return(
      <div className={styles.component}>
        {title}
      </div>
    );
  }
}

export default FullCard;