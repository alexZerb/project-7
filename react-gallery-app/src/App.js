import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import apiKey from './config.js';

import Nav from './components/Nav';
import SearchForm from './components/SearchForm';
import PhotoContainer from './components/PhotoContainer'
export default function App() {
  const query = useState('');
  


  const newSearch = (query = 'lions') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then( response => {
      this.setState({
        pics: response.data.photos.photo,
        query: query,
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  })
  }

  useEffect()

  const handleClick = e => {
    const query = e.target.id;
    newSearch(query);
  }

    return (
      <div className='container'>
        <SearchForm />
        <Nav navItem={handleClick} />
        <PhotoContainer data={this.state.photos} title={this.state.query} altTag={this.state.query}/>
      </div>
    );
  
  
}


