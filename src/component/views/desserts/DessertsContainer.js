import {connect} from 'react-redux';
import Desserts from './Desserts';

const mapStateToProps = state =>({
  dishes: state.categoryRecipes,
});

export default connect(mapStateToProps)(Desserts);