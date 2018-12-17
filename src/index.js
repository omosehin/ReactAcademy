import React, { Component } from "react";
import ReactDOM from "react-dom";

import BoardItem from "./components/BoardItem/index.js";
import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      values: ["", "", "", "", "", "", "", "", ""]
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.swapHandler = this.swapHandler.bind(this);
  }

  render() {
    return (
      <div className="App">
        <div className="info">
          <div className="header">Instructions(read this)</div>

          <div className="entry">
            When done with your implementation hit the download button in the
            top left corner to download your solution in a zip file.
          </div>

          <div className="entry">
            Save the zip file with the name format{" "}
            <b>"firstName_lastName-square.zip"</b>.
          </div>

          <div className="entry">
            Send the zip file to gilbert.karadja@gmail.com. Late submissions
            will be ignored. Copying work will be severly penalized (-9,000
            points)
          </div>
        </div>

        <div className="info">
          <div className="header">Question 1</div>
        </div>

        <div className="">
          <div className="">
            <BoardItem
              value={this.state.values[0]}
              onChangeHandler={e => {
                this.changeHandler(0, e);
              }}
            />
            <BoardItem
              value={this.state.values[1]}
              onChangeHandler={e => {
                this.changeHandler(1, e);
              }}
            />
            <BoardItem
              value={this.state.values[2]}
              onChangeHandler={e => {
                this.changeHandler(2, e);
              }}
            />
          </div>

          <div className="">
            <BoardItem
              value={this.state.values[3]}
              onChangeHandler={e => {
                this.changeHandler(3, e);
              }}
            />
            <BoardItem
              swappable={true}
              swapHandler={this.swapHandler}
              value={this.state.values[4]}
              onChangeHandler={e => {
                this.changeHandler(4, e);
              }}
            />
            <BoardItem
              value={this.state.values[5]}
              onChangeHandler={e => {
                this.changeHandler(5, e);
              }}
            />
          </div>

          <div className="">
            <BoardItem
              value={this.state.values[6]}
              onChangeHandler={e => {
                this.changeHandler(6, e);
              }}
            />
            <BoardItem
              value={this.state.values[7]}
              onChangeHandler={e => {
                this.changeHandler(7, e);
              }}
            />
            <BoardItem
              value={this.state.values[8]}
              onChangeHandler={e => {
                this.changeHandler(8, e);
              }}
            />
          </div>
        </div>

        <div className="info">
          <div className="header">Requirements</div>
          <div className="entry">
            1) A user shoud be able to input a value into any square. The{" "}
            <b>value</b> should be a number <b>less than 100</b>
          </div>
          <div className="entry">
            2) Clicking on any of the swap buttons should swap the values of the
            respective squares involved.
          </div>
        </div>

        <div className="info">
          <div className="header">Question 2</div>
          <div className="entry">...just kidding</div>
        </div>
      </div>
    );
  }

  changeHandler(index, e) {
    let value = e.target.value;

    if (isNaN(value) || value > 99) {
      return;
    }

    let values = this.state.values.slice();
    values[index] = value;

    this.setState({
      values: values
    });
  }

  swapHandler(indexA, indexB) {
    let values = this.state.values.slice();

    let valA = values[indexA];
    let valB = values[indexB];

    values[indexA] = valB;
    values[indexB] = valA;

    this.setState({
      values: values
    });
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
