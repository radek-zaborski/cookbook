import React from 'react';
import './FullCard.module.scss';
import PropTypes from 'prop-types';

class FullCard extends React.Component {

  static propTypes = {
    product: PropTypes.any,
    title: PropTypes.string,
    recipe: PropTypes.object,
    ingredients: PropTypes.array,
    time: PropTypes.string,
    steps: PropTypes.string,
  }
  render(){
    
    const {title, image, recipe} = this.props.product;
    const {ingredients, time, steps} = recipe;
    console.log('sprawzdam:',recipe);
   
    return(
      <article>
        <h2>{title}</h2>
        <img src={image} alt=''/>
        <ul>
          <h3>Składniki:</h3>:
          {ingredients.map(item=>(
            <li key={item.id}><b>{item}</b></li>
          ))}
        </ul>
        <br/>
        <h3>czas przygotowania: {time}</h3>
        <b>sposób przyrządzania:</b><br/><br/>
        {steps}

      </article>
    );
  }
}

export default FullCard;