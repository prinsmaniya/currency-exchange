import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('INR');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('');
  const exchangeRates = {
    USD: 1,
    EUR: 0.85,
    INR: 74.71,
    PKR: 292.75,
    NPR: 119.53,
    CAD: 1.26,
  };
  const convert = () => {
    if (amount === '') {
      alert('Please enter number.');
      return;
    }
    const result = (parseFloat(amount) / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
    setConvertedAmount(result.toFixed(2));
  };


  return (
    <div>
      <hr></hr>
      <hr></hr>
      <div style={{ backgroundColor: 'green', width: '400px', marginLeft: '20px', color: 'white', paddingBottom: '10px', borderRadius: '5px'}}>
        <h1 style={{ textAlign: 'center'}}>Que:- 2</h1>
        <h3 style={{ textAlign: 'center'}}>currency conversion</h3>
        <div>
          <div>
            Amount:<input type="text" value={amount} onChange={(e) => { setAmount(e.target.value) }} />

            <select value={fromCurrency} onChange={(e) => { setFromCurrency(e.target.value) }}>
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} >
                  {currency}
                </option>
              ))}
            </select>

            <select value={toCurrency} onChange={(e) => { setToCurrency(e.target.value) }}>
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency}>
                  {currency}
                </option>
              ))}
            </select>

            <button onClick={convert}>Convert</button>
          </div>

          <div>
            <p>Converted Amount:  {convertedAmount} {toCurrency}</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;