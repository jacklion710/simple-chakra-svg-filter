import React from 'react';
import { Image, ChakraProvider } from '@chakra-ui/react';

interface SVGFilterProps {
  src: string;
  filterId: string;
  color: string;  // Hex color for the filter
  [key: string]: any; // This is for otherProps, allowing any additional props
}

const SVGFilter: React.FC<SVGFilterProps> = ({ src, filterId, color, ...rest }) => {
  return (
    <ChakraProvider>
      <svg width="0" height="0">
        <filter id={filterId}>
          <feFlood floodColor={color} result="flood" />
          <feComposite in="flood" in2="SourceGraphic" operator="in" />
        </filter>
      </svg>
      <Image src={src} style={{ filter: `url(#${filterId})` }} {...rest} />
    </ChakraProvider>
  );
};

export const applySvgFilter = (
  src: string, 
  filterId: string, 
  color: string, 
  otherProps: { [key: string]: any }
) => {
  return <SVGFilter src={src} filterId={filterId} color={color} {...otherProps} />;
};

export default SVGFilter;
