import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Content } from '../styles';
import Images from './Images';
import config from '../constants'

const Wrapper = () => {
  
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);
  const [onDisplay, setOnDisplay] = useState(false);
  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    axios.get('http://localhost:5050/images', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      params: {
        index,
        interval: config.IMAGE_INTERVAL
      }
    }).then(res => {
      setImages([...images, ...res?.data?.body]);
      setIndex(index + config.IMAGE_INTERVAL)
      setOnDisplay(true);
    })
  }
  return (
    <Content>
      { onDisplay ? <Images images={ images } fetchImages={ fetchImages }/> : <p>Loading...</p> }
    </Content>
  );
};

export default Wrapper;