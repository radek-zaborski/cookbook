import React from 'react';
import styles from './TopMenu.module.scss';
import ButtonTopMenu from '../../common/ButtonTopMenu/ButtonTopMenu';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
class TopMenu extends React.Component {

  static propTypes = {
    categoryTitle: PropTypes.array,
    shoppingList: PropTypes.array,
    product:  PropTypes.array,
  }

  render(){
    const {categoryTitle, shoppingList} = this.props;
    const {product} = shoppingList;
    return(
      <div className={styles.component}>
        {categoryTitle.map((category) => (
          <ButtonTopMenu key={category.title} title={category.title} adress={category.adress}/>
        ))}
      
        <NavLink className={styles.link} to="/shoppingList" exact activeClassName={styles.active}>Lista Zakupów: {product.length}</NavLink>
        <NavLink className={styles.link} to="/newRecipe" exact activeClassName={styles.active}>Dodaj przepis</NavLink>

      </div>
    );
  }
}

export default TopMenu;