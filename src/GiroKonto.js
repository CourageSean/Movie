import React from "react";

export default function GiroKonto(props) {
  return (
    <div className="konto">
      <h3>Dein Girokonto</h3>
      <div className="saldo">
        <h3 className="geldbetrag">{props.saldo}€</h3>
      </div>
      <input
        type="text"
        onChange={props.handleOnChangeBetrag}
        value={props.value}
      />
      <br />
      <button className="einzahlung" onClick={props.einzahlung}>
        Einzahlung
      </button>
      <button className="auszahlung" onClick={props.auszahlung}>
        Auszahlung
      </button>
    </div>
  );
}
