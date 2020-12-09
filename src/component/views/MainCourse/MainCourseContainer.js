import {connect} from 'react-redux';
import MainCourse from './MainCourse';

const mapStateToProps = state => ({
  dishes: state.categoryRecipes,
});

export default connect(mapStateToProps)(MainCourse);
