import React, {Component} from 'react';
import {
  withRouter
} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import apiKey from './config.js';

import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer'
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      photos: [],
      query: ''
    }
  }

  newSearch = ( query = 'lions') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( Response => {
      this.setState({
        photos: Response.data.photos.photo,
        query: query,
  
    }).catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  })
  }

  // Request 24 pictures from flickr and sets state 

  handleClick = e => {
    const query = e.target.id;
    this.newSearch(query);
  }

  componentDidMount() {
   this.newSearch();
  }

  render() {
    return (
      <div className='container'>
        <SearchForm />
        <Nav navItem={this.handleClick} />
        <PhotoContainer data={this.state.photos} title={this.state.query} altTag={this.state.query}/>
      </div>
    );
  }
  
}

export default withRouter(App);
