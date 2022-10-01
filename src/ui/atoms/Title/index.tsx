import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

export interface TitleType {
  title: string;
  className?: string;
  size: 'lg' | 'md' | 'sl';
}

const Large = styled.h1`
  ${tw`
  md:text-lg 
  whitespace-nowrap
  font-bold
  `}
`;
const Medium = styled(Large)`
  ${tw`
  md:text-base 
  `}
`;
const Small = styled(Large)`
  ${tw`
  md:text-xs
  `}
`;

const Title = ({ title, className, size }: TitleType) => {
    switch (size) {
      case 'lg':
        return <Large className={className}>{title}</Large>;
      case 'md':
        return <Medium className={className}>{title}</Medium>;
      case 'sl':
        return <Small className={className}>{title}</Small>;
    }
  };
export default Title