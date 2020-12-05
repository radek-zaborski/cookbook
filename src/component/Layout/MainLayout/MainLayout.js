import React from 'react';
import styles from './MainLayout.module.scss';
import Header from '../Header/Header';

class MainLayout extends React.Component{
  render(){
    return(
      <div className={styles.component}>
        <Header/>
      </div>
    );
  }
}

export default MainLayout;