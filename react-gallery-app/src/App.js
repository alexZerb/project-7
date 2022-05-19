import React, {Component} from 'react';


import './App.css';
import apiKey from './config.js';
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

  // Request 24 pictures from flickr and sets state 

  componentDidMount( query = 'dog') {
   this.newSearch();
  }

newSearch = ( query = 'dog') => {
  fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then( res => {
    this.setState({
      pics: res.formData.photos.photo,
      query: query,

  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  })
})
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
