import React, { useState, useEffect } from 'react';
import { Box, Text, Spinner } from '@chakra-ui/react';
import './App.css';
import logo from './assets/logo.png';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = '/STS-bg.png';
    img.onload = () => setLoading(false);
  }, []);

  return (
    <Box className="App">
      {loading ? (
        <Box className="preloader" display="flex" justifyContent="center" alignItems="center" height="100vh">
          <img src={logo} alt="Logo" style={{ width: '200px' }} />
        </Box>
      ) : (
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
      )}
    </Box>
  );
}

export default App;
