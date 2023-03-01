import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './DavidCard.scss';

export const DavidCard = ({ setShow, show, setBlur }) => {
  const handleClose = () => {
    setShow(!show);
    setBlur(false);
  };

  return (
    <div className="david_wrapper">
      <div className="david_header">
        <div className="david_header_title">David</div>
        <div className="david_header_close" onClick={handleClose}>
          x
        </div>
      </div>
      <ImageWrapper width="712px" height="712px" src="./photo/Davyd.png" />
      <div className="david_footer">
        <p className="david_p_one">
          Dark prince of the crew. Hypnotic mesmerizing jams shift to dense
          assertiveness edging on vibrant and sometimes even gloomy tension in
          his sets. With a background as a singer-songwriter, David has always
          had a rather distinct artistic approach that works unpredictably
          charmingly when it comes to playing in public.
        </p>
        <p className="david_p_two">
          Besides being a co-host of Morning Show and part-time djing tutor,
          David ran his own series ‘Magic Pills' through which he delivered
          elegant and magnetic leftfield downtempo electronics.
        </p>
      </div>
      {/* <iframe
        title="mr_sanguini"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/803794348&color=%233d321d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe> */}
    </div>
  );
};
