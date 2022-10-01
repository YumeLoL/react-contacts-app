import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface TextType {
  text: string;
  className?: string;
  size: 'lg' | 'md' | 'sm';
}

const Large = styled.h1`
  ${tw`
  md:text-lg 
  whitespace-nowrap
  font-bold
  `}
`;
const Medium = styled.h1`
  ${tw`
  md:text-base 
  whitespace-nowrap
  `}
`;
const Small = styled.h1`
  ${tw`
  md:text-xs
  font-light
  whitespace-nowrap
  `}
`;

const Text = ({ text, className, size }: TextType) => {
    switch (size) {
      case 'lg':
        return <Large className={className}>{text}</Large>;
      case 'md':
        return <Medium className={className}>{text}</Medium>;
      case 'sm':
        return <Small className={className}>{text}</Small>;
    }
  };
export default Text