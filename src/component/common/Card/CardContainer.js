import {connect} from 'react-redux';
import Card from './Card';
import {addForShoppingList} from '../../../redux/productsRedux';

const mapDistpatchToProps = (dispatch, shoppingList) => ({
  addForShoppingList: () => dispatch(addForShoppingList(shoppingList)),
});
export default connect(null, mapDistpatchToProps)(Card);