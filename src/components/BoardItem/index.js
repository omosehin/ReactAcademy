import React, { Component } from "react";
import ReactDOM from "react-dom";

class BoardItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="board_item">
        <input value={this.props.value} onChange={this.props.onChangeHandler} />

        {this.props.swappable && (
          <div>
            <div
              className="swap_button N"
              onClick={() => {
                this.props.swapHandler(1, 4);
              }}
            >
              {swapIcon}
            </div>
            <div
              className="swap_button S"
              onClick={() => {
                this.props.swapHandler(4, 7);
              }}
            >
              {swapIcon}
            </div>
            <div
              className="swap_button W"
              onClick={() => {
                this.props.swapHandler(3, 4);
              }}
            >
              {swapIcon}
            </div>
            <div
              className="swap_button E"
              onClick={() => {
                this.props.swapHandler(4, 5);
              }}
            >
              {swapIcon}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BoardItem;

var swapIcon = (
  <svg id="Capa_1" x="0px" y="0px" viewBox="0 0 384 384">
    <g>
      <g>
        <g>
          <polygon points="128,0 42.667,85.12 106.667,85.12 106.667,234.667 149.333,234.667 149.333,85.12 213.333,85.12    " />
          <polygon points="277.333,298.88 277.333,149.333 234.667,149.333 234.667,298.88 170.667,298.88 256,384 341.333,298.88    " />
        </g>
      </g>
    </g>
  </svg>
);
