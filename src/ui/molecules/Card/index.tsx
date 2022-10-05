import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Text from "../../atoms/Text";
import bg from "../../../images/bg.png";

interface IProps {
  number: number;
  text: string;
}

const Img = styled.div`
  ${tw`
  min-w-[227px]
  h-[80px]
  
  `}
`;
const NumberColumn = styled.div`
  ${tw`
  w-full
  h-full
  absolute
  top-0
  left-0
  `}
`;
const Content = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  gap-2
  justify-center
  px-4
  `}
`;

const Card = ({ number, text }: IProps) => {
  return (
    <div className="relative">
      <Img>
        <img src={bg} alt="" />
      </Img>
      <NumberColumn>
        <Content>
          <Text className="text-white" text={number} size={"lg"} />
          <Text className="text-white" text={text} size={"sm"} />
        </Content>
      </NumberColumn>
    </div>
  );
};

export default Card;
