import React from 'react';
import PropTypes from 'prop-types';

import { Container, PhotoContainer } from '../styles/ReviewsPhotoModal.styled';

const ReviewPhotoModal = ({ currentImg, setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <PhotoContainer>
        <button onClick={handleClick} type="button">x</button>
        <img
          src={currentImg}
          alt="customer uploaded"
        />
      </PhotoContainer>
    </Container>
  );
};

export default ReviewPhotoModal;

ReviewPhotoModal.propTypes = {
  currentImg: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};