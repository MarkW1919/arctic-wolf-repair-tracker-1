// src/components/Header.js
import React from 'react';
import { Box, Flex, Text, keyframes } from "@chakra-ui/react";

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const neonGlow = keyframes`
  0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 55px #00f; }
  50% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 55px #00f; }
`;

const Header = () => {
  return (
    <Box bg="blue.800" p={4}>
      <Flex justify="space-between" align="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="white"
          animation={`${neonGlow} 2s infinite alternate`}
        >
          RV STATION
        </Text>
        <Box textAlign="right" color="white">
          <Text fontSize="lg" animation={`${pulse} 2s infinite alternate`}>Mark Williamson</Text>
          <Text>Service Advisor</Text>
          <Text>RV Station</Text>
          <Text>Colbert, OK 74336</Text>
          <Text>580-579-5036</Text>
          <Text>mark@rvstation.com</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

