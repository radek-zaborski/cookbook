import {connect} from 'react-redux';
import Soups from './Soups';

const mapStateToProps = state => ({
  categorySoup: state.categoryRecipes,
});

export default connect(mapStateToProps)(Soups);