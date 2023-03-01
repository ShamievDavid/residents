import React from 'react';
import { DragBox } from '../../components/DragBox/DragBox';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { SearchIcon } from '../../components/SearchIcon/SearchIcon';
import './Resident.scss';

export const Resident = ({
  name,
  src,
  width,
  height,
  setShow,
  show,
  transform,
  setBlur,
  blur,
}) => {
  const handleShow = () => {
    setShow(!show);
    setBlur(!blur);
  };
  return (
    <DragBox>
      <div className="resident_wrapper" style={{ transform: transform }}>
        <ImageWrapper src={src} width={width} height={height} />
        <div className="resident_footer" onClick={handleShow}>
          <div>{name}</div>
          <SearchIcon />
        </div>
      </div>
    </DragBox>
  );
};
