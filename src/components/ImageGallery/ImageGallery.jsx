// import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ galleryItems, ...otherProps }) => {
  return (
    <ul className={css.ImageGallery}>
      {galleryItems.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          smallImg={webformatURL}
          largeImg={largeImageURL}
          {...otherProps}
        />
      ))}
    </ul>
  );
};
