import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <Box className="App">
      <Box
        className="background"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        backgroundImage="url('/STS-bg.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        color="white"
      >
        <Box className="overlay" bg="rgba(0, 0, 0, 0.5)" p={6} borderRadius="md" textAlign="center">
          <Text fontSize="4xl" fontWeight="bold">Structure Tone Solutions</Text>
          <Text mt={4} fontSize="xl">
            A premier construction management and interior design boutique, boasting over 25 years of industry expertise in crafting exceptional spaces.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
