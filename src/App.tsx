import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>([...goodsFromServer]);

  const handleSortAlphabetically = () => {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));
    setGoods(sorted);
  };

  const handleSortByLength = () => {
    const sorted = [...goods].sort((a, b) => a.length - b.length);
    setGoods(sorted);
  };

  const handleReverse = () => {
    const reversed = [...goods].reverse();
    setGoods(reversed);
  };

  const handleReset = () => {
    setGoods([...goodsFromServer]);
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={handleSortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={handleSortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={handleReverse}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
