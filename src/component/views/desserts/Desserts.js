import React from 'react';
import styles from './Desserts.module.scss';
import PropTypes from 'prop-types';
import Card from '../../common/Card/Card';

class Desserts extends React.Component {

  static propTypes = {
    products: PropTypes.array,
    dishes: PropTypes.array,
  }
  render(){
    const {products} = this.props.dishes[2];
    console.log(products);
    return (
      <div className={styles.component}>
        {products.map(item => (
          <Card className={styles.card} key={item.id} {...item}/>
        ))}
      </div>
    );
  }
}

export default Desserts;