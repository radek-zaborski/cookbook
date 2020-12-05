import App from './App';
import{shallow} from 'enzyme';

describe('render component',()=>{
  it('render without crash',()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper).toBeTruthy();
  });
});
