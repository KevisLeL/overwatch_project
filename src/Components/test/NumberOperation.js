import React from 'react';

class NumberOperation extends React.Component {

  state = {
    number1: 0,
    number2: 0,
    result: null
  };

  operate = () => {
    const result = this.props.operation(this.state.number1, this.state.number2);
    console.log(result);
    this.setState({result: result});
  };

  handleChangeNumber1 = event => {
    this.setState({number1: +event.target.value});
  };

  handleChangeNumber2 = event => {
    this.setState({number2: +event.target.value});
  };

  render() {
    return <div>
      <label>{this.props.label}</label>
      <input type='number'
             value={this.state.number1}
             onChange={this.handleChangeNumber1}/>
      <input type='number'
             value={this.state.number2}
             onChange={this.handleChangeNumber2}/>
      <button onClick={this.operate}>GO</button>
      <div>{this.state.result}</div>
    </div>
  }
};

export default NumberOperation;