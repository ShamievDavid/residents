import React from 'react';
import { ImageWrapper } from '../../components/ImageWrapper/ImageWrapper';
import './Resident.scss';

export const Resident = ({
  name,
  src,
  setBlur,
  setSelected,
  selected,
  keyName,
  subTitle,
}) => {

  const handleShow = () => {
    setBlur(true);
    setSelected(keyName);
  };

  const getClassName = () => {
    return `resident_wrapper_${keyName}`;
  };

  return (
    <div
      className={
        selected === keyName ? 'resident_wrapper_none' : getClassName()
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
