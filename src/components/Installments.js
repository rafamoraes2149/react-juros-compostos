import React from 'react';
import Installment from './Installment';

export default function Installments({ installmentArray }) {
  return (
    <div className="row">
      {installmentArray.map((element) => {
        return (
          <Installment
            month={element.month}
            p1={element.currentCap}
            p2={element.accIncome}
            p3={element.accJuros}
          />
        );
      })}
    </div>
  );
}
