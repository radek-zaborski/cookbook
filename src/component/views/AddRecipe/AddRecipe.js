import React from 'react';
import styles from './AddRecipe.module.scss';
// import PropTypes from 'prop-styles';

class AddRecipe extends React.Component {

  state = {
    title: '',
    ingredients: [],
    time: '',
    steps: '',
  }
  handleChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    const wordsArray = value.split(',');


    if(id === 'title'){
      this.setState({
        title: value,
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
  
  render(){
    console.log(this.state);
    return(
      <main className={styles.component} noValidate autoComplete='off'>

        <label>Wprowadź nazwę potrawy<br/>
          <textarea type='text' className={styles.title} id='title' onChange={this.handleChange} ></textarea>
        </label><br/>

        <label>Wybierz kategorię<br/>
          <select name='category' className={styles.select}>
            <option value='Zupy'>Zupy</option>
            <option value='Dania główne'>Dania główne</option>
            <option value='Desery'>Desery</option>
            <option value='Przekąski'>Przekąski</option>
            <option value='Sałatki'>Sałatki</option>
          </select>
        </label><br/>
        <label>Wprowadź składniki oddzielając każdy składnik przecinkiem (,)<br/>
          <textarea type='textarea' className={styles.label} id='ingredients' onChange={this.handleChange} ></textarea>
        </label><br/>

        <label>Podaj czas przygotowania potrawy (minuty)<br/>
          <input type='number' className={styles.number} id='time' onChange={this.handleChange} ></input>
        </label><br/>

        <label>wpisz czynności potrzebne do przygotowania potrawy<br/>
          <textarea type='textarea' className={styles.steps} id='steps' onChange={this.handleChange} ></textarea>
        </label><br/>

        <button onClick={this.handleClick}>zapisz przepis</button>
      </main>
    );
  }
}
export default AddRecipe;