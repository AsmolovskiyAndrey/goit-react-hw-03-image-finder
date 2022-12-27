import React from 'react';
import css from './ImageGalleryItem.module.css';
// import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ smallImg, largeImg, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={smallImg}
        onClick={() => onClick(largeImg)}
        alt=""
      />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   smallImg: PropTypes.string.isRequired,
//   largeImg: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
