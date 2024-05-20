import React, { useState } from 'react';

import styles from './style/gallery.module.css';
import GalleryModal from './galleryModal';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.gallery}>
      <h1>Kliknite na dugme ispod i pogledajte nas smestaj i okolinu</h1>
      <button onClick={openModal} className={styles.openButton}>Galerija slika</button>
      {isModalOpen && <GalleryModal isOpen={isModalOpen} onRequestClose={closeModal} />}
    </div>
  );
};

export default Gallery;

