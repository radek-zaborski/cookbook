import {connect} from 'react-redux';
import Card from './Card';
import {addProduct} from '../../../redux/productsRedux';

const mapDistpatchToProps = (dispatch, product) => ({
  addProduct: () => dispatch(addProduct(product)),
});
export default connect(null, mapDistpatchToProps)(Card);