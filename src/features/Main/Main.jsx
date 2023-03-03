import React, { useState } from 'react';
import { residents } from '../../data';
import { Resident } from '../Resident/Resident';
import './Main.scss';

export const Main = ({ blur, setBlur, setSelected, selected }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div className={blur ? 'main_wrapper_blur' : 'main_wrapper'}>
      <div className="main_description">
        Four riders of 20ft Radio: drive, groove, vibe & mystic will light up
        the pan-European tour this May!
      </div>
      {Object.keys(residents).map((resident) => (
        <Resident
          key={resident}
          name={residents[resident].name}
          src={residents[resident].photo}
          style={residents[resident].style}
          mix={residents[resident].mix}
          subTitle={residents[resident].subTitleText}
          keyName={resident}
          setSelected={setSelected}
          setBlur={setBlur}
          selected={selected}
        />
      ))}
      <div
        className="main_footer"
        onClick={() => copyToClipboard('20radio@gmail.com')}
      >
        {copied ? 'copied 🎉' : 'e-mail'}
      </div>
    </div>
  );
};
