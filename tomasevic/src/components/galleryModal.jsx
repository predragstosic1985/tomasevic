import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSwipeable } from 'react-swipeable';
import styles from './style/galleryModal.module.css';
import { images } from './util';

const GalleryModal = ({ isOpen, onRequestClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.galleryModal} {...handlers}>
        <button onClick={onRequestClose} className={styles.closeButton}>X</button>
        <button onClick={prevImage} className={`${styles.navButton} ${styles.left}`}>{"<"}</button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className={styles.image} />
        <button onClick={nextImage} className={`${styles.navButton} ${styles.right}`}>{">"}</button>
      </div>
    </Modal>
  );
};

export default GalleryModal;
