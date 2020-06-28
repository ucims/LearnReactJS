import React from 'react';
import logo from './logo.svg';
import './App.css';

class InputJarak extends React.Component {
  
  _handleChange = (e) => {
    this.props.onChangeJarak(e.target.value);
  }

  render() {
    const { labelJarak, jarak } = this.props;

    return(
      <>
        <label>
          {
            labelJarak == 'Kilometer' ? 'Kilometer' :  labelJarak == 'Meter' ? 'Meter' : 'Mili'
           
          }
        </label>
        <input type="number" value={jarak} onChange={this._handleChange}></input>
        <br />
      </>
    )
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kilo : 0,
      meter : 0,
      mili : 0
    }
  }

  onChangeKilo = (kilo) => {
    let meter = (parseFloat(kilo) * 1000).toString();
    let mili = (parseFloat(kilo) * 10000).toString();
    this.setState({kilo, meter, mili});
  }

  onChangeMeter = (meter) => {
    let kilo = (parseFloat(meter) / 1000).toString();
    let mili = (parseFloat(meter) * 1000).toString();
    this.setState({kilo, meter, mili});
  }

  onChangeMili = (mili) => {
    let kilo = (parseFloat(mili) /10000).toString();
    let meter = (parseFloat(mili) / 1000).toString();
    this.setState({kilo, meter, mili});

  }

  onSubmit = (e) => {
    e.preventDefault();
    alert(`${this.state.kilo} kilometer setara dengan ${this.state.meter} meter setara dengan ${this.state.mili} mili`);
  }
  
  render(){ 
    const {kilo, meter, mili} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <InputJarak labelJarak="Kilometer" jarak={kilo} onChangeJarak={this.onChangeKilo} />
        <InputJarak labelJarak="Meter" jarak={meter} onChangeJarak={this.onChangeMeter} />
        <InputJarak labelJarak="Mili" jarak={mili} onChangeJarak={this.onChangeMili} />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default App;
