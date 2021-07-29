import React from 'react';
import Image from './Image';
import { ImageGrid, LoadingMessage } from '../styles';
import InfiniteScroll from 'react-infinite-scroll-component';

const Images = ({
  images = [],
  fetchImages,
  hasMore
}) => {

  const renderLoader = () => <LoadingMessage>Loading...</LoadingMessage>;
  return (
    <ImageGrid>
      <InfiniteScroll
        dataLength={ images.length } 
        next={ fetchImages }
        hasMore={ hasMore }
        loader={ renderLoader() } >
        { images.map((image, index) => <Image 
          key={ index } 
          src={ image.url } 
          description={ image.description } 
          likes={ image.likes } /> 
        ) }
      </InfiniteScroll>
    </ImageGrid>  
  );
};

export default Images;