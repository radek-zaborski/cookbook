import React from 'react';
import styles from './Card.module.scss';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { connect } from 'react-redux';
import {addProduct} from '../../../redux/productsRedux';
class Component extends React.Component {

  static propTypes = {
    props: propTypes.object,
    title: propTypes.string,
    image: propTypes.string,
    description: propTypes.string,
    localAdress: propTypes.string,
    addProduct: propTypes.func,
    recipe: propTypes.object,
    ingredients: propTypes.array,
    addToList:propTypes.func,
    list:propTypes.any,
  }
  
  addToList =() => {
    
    this.props.addProduct();
    alert('dodano produkty do listy zakupów');
  }

  render(){
    const {title, image, description, localAdress } = this.props;
    return(
      <div className={styles.component}>
        <h3>{title}</h3>
        <img src={image} alt='zdjecie potrawy'/>
        <h3>{description}</h3>
        <NavLink to={'singleProduct/' +localAdress} className={styles.link} >Zobacz przepis</NavLink>
        <button className={ clsx(styles.link, styles.addToListButton)} onClick={this.addToList}>Dodaj produkty do listy zakupów</button>
      </div>
    );
  }
}

const mapDistpatchToProps = (dispatch, product) => ({
  addProduct: () => dispatch(addProduct(product)),
});
const Container = connect(null, mapDistpatchToProps)(Component);
export {
  Container as Card,
  Component as CardComponent,
};