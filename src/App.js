import React, { Component } from "react";
import "./App.css";
import Column from "./Column";

const DIRECTION_LEFT = -1;
const DIRECTION_RIGHT = 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Tom",
          cards: [{ name: "Test 1" }]
        },
        {
          name: "Bob",
          cards: [{ name: "Test 2" }]
        },
        {
          name: "George",
          cards: [{ name: "Test 3" }]
        },
        {
          name: "Winnie",
          cards: [{ name: "Test 4" }]
        }
      ]
    };
  }
  handleAdd = columnIndex => {
    var name = prompt("please enter text");
    if (!name) return;
    const card = { name };
    this.setState(prevState => {
      const { columns } = this.state;
      columns[columnIndex].cards.push(card);
      return { columns };
    });
  };

  handleArrows = columnIndex => {
    console.log("hit");
  };

  handleMove = (columnIndex, cardIndex, direction) => {
    this.setState(prevState => {
      const { columns } = prevState;
      const [card] = this.state.columns[columnIndex].cards.splice(cardIndex, 1);
      this.state.columns[columnIndex + direction].cards.push(card);
      return { columns };
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            onMoveLeft={cardIndex =>
              this.handleMove(columnIndex, cardIndex, DIRECTION_LEFT)
            }
            onMoveRight={cardIndex =>
              this.handleMove(columnIndex, cardIndex, DIRECTION_RIGHT)
            }
            onAddCard={() => this.handleAdd(columnIndex)}
            onArrow={() => this.handleArrows(columnIndex)}
          />
        ))}
      </div>
    );
  }
}

export default App;
