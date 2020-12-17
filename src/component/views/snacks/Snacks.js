import React from 'react';
import styles from './Snacks.module.scss';
import PropTypes from 'prop-types';
import Card from '../../common/Card/CardContainer';

class Snacks extends React.Component {

  static propTypes = {
    dishes: PropTypes.array,
    products: PropTypes.array,
  }
  render(){
    const {products} = this.props.dishes[3];
    console.log(products);
    return(
      <div className={styles.component}>
        {products.map(item => (
          <Card className={styles.card} key={item.id} {...item}/>
        ))}
      </div>
    );
  }
}

export default Snacks;