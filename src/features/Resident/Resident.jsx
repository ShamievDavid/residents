import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
// import { SearchIcon } from '../../components/SearchIcon/SearchIcon';
import './Resident.scss';

export const Resident = ({
  name,
  src,
  width,
  height,
  setBlur,
  top,
  left,
  setSelected,
  selected,
  keyName,
}) => {
  const handleShow = () => {
    setBlur(true);
    setSelected(keyName);
  };

  return (
    <div
      className={selected ? 'resident_wrapper_none' : 'resident_wrapper'}
      onClick={handleShow}
      style={{ top: top, left: left }}
    >
      <ImageWrapper src={src} width={width} height={height} />
      <div className="resident_footer">
        <div>{name}</div>
        {/* <SearchIcon /> */}
      </div>
    </div>
  );
};
