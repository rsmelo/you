import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js'
import Song from './components/Song/Song.js'


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      value: '',
      info: [],
      full_title: '',
      image_url: require ("./question.jpg")
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/songs/match?handle=${this.state.value}`, {
      headers: new Headers ({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })})

      .then(response => response.json()) //returns a promise that needs to be turned into a javascript object
      //data from api
      .then(response => {
        // console.log(response)
          // console.log(response[0].full_title);
          this.setState({
              full_title: response[0].full_title,
              image_url: response[0].primary_artist.image_url
          })
      })
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Logo/>
        <ImageLinkForm value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <Song full_title={this.state.full_title} image_url={this.state.image_url}/>
      </div>
    )
  }

  
}

export default App;
