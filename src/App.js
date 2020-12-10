import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [initialCap, setInitialCap] = useState(0);
  const [interest, setInterest] = useState(0);
  const [months, setMonths] = useState(0);

  const handleFormChange = (id, value) => {
    if (id === 'capital_inicial') {
      setInitialCap(value);
    }
    if (id === 'juros') {
      setInterest(value);
    }
    if (id === 'meses') {
      setMonths(value);
    }
  };

  const [installmentArray, setInstallmentArray] = useState([{}]);

  useEffect(() => {
    let newArray = [{}];
    let currentCap = initialCap;
    let income = null;
    let accIncome = null;
    let accJuros = null;
    for (let i = 0; i < months; i++) {
      income = currentCap * (interest / 100);
      currentCap += income;
      accIncome = currentCap - initialCap;
      accJuros = (accIncome / initialCap) * 100;
      newArray[i] = {
        month: i + 1,
        currentCap: currentCap.toFixed(2),
        accIncome: accIncome.toFixed(2),
        accJuros: accJuros.toFixed(2),
      };
      setInstallmentArray(newArray);
    }
    /* return () => {
      cleanup
    }; */
  }, [initialCap, interest, months]);

  //implementar o useEffect e mudar as props de Installments
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>React - Juros Compostos</h3>
      <Form onFormChange={handleFormChange} />
      <Installments installmentArray={installmentArray} />
    </div>
  );
}
