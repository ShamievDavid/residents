import React from 'react';
import { residents } from '../../data';
import { Resident } from '../Resident/Resident';
import './Main.scss';

export const Main = ({ blur, setBlur, setSelected, selected }) => {
  return (
    <div className={blur ? 'main_wrapper_blur' : 'main_wrapper'}>
      <div className="main_description">
        Four riders of 20ft Radio: drive, groove, vibe & mystic will light up
        the pan-European tour this May!
      </div>
      <div className="main_cards">
        {Object.keys(residents).map((resident) => (
          <Resident
            key={resident}
            name={residents[resident].name}
            src={residents[resident].photo}
            mix={residents[resident].mix}
            subTitle={residents[resident].subTitleText}
            keyName={resident}
            setSelected={setSelected}
            setBlur={setBlur}
            selected={selected}
          />
        ))}
      </div>
      <a
        className="main_footer"
        href="mailto:20ftradio@gmail.com"
      >
        for booking
      </a>
    </div>
  );
};
