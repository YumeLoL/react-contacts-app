import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Title from "../../ui/atoms/Title";

const Container = styled.div`
  ${tw`
    w-full
    p-6
    bg-red-400
    rounded-r-3xl
    `}
`;
const TopContainer = styled.div`
  ${tw` 
    w-full
    h-auto
    flex
    justify-between
    `}
`;
const Left = styled.div`
  ${tw`
    w-auto
  `}
`;

const Text = styled.div`
  ${tw`
    w-full
    `}
`;
const Right = styled.div`
  ${tw`
    w-auto
    `}
`;
const Image = styled.div`
  ${tw`
    w-auto h-auto
    `}
`;
const Searchbar = styled.div`
  ${tw`
    w-full
    `}
`;
const FilterButton = styled.div`
  ${tw`
    w-full
    `}
`;


const Contacts = () => {
  return (
    <Container>
      <TopContainer>
        <Left>
          <Title title={"All artists"} size={"lg"}/>
          <Text>Lorem ipsum dolor sit amet.</Text>                                     
        </Left>
        <Right>
          {/* <WhiteFlexRow> */}
            <Searchbar>
              <Image>
                <img src={``} alt="" />
              </Image>
              <input placeholder={`Search artists`} />
            </Searchbar>
          {/* </WhiteFlexRow> */}
          <FilterButton>
            <Text>Filter</Text>
            <Image>
                <img src={``} alt="" />
            </Image>
          </FilterButton>
        </Right>
      </TopContainer>
    </Container>
  );
};

export default Contacts;
