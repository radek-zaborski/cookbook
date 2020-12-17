import React from 'react';
import styles from './Salads.module.scss';
import Card from '../../common/Card/CardContainer';
import PropTypes from 'prop-types';

class Salads extends React.Component {

  static propTypes = {
    dishes: PropTypes.array,
    products: PropTypes.array,
  }

  render(){

    const {products} = this.props.dishes[4];
    console.log(products);
    return(
      <div className={styles.component}>
        {products.map(item=>(
          <Card className={styles.card} key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default Salads;