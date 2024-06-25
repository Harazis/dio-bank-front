import { Layout } from './Components/Layout';
import styled from 'styled-components';
import { Center, ChakraProvider, Input, Box, Button } from '@chakra-ui/react'
import { login } from './services/login';
import { Card } from './Components/Card';
import { Header } from './Components/Header/Header';




function App() {
  return (
    <>
      <Header />
      <Card />
    </>
  );
}

export default App;
