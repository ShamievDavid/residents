import React, { useState } from 'react';
import './App.scss';
import { Main } from './features/Main';
import { Card } from './features/Card/Card';
import { residents } from './data';

function App() {
  const [blur, setBlur] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => {
    setSelected(null);
    setBlur(false);
  };

  return (
    <div className="app_wrapper" onClick={selected ? handleClose : undefined}>
      <Main
        blur={blur}
        setBlur={setBlur}
        selected={selected}
        setSelected={setSelected}
      />
      {selected && (
        <Card
          setSelected={setSelected}
          setBlur={setBlur}
          name={residents[selected].name}
          src={residents[selected].photo}
          subTitle={residents[selected].subTitle}
          text1={residents[selected].text1}
          text2={residents[selected].text2}
          mix={residents[selected].mix}
        />
      )}
    </div>
  );
}

export default App;
