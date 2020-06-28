import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function TampilkanData(props){
  return (
    <div>
      <ul>
        <li>Nama : {props.nama}</li>
        <li>Pekerjaan : {props.pekerjaan}</li>
        <li>Hobi : {props.hobi}</li>
      </ul>
    </div>
  );
}

class App extends Component {
  render () {

    const data = {
      nama : 'Uci Muhamad Sanusi',
      pekerjaan : 'Pegawai Swasta',
      hobi : 'rebahan'
    }

    return (
      <div className="App">
        <header className="App-header">
          <TampilkanData nama={data.nama} pekerjaan = {data.pekerjaan} hobi = {data.hobi}/>
        </header>
      </div>
    );
  }
}

export default App;
