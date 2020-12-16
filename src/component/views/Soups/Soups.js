import React from 'react';
import styles from './Soups.module.scss';
import PropTypes from 'prop-types';
import {Card} from '../../common/Card/Card';
class Soups extends React.Component {

  static propTypes = {
    categorySoup: PropTypes.array,
    products: PropTypes.array,
    soups: PropTypes.object,
  }
  render(){
    const {categorySoup} = this.props;
    const soups = categorySoup[0].products;
  
    return(
      <div className={styles.component}>
        {soups.map(soup=>(
          <Card className={styles.card} key={soup.id} {...soup}/>
        ))}
      </div>
    );
  }
}

export default Soups;