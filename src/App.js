import MainLayout from './component/Layout/MainLayout/MainLayout';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Soups from './component/views/Soups/SoupsContainer';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.component}>
        <MainLayout>
          <Route path="/soups" exact component={Soups}/> 
        </MainLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
