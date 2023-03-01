import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './NemoCard.scss';

export const NemoCard = ({ setShow, show, setBlur }) => {
  const handleClose = () => {
    setShow(!show);
    setBlur(false);
  };

  return (
    <div className="nemo_wrapper">
      <div className="nemo_header">
        <div className="nemo_header_title">Nemo Jr.</div>
        <div className="nemo_header_close" onClick={handleClose}>
          x
        </div>
      </div>
      <ImageWrapper width="712px" height="712px" src="./photo/Nemo_Jr.png" />
      <div className="nemo_footer">
        <p className="nemo_p_one">
          Interstellar overdrive captain who’s capable of leading the dancefloor
          from humid and bouncy dubbing gradually into a psychedelic cosmic
          disco-house whirlwind full of weird shifting moods. Kicks in pretty
          strongly, especially for the unprepared public.
        </p>
        <p className="nemo_p_two">
          Being a long-time resident of 20ft Radio, Nemo has contributed to it
          in various forms: as a part of the team and as an author of several
          thematic series like Alienation or Anadolu Invasion. Recently he moved
          to the Netherlands where he started his monthly lo-fi music show
          ‘Boredom Kingdom’ on Rotterdam’s Operator Radio.
        </p>
      </div>
    </div>
  );
};
