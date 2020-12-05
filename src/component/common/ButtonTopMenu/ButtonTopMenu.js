import React from 'react';
import styles from './ButtonTopMenu.module.scss';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
class ButtonTopMenu extends React.Component{

  static propTypes = {
    title: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
  }
  render(){
    const {title, adress} = this.props;
    return(
      
      <NavLink to={`${adress}`} className={styles.link} exact activeClassName={styles.active}>{title}</NavLink>
   
    );
  }
}

export default ButtonTopMenu;