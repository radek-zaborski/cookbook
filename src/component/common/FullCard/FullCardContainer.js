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
  console.log(allDishes);
  console.log(id);
 
  const findProduct = allDishes.filter(item => item.localAdress === id);
  console.log(findProduct);
  return {
    product: findProduct,
    

  };
};

export default connect(mapStateToProps)(FullCard);