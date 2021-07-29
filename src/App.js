import React from 'react';
import Wrapper from './components/Wrapper';
import { Container, Content, GlobalStyle } from './styles';
const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Wrapper />
    </Container>
  )
};

export default App;