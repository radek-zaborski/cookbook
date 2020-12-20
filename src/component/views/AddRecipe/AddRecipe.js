import React from 'react';
import styles from './AddRecipe.module.scss';
import PropTypes from 'prop-types';

class AddRecipe extends React.Component {

  state = {
    title: '',
    category: '',
    ingredients: [],
    time: '',
    steps: '',
  }

  static propTypes = {
    category:PropTypes.any,
    onBlur: PropTypes.any,
  }
  handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    
    const wordsArray = value.split(',');
    console.log('tu',event);

    if(id === 'title'){
      this.setState({
        title: value,
      });
    }

    if(id === 'category'){
      this.setState({
        category: value,
      });
    }

    if(id === 'ingredients'){

      this.setState({
        ingredients: wordsArray,
      });
    }
    if(id === 'time'){
      this.setState({
        time: value,
      });
    }
    if(id === 'steps'){
      this.setState({
        steps: value,
      });
    }
  };

  handleClick = () =>{
    console.log(this.state);
  }
  
  render(){
    console.log(this.state);
    const {handleChange, handleClick} = this;
    return(
      <main className={styles.component} noValidate autoComplete='off'>

        <label>Wprowadź nazwę potrawy<br/>
          <textarea type='text' className={styles.title} id='title' onChange={handleChange} ></textarea>
        </label><br/>

        <label>Wybierz kategorię<br/>
          <select  onBlur={handleChange} name='category' id='category' className={styles.select}>
            <option  id='sel1' value='Zupy'>Zupy</option>
            <option  id='sel2' value='Dania główne'>Dania główne</option>
            <option id='sel3' value='Desery'>Desery</option>
            <option id='sel4' value='Przekąski'>Przekąski</option>
            <option  id='sel5' value='Sałatki'>Sałatki</option>
          </select>
        </label><br/>
        <label>Wprowadź składniki oddzielając każdy składnik przecinkiem (,)<br/>
          <textarea type='textarea' className={styles.label} id='ingredients' onChange={handleChange} ></textarea>
        </label><br/>

        <label>Podaj czas przygotowania potrawy (minuty)<br/>
          <input type='number' className={styles.number} id='time' onChange={handleChange} ></input>
        </label><br/>

        <label>wpisz czynności potrzebne do przygotowania potrawy<br/>
          <textarea type='textarea' className={styles.steps} id='steps' onChange={handleChange} ></textarea>
        </label><br/>

        <button onClick={handleClick}>zapisz przepis</button>
      </main>
    );
  }
}
export default AddRecipe;