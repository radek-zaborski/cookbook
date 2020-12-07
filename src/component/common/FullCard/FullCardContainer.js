import {connect} from 'react-redux';
import FullCard from './FullCard';
import {categoryRecipes} from '../../../redux/dataStore';

const mapStateToProps = (state, props) =>{
  const id = props.match.params.id;
  const filteredList = state.categoryRecipes;
  const allDishes =[];
  for(let groupDishes of filteredList){
    for( let dishes of groupDishes.products){
      allDishes.push(dishes);
    }
  
  }
  
 
  const findProduct = allDishes.filter(item => item.localAdress === id);
  const product = {...findProduct[0]};
  console.log('sprawdzenie w container',product);
  return {
    
    product: product,

  };
};

export default connect(mapStateToProps)(FullCard);