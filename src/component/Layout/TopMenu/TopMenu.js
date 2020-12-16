import React from 'react';
import styles from './TopMenu.module.scss';
import ButtonTopMenu from '../../common/ButtonTopMenu/ButtonTopMenu';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
class TopMenu extends React.Component {

  static propTypes = {
    categoryTitle: PropTypes.array,

  }

  render(){
    const {categoryTitle} = this.props;
    console.log(this.props);
    return(
      <div className={styles.component}>
        {categoryTitle.map((category) => (
          <ButtonTopMenu key={category.title} title={category.title} adress={category.adress}/>
        ))}
      
        <NavLink className={styles.link} to="/shopList" exact activeClassName={styles.active}>Lista Zakupów</NavLink>
          *
      </div>
    );
  }
}

export default TopMenu;