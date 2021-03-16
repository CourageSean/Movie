import React, { Component } from "react";
import "./Bank.css";
import GiroKonto from "./GiroKonto";

class Bank extends Component {
  state = {
    kontoStand: "",
    betragInputvalue: "",
  };

  handleOnChangeBetragInput = (event) => {
    this.setState({ betragInputvalue: event.target.value });
    console.log(event.target.value);
  };

  handleEinzahlung = () => {
    this.setState({
      kontoStand:
        Number(this.state.kontoStand) + Number(this.state.betragInputvalue),
      betragInputvalue: "",
    });
  };

  handleAuszahlung = () => {
    this.setState({
      kontoStand:
        Number(this.state.kontoStand) - Number(this.state.betragInputvalue),
      betragInputvalue: "",
    });
  };

  render() {
    return (
      <div className="konto-body">
        <header>
          <h2>Banana Bank</h2>
        </header>
        <GiroKonto
          handleOnChangeBetrag={this.handleOnChangeBetragInput}
          value={this.state.betragInputvalue}
          saldo={this.state.kontoStand}
          einzahlung={this.handleEinzahlung}
          auszahlung={this.handleAuszahlung}
        />
      </div>
    );
  }
}

export default Bank;
