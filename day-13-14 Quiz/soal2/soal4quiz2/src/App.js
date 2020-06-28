import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      nama : '',
      gaji : '',
      tgl_masuk : '',
      jk : '',
      skills : '',
      alamat : '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.inputName = React.createRef();
    this.inputGaji = React.createRef();
    this.inputAlamat = React.createRef();
    this.inputSkills = React.createRef();
    this.inputTglMasuk = React.createRef();
    this.inputJK = React.createRef();
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(
      `Nama : ${this.inputName.current.value}
      Gaji : ${this.inputGaji.current.value}
      tgl_masuk : ${this.inputTglMasuk.current.value}
      Skill : ${this.inputSkills.current.value}
      Alamat : ${this.inputAlamat.current.value}
      `
    );
  }
  

  render() {

    const { name, gaji, alamat, skills, jk, tgl_masuk} = this.state;
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <label>Name : </label>
          <input type="text" id="name" name="name" ref={this.inputName}/><br />
          <label>Gaji : </label>
          <input type="number" id="gaji" name="gaji" ref={this.inputGaji}/><br />
          <label>Alamat :</label>
          <textarea id="alamat" name="alamat"  ref={this.inputAlamat}/><br />
          <label>Jenis Kelamin : </label>
          <input type="radio" name="jk" id="lk" value="Laki - Laki" />Laki - Laki
          <input type="radio" name="jk" id="pr" value="Perempuan" />Perempuan<br/>
          <label>Skill :</label>
          <select multiple name="skill" ref={this.inputSkills}>
            <option value="Ngebacot">Ngebacot</option>
            <option value="Caper">Caper</option>
          </select> <br />
          <label>Tanggal Masuk :</label>
          <input type="date" ref={this.inputTglMasuk} />
          <br />
          <button type="submiit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
