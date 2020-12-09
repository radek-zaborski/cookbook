import React from 'react';
import styles from './MainLayout.module.scss';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
class MainLayout extends React.Component{

  static propTypes ={
    children: PropTypes.any,
  }
  render(){
    const {children} = this.props;
    return(
      <div className={styles.component}>
        <Header/>
        {children}
        
      </div>
    );
  }
}

export default MainLayout;