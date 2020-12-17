import {connect} from 'react-redux';
import TopMenu from './TopMenu';

const mapStateToProps = state =>({
  categoryTitle: state.categoryRecipes,
  shoppingList: state,
});

export default connect(mapStateToProps)(TopMenu);