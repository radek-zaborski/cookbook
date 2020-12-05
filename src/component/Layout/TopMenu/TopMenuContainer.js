import {connect} from 'react-redux';
import TopMenu from './TopMenu';

const mapStateToProps = state =>({
  categoryTitle: state.categoryRecipes,
  shoppingList: state.shoppingList,
});

export default connect(mapStateToProps)(TopMenu);