import React, { useState } from "react";
import PriceChart from "./PriceChart";
import usePriceData from "./usePriceData";

const App: React.FC = () => {
  const [symbol, setSymbol] = useState("bitcoin");
  const [minutes, setMinutes] = useState(60);

  const priceData = usePriceData(symbol, minutes);

  const handleSymbolChange = (newSymbol: string) => {
    setSymbol(newSymbol);
  };

  const handleMinutesChange = (newMinutes: number) => {
    setMinutes(newMinutes);
  };

  return (
    <div>
      <h1>Cryptocurrency Price Tracker</h1>
      <nav>
        <button onClick={() => handleSymbolChange("bitcoin")}>BTC</button>
        <button onClick={() => handleSymbolChange("ethereum")}>ETH</button>
        <button onClick={() => handleSymbolChange("dogecoin")}>DOGE</button>
      </nav>
      <div>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => handleMinutesChange(parseInt(e.target.value as string))}
          />
        </label>
      </div>
      {priceData ? (
        <div>
          <h2>{symbol.toUpperCase()}</h2>
          <p>Latest: {priceData.latest} EUR</p>
          <p>Average: {priceData.average} EUR</p>
          <PriceChart history={priceData.history} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
