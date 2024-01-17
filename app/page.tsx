import React from 'react';
import { applySvgFilter } from '../components/SVGFilter';
import { HStack, ChakraProvider } from '@chakra-ui/react';

const Home = () => {
  return (
    <ChakraProvider>
      <HStack>
        {applySvgFilter('/vercel.svg', 'vercelFilter1', '#ff0000', { width: 300, height: 200 })}
        {applySvgFilter('/vercel.svg', 'vercelFilter2', '#00ff00', { width: 300, height: 200 })}
        {applySvgFilter('/vercel.svg', 'vercelFilter3', '#0000ff', { width: 300, height: 200 })}
      </HStack>
      <HStack>
        {applySvgFilter('/next.svg', 'nextFilter1', '#ff0000', { width: 300, height: 200 })}
        {applySvgFilter('/next.svg', 'nextFilter2', '#00ff00', { width: 300, height: 200 })}
        {applySvgFilter('/next.svg', 'nextFilter3', '#0000ff', { width: 300, height: 200 })}
      </HStack>
    </ChakraProvider>
  );
};

export default Home;
