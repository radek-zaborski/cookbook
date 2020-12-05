import MainLayout from './component/Layout/MainLayout/MainLayout';
import styles from './App.module.scss';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className={styles.component}>
        <MainLayout>
         
        </MainLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
