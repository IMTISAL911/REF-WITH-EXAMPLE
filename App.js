import React, { createRef } from 'react';
import logo from './logo.svg';
import './App.css';

class  App extends React.Component {

  constructor(){
    super();
    this.inputRef=createRef()
  }

  componentDidMount(){
    console.log( this.inputRef.current.value)
  }

  getVal(){

    console.log( this.inputRef.current.value)

    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"
    // document.write(this.inputRef.current.value)
  }

  render(){

    return (
      <div className="App">
        <h1>REF WITH EXAMPLE</h1>
        <input type='text' ref={this.inputRef} />

        <button onClick={()=>this.getVal()}>chek ref</button>



      </div>
    );
  }


  }
  

export default App;
