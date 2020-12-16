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
    

    console.log(product);
    return(
      <main>
        <h1>Lista Zakupów:</h1>
        {product.map(item=>(
          <ul key={item.id}>produkty dla przepisu: {item.title}
            <ul>{item.recipe.ingredients.map(product =>(
              <li key={product.id}>{product} <input type='checkbox' key={product.id} id={product.id}/></li>
            ))}</ul>
          </ul>
        ))}
      
      </main>
    );
  }
}

export default ShoppingList;