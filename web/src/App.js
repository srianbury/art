import React, { Component } from 'react';
import './App.css';
import { filenames } from './filenames.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      imageNames: []
    }
  }

  componentDidMount(){
    this.setState({imageNames: filenames})
  }

  handleChange = (event) => {
    const filteredResults = filenames.filter(fn => fn.includes(event.target.value));
    this.setState({
      search: event.target.value,
      imageNames: filteredResults
    })
  }

  render() {
    let list = this.state.imageNames.map((fn) =>
      <div key={fn} id='col' className='col-sm-10 col-md-6 col-lg-3'> 
        <img className='img-fluid' src={require(`./images/${fn}`)} alt={fn} />
        <h5>{fn.substring(0, fn.length-4).replace(/_|-/g, ' ')}</h5>
      </div>
    );

    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className='container d-flex justify-content-between'>
            <h1 className='navbar-brand'>Find a sticker!</h1>
            <a href='https://github.com/shortstack/art' target='_blank' rel="noopener noreferrer">
              <h1  className='navbar-brand'>Check out the artist!</h1>
              <img className='img-thumbnail' style={{height:45  }} src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='Octocat' />
            </a>
          </div>
        </nav>
        <div id='container' className='container'>
          <div className='d-flex justify-content-center'>
            <input className='form-control col-md-6' placeholder='Search here!' style={{marginTop:20, marginBottom:20}} type='text' value={this.state.search} onChange={this.handleChange} />
          </div>
          <div id='row' className='row'>
            {list.reverse()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
