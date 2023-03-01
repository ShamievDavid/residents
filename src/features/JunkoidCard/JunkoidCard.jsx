import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './JunkoidCard.scss';

export const JunkoidCard = ({ setShow, show, setBlur }) => {
  const handleClose = () => {
    setShow(!show);
    setBlur(false);
  };

  return (
    <div className="junkoid_wrapper">
      <div className="junkoid_header">
        <div className="junkoid_header_title">Junkoid</div>
        <div className="junkoid_header_close" onClick={handleClose}>
          x
        </div>
      </div>
      <ImageWrapper width="712px" height="712px" src="./photo/Junkoid.png" />
      <div className="junkoid_footer">
        <p className="junkoid_p_one">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="junkoid_p_two">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </div>
      <iframe
        title="junkoid"
        width="100%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1415732653&color=%233d321d&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
    </div>
  );
};
