import {connect} from 'react-redux';
import Salads from './Salads';

const mapStateToProps = state => ({
  dishes: state.categoryRecipes,
});

export default connect(mapStateToProps)(Salads);