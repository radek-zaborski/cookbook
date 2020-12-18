import MainLayout from './component/Layout/MainLayout/MainLayout';
import styles from './App.module.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Soups from './component/views/Soups/SoupsContainer';
import FullCard from './component/common/FullCard/FullCardContainer';
import Home from './component/views/Home/Home';
import MainCourse from './component/views/MainCourse/MainCourseContainer';
import Desserts from './component/views/desserts/DessertsContainer';
import Snacks from './component/views/snacks/SnacksContainer';
import Salads from './component/views/salads/SaladsComponent';
import shoppingList from './component/views/ShoppingList/ShoppingListContainer';
import AddRecipe from './component/views/AddRecipe/AddRecipe';

function App() {
  return (
    <BrowserRouter className={styles.component}>
      <div>
        <MainLayout>
          <Route path="/" exact component={Home}/>
          <Route path="/newRecipe" exact component={AddRecipe}/>
          <Route path="/soups" exact component={Soups}/> 
          <Route path="/mainCourse" exact component={MainCourse}/>
          <Route path="/desserts" exact component={Desserts}/>
          <Route path="/snacks" exact component={Snacks}/>
          <Route path="/salads" exact component={Salads}/>
          <Route path="/shoppingList" exact component={shoppingList}/>
          <Route path="/singleProduct/:id" exact component={FullCard}/> 

        </MainLayout>
      </div>
    </BrowserRouter>
  );
}

export default App;
