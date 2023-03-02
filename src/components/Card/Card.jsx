import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './Card.scss';

export const Card = ({ setShow, show, setBlur, name, src, text1, text2, subTitle }) => {
    const handleClose = () => {
        setShow(!show);
        setBlur(false);
    };

    return (
        <div className="card_wrapper">
            <div className="card_header">
                <div className="card_header_title">{name}</div>
                <div className={subTitle ? 'card_header_subtitle' : 'card_header_subtitle_disable'}>(from the radio)</div>
                <div className="card_header_close" onClick={handleClose}>
                    x
                </div>
            </div>
            <ImageWrapper width="500px" height="500px" src={src} title='artist' />
            <div className="card_footer">
                <p className="card_p_one">
                    {text1}
                </p>
                <p className="card_p_two">
                    {text2}
                </p>
            </div>
            card
        </div>
    );
};
