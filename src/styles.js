import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Frutiger, "Frutiger Linotype", Univers, Calibri, "Gill Sans", "Gill Sans MT", "Myriad Pro", Myriad, "DejaVu Sans Condensed", "Liberation Sans", "Nimbus Sans L", Tahoma, Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
 
export const StyledImage = styled.div`
  position: relative;
  
  img {
    border-radius: 15px;
    position: relative;
    width: 200px;
    height: 200px;
    background-size: cover;
    margin: 15px;
  }
  
`;

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: wrap-content;
  max-width: 700px;
`;

export const ImageGrid = styled.div`
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledDescription = styled.div`
  box-sizing: border-box;
  padding: 15px;
  cursor: default;
  align-text: center;
  background: black;
  opacity: 100%;
  display: flex; 
  justify-content: center;
  color: white;
  font-weight: 100;
  align-items: center;
  border-radius: 15px;
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  margin: 15px;  
  z-index: 11;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: 0.5s;

  &:hover {
    opacity: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  span {
    font-size: 20px;
  }
`;

export const StyledLikes = styled.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  img {
    width: 20px;
    height: 20px;
    color: white;
    border-radius: 0;
    margin: 0 10px 0 0;
  }
`;

export const LoadingMessage = styled.span`
  width: 100%;
  text-align: center;
`;
