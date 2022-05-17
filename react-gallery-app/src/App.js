import React, {Component} from 'react';


import './App.css';
import Nav from './components/Nav';
import SearchForm from './components/SearchForm';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      query: ''
    }
  }

  handleClick() {
    console.log('click happened')
  }
  render() {
    return (
      <div className='container'>
        <SearchForm />
        <Nav />
      </div>
    );
  }
  
}

export default App;
