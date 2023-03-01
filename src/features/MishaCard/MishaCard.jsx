import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './MishaCard.scss';

export const MishaCard = ({ setShow, show, setBlur }) => {
  const handleClose = () => {
    setShow(!show);
    setBlur(false);
  };

  return (
    <div className="misha_wrapper">
      <div className="misha_header">
        <div className="misha_header_title">Misha</div>
        <div className="misha_header_post_title">(from the radio)</div>
        <div className="misha_header_close" onClick={handleClose}>
          x
        </div>
      </div>
      <ImageWrapper width="712px" height="712px" src="./photo/Misha.png" />
      <div className="misha_footer">
        <p className="misha_p_one">
          Kyiv-based slacker Misha started djing in 2017 on Amsterdam’s Red
          Light Radio with his show ‘Where on Earth’, dedicated to Ukraine's
          underground and naive music. After the 20ft Radio launch, he became a
          co-host of Morning Show with David Shamiev and started djing at
          parties.
        </p>
        <p className="misha_p_two">
          His kaleidoscopic and intuitive style brings the attentiveness of a
          listening session to the dancefloor, without losing party’s groove and
          fun. Working with mood rather than music styles, his musical jokes and
          unpredictable turns of storytelling keeps the audience in a trippy
          mood, leaving no chance to cling to something.
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
