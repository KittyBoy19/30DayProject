import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import InfoLabel from './InfoLabel';
import SearchBox from './SearchBox';

const pokemon = [`pikachu`];


class App extends Component{
  constructor(){
    super()
    this.state = {
      pokemon: pokemon,
      searchfield: '',
    }
  }

render(){
  const getURL = (word) => `https://pokeapi.co/api/v2/pokemon/${word}/`

    const getJSON = (url) => {
        console.log(url);
        const xhReq = new XMLHttpRequest(); // new request
        xhReq.open("GET", url, false);
        xhReq.send(null);
        const jsonObject = JSON.parse(xhReq.responseText); // store response
        return jsonObject;
    }

    return (
      <div>
        <p>App</p>
        <InfoLabel />
        <SearchBox />
      </div>
    )
}

}

export default App;
