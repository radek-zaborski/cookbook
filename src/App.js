import MainLayout from './component/Layout/MainLayout/MainLayout';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Soups from './component/views/Soups/SoupsContainer';
import FullCard from './component/common/FullCard/FullCardContainer';
import Home from './component/views/Home/Home';
function App() {
  return (
    <BrowserRouter className={styles.component}>
      <div>
        <MainLayout>
          <Route path="/" exact component={Home}/>
          <Route path="/soups" exact component={Soups}/> 
          <Route path='/singleProduct/:id' exact component={FullCard}/> 
        </MainLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
