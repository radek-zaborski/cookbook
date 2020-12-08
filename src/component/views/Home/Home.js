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
        Aktualnie pracuję nad kolejnymi zakładkami z menu głównego.<br/>
        Zakładka "zupy" została ukończona i znajdziesz w niej 3 przykładowe przepisy.<br/><br/>
        W ostateczności zostanie stworzony system logowania,<br/>
        w którym będzie można przechowywać swoje przepisy.<br/>
        <img src='https://cdn.pixabay.com/photo/2019/02/20/15/21/underconstruction-4009361_960_720.jpg' alt=''/>

      </div>
    );
  }
}

export default Home;
