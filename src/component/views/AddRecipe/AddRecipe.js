import React from 'react';
import styles from './AddRecipe.module.scss';
// import PropTypes from 'prop-styles';
import TextField from '@material-ui/core/TextField';

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
        
        <TextField
          className={styles.textArea}
          id="title"
          label="wpisz tytuł"
          multiline
          rows={2}
          onChange={this.handleChange}
        /><br/><br/>
        <TextField
          className={styles.textArea}
          id="ingredients"
          label="Wpisz produkty oddzielając przecinkiem (,)"
          multiline
          rows={4}
          onChange={this.handleChange}
        /><br/><br/>
        <TextField
          className={styles.textArea}
          id="time"
          label="podaj orientacyjny czas przygotowania"
          multiline
          rows={3}
          onChange={this.handleChange}
        /><br/><br/>
        <TextField
          className={styles.textArea}
          id="steps"
          label="wpisz czynności wykonywania potrawy"
          multiline
          rows={4}
          font-size = {30}
          onChange={this.handleChange}
        /><br/><br/>

        <button onClick={this.handleClick}>zapisz przepis</button>
      </main>
    );
  }
}
export default AddRecipe;