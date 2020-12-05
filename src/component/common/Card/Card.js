import React from 'react';
import styles from './Card.module.scss';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Card extends React.Component {

  static propTypes = {
    props: propTypes.object,
    title: propTypes.string,
    image: propTypes.string,
    description: propTypes.string,
    localAdress: propTypes.string,
  }

  render(){
    
    const {title, image, description, localAdress} = this.props;
    return(
      <div className={styles.component}>
        <h3>{title}</h3>
        <img src={image} alt={description}/>
        <h3>{description}</h3>
        <NavLink className={styles.link} to={localAdress}>Zobacz przepis</NavLink>
        <button className={styles.link} onClick=''>Dodaj produkty do listy zakupów</button>
      </div>
    );
  }
}

export default Card;