import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DenseTable from './components/Table';
// import InputFrom from "./components/Input";

// function createData(stage, weapon) {
//   return {stage, weapon};
// }

// const initRows = [
//   createData("Bバスパーク", "ジェットスイーパーカスタム"),
//   createData("エンガワ河川敷", "キャンピングシェルターカーモ"),
//   createData("バッテラストリート", "スパイガジェット"),
//   createData("アジフライスタジアム", "スクリュースロッシャーベッチュー")
// ]

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rows: initRows,
  //   };
  //   this.addNew = this.addNew.bind(this)
  // }

  // addNew(data) {

  //   let preRows = this.state.rows.slice();

  //   console.log(preRows);

  //   this.setState({
  //     rows: preRows.concat([
  //       createData(data.stage, data.weapon)
  //     ])
  //   }, () => {});

  //   // console.log(this.state.rows);
  // }

  render() {
    return (
      <React.Fragment>
        <h2>Spla-memo</h2>
        <BrowserRouter>
          <div>
            {/* <Route exact path='/' render={ () => <DenseTable addFn={ this.addNew } rows={ this.state.rows }/> }/> */}
            <Route exact path='/' component={ DenseTable } />
            {/* <Route path='/new' component={ InputFrom } /> */}
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;