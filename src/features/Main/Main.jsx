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
      {Object.keys(residents).map((resident) => (
        <Resident
          key={resident}
          name={residents[resident].name}
          src={residents[resident].photo}
          width={residents[resident].width}
          height={residents[resident].height}
          top={residents[resident].top}
          left={residents[resident].left}
          mix={residents[resident].mix}
          keyName={resident}
          setSelected={setSelected}
          setBlur={setBlur}
          selected={selected}
        />
      ))}
    </div>
  );
};
