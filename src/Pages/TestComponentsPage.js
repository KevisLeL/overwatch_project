import React from "react";
import NumberOperation from "../Components/test/NumberOperation";

class TestComponentsPage extends React.Component {

  sum = (n1, n2) => n1 + n2;
  subtraction = (n1, n2) => n1 - n2;
  multiplication = (n1, n2) => n1 * n2;
  division = (n1, n2) => n1 / n2;

  render() {
    return <React.Fragment>
      <h1>Test Components</h1>
      <NumberOperation label={'Suma'} operation={this.sum}/>
      <NumberOperation label={'Resta'} operation={this.subtraction}/>
      <NumberOperation label={'Multiplicación'} operation={this.multiplication}/>
      <NumberOperation label={'División'} operation={this.division}/>
    </React.Fragment>;
  }
}

export default TestComponentsPage;