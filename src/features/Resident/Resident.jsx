import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import { getClassName } from '../../utils';
import './Resident.scss';

export const Resident = ({
  name,
  src,
  setBlur,
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
      className={
        selected === keyName ? 'resident_wrapper_none' : getClassName(keyName)
      }
      onClick={handleShow}
    >
      <ImageWrapper src={src} />
      <div className="resident_footer">
        <div>{name}</div>
      </div>
    </div>
  );
};
