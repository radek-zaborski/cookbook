import React from 'react';
import styles from './ShoppingList.module.scss';
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {

  static propTypes = {
    products: PropTypes.object,
    product: PropTypes.object,
    title: PropTypes.string,
    recipe: PropTypes.any,
    ingredients: PropTypes.array,
    ingrend: PropTypes.any,
  }
  render(){
   
    const {products} = this.props;
    const {product} = products;
    
    return(
      <main className={styles.component}>
        <h1>Lista Zakupów:</h1>
        {product.map(item=>(
          <ul key={item.id}><i><u>produkty dla przepisu: <br/><h3>{item.title}</h3></u></i>
            <ul>{item.recipe.ingredients.map(product =>(
              <li key={product.id}>{product} <input type='checkbox' key={product.id} className={styles.checkbox} id={product.id}></input><br/></li>
            ))}</ul>
          </ul>
        ))}
      </main>
    );
  }
}

export default ShoppingList;