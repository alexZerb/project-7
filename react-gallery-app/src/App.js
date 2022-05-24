import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './config.js';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer'
import NavBar from './components/NavBar';

// CONVERT TO FUNCTION IF POSSIBLE

class App extends Component {
  
  constructor(props) {
    super(props);
//sets pics state to an empty array and query to an empty string
    this.state = {
      photos: [],
      query: ''
    }
  }
// when page loads a new search is called (query is set to lions)
  componentDidMount(){
    this.newSearch();
  }

  newSearch = ( query = 'lions') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        photos: response.data.photos.photo,
        query: query,
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  })
  }
//  navBar should update photos to match selection
  handleClick = e => {
    const query = e.target.id;
    this.newSearch(query);
  }

  render() {
    console.log(this.state.data);
    return (
      <div className='container'>
        <SearchForm />
        <NavBar navItem={this.handleClick} />
        <PhotoContainer />
      </div>
    );
  }
  
}

export default App;
