import React, { useState } from 'react';
import './Card.scss';

export const Card = ({
  setBlur,
  name,
  src,
  text1,
  text2,
  subTitle,
  setSelected,
  mix,
}) => {
  const [expandMix, setExpandMix] = useState(false);
  const handleClose = () => {
    setBlur(false);
    setSelected(null);
  };

  console.log('mix', mix);

  return (
    <div className="card_wrapper" onClick={(e) => e.stopPropagation()}>
      <div className="card_header">
        <div className="card_header_title">{name}</div>
        <div
          className={
            subTitle ? 'card_header_subtitle' : 'card_header_subtitle_disable'
          }
        >
          (from the Radio)
        </div>
        <div className="card_header_close" onClick={handleClose}>
          x
        </div>
      </div>
      <img className='card_img' src={src} alt={name} />
      <div className="card_footer">
        <p className="card_p_one">{text1}</p>
        <p className="card_p_two">{text2}</p>
      </div>
      <div className="card_mix" onClick={() => setExpandMix(!expandMix)}>
        {expandMix ? 'close' : 'listen to mix'}
      </div>
      {expandMix && mix}
    </div>
  );
};
