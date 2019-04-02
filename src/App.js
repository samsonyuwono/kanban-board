import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Column from "./Column";
import Card from "./Card";

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

  render() {
    console.log(this.state);

    // console.log(this.state.columns[0].cards.name);
    // let cards = this.state.columns.cards.map(column => {
    //   column.cards.map(card => {
    //     return <p>{card.name}</p>;
    //   });
    // });
    return (
      <div className="App">
        {this.state.columns.map((column, columnIndex) => (
          <Column
            column={column}
            columnIndex={columnIndex}
            key={columnIndex}
            onAddCard={() => this.handleAdd(columnIndex)}
          />
        ))}
      </div>
    );
  }
}

export default App;
