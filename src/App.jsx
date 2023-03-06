import React, { useState, useEffect } from 'react';
import './App.scss';
import { Main } from './features/Main';
import { Card } from './features/Card/Card';
import { residents } from './data';

function App() {
  const [blur, setBlur] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let lastScrollY = 0;
    let ticking = false;

    const onScroll = () => {
      lastScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          hideAddressBar();
          ticking = false;
        });

        ticking = true;
      }
    };

    const hideAddressBar = () => {
      if (window.scrollY > lastScrollY) {
        window.scrollTo(0, 1);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

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
          keyName={selected}
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
