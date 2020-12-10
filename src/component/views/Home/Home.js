/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Home.module.scss';

class Home extends React.Component {

  render(){
    return(
      <div className={styles.component}>
        Witaj :)<br/><br/>
        Aktualnie aplikacja jest w trakcie tworzenia,<br/>
        lecz już teraz możesz śledzić zmiany na stronie.<br/>
        Aktualnie zostały stworzone wszystkie zakładki z menu<br/>
         i trwają pracę nad listą zakupów oraz dodawaniem produktów do listy.<br/>
        W ostateczności zostanie stworzony system logowania,<br/>
        w którym będzie można przechowywać swoje przepisy.<br/>
        <img src='https://cdn.pixabay.com/photo/2019/02/20/15/21/underconstruction-4009361_960_720.jpg' alt=''/>

      </div>
    );
  }
}

export default Home;
