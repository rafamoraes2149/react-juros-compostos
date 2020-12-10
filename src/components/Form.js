import React from 'react';

export default function Form({ onFormChange }) {
  const handleFormChange = (evento) => {
    evento.persist();
    const value = evento.target.valueAsNumber;
    const { id } = evento.target;
    if (!isNaN(value)) {
      onFormChange(id, value);
    }
  };

  return (
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s4">
            <input
              placeholder="Capital inicial"
              id="capital_inicial"
              type="number"
              className="validate"
              step="100"
              onChange={handleFormChange}
            />
          </div>
          <div className="input-field col s4">
            <input
              placeholder="Juros"
              id="juros"
              type="number"
              className="validate"
              step="0.1"
              onChange={handleFormChange}
            />
          </div>
          <div className="input-field col s4">
            <input
              placeholder="Período (meses)"
              id="meses"
              type="number"
              className="validate"
              onChange={handleFormChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
