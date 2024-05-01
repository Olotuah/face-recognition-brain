import React, { Component } from 'react';
// import ParticlesBg from 'particles-bg'
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

 

 const app = new Clarifai.App({
  apiKey:"38e2a1d76a0346d889282bb5fab54bfe"
 });             

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {

  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then(
      function(response) {
        this.calculateFaceLocation(response);
      },
      function(err) {
        // there was an error 
      }
      );

  }

  render(){
  return (  
    <div className="App">
    {/*<ParticlesBg className= 'particles' 
              params={particlesOptions}
            />*/}
     {/*<ParticlesBg type="custom" />*/}
      <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit}/>
            <FaceRecognition imageUrl={this.state.imageUrl} />
    </div>
    );
  }
}

export default App;