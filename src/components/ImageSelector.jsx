import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {ModalBackground, ModalContent, SearchBox, ImageGrid, ImageItem, Input, SearchBtn, CloseBtn } from './ImageSelector.style';

const ImageSelector = ({ onSelect, closeModal }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  const searchImages = async () => {
    try {
      const response = await axios.get('https://api.pexels.com/v1/search', {
        params: { query },
        headers: {
          Authorization: 'dRAkBJWoiZln3S96C6CY2GKpk8ABgfxAa0dpsVIPlk2XgbCdFvO80I9B', // Substitua pela sua chave da API do Pexels
        },
      });
      setImages(response.data.photos);
    } catch (error) {
      console.error('Erro ao buscar imagens:', error);
    }
  };

  return (
    <ModalBackground>
      <ModalContent>
        <SearchBox>
          <Input
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Ex. Rome'
          />
          <div>
            <SearchBtn onClick={searchImages}>Search</SearchBtn>
            <CloseBtn onClick={closeModal}>x</CloseBtn>
          </div>
        </SearchBox>


        <ImageGrid>
          {images.map((image) => (
            <ImageItem
              key={image.id}
              src={image.src.small}
              alt={image.alt}
              onClick={() => {
                onSelect(image.src.large);
                closeModal();
              }}
            />
          ))}
        </ImageGrid>

      </ModalContent>
    </ModalBackground>
  );
};

export default ImageSelector;