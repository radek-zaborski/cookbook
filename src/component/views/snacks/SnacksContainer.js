import {connect} from 'react-redux';
import Snacks from './Snacks';

const mapStateToProps = state => ({
  dishes: state.categoryRecipes,
});

export default connect(mapStateToProps)(Snacks);