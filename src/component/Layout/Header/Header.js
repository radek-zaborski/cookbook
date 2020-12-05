import React from 'react';
import styles from './Header.module.scss';
import TopMenu from '../TopMenu/TopMenuContainer';

class Header extends React.Component {

  render() {

    return (
      <div className={styles.component}>
        <TopMenu/>
      </div>
    );
  }
}               

export default Header;