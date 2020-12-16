import ShoppingList from './ShoppingList';
import {connect} from 'react-redux';


const mapStateToProps = (state) =>({
  products: state,
  
});

export default connect(mapStateToProps)(ShoppingList);