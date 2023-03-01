import React from 'react';
import './Main.scss';

export const Main = ({ blur, setBlur }) => {
  return (
    <div className={blur ? 'main_wrapper_blur' : 'main_wrapper'}>
      <div className="main_description">
        Four riders of 20ft Radio: drive, groove, vibe & mystic will light up
        the pan-European tour this May!
      </div>
    </div>
  );
};
