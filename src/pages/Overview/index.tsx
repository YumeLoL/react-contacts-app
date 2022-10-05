import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import useFetch from "../../hooks/useFetch";
import Card from "../../ui/molecules/Card";

const Container = styled.div`
  ${tw`
  w-full
  h-auto
  flex
  flex-col
  items-center
  `}
`;
const CardWrapper = styled.div`
  ${tw`
  w-[900px]
  h-auto
  flex
  justify-between
  `}
`;

const Overview = () => {
  const { data: contacts } = useFetch(`users`);
  const { data: posts } = useFetch(`posts`);
  const { data: todos } = useFetch(`todos`);
  
  return (
    <div>
      <Container>
        <CardWrapper>
          <Card number={contacts?.length as number} text={"All Contacts"} />
          <Card number={posts?.length as number} text={"All Posts"} />
          <Card number={todos?.length as number} text={"All Todos"} />
        </CardWrapper>


      </Container>
    </div>
  );
};

export default Overview;
