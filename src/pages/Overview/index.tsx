import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import useFetch from "../../hooks/useFetch";
import Card from "../../ui/molecules/Card";
import BarChart from "./Bar";

interface IData {
  label: string;
  number: number;
}

const Container = styled.div`
  ${tw`
  w-auto
  h-auto
  flex
  flex-col
  gap-10
  `}
`;
const CardWrapper = styled.div`
  ${tw`
  max-w-[900px]
  h-auto
  flex
  flex-wrap
  gap-4
  justify-between
  items-center
  `}
`;
const ChartContainer = styled.div`
  ${tw`
  w-[300px]
  h-[300px]
  `}
`;

const Overview = () => {
  const { data: contacts } = useFetch(`users`);
  const { data: posts } = useFetch(`posts`);
  const { data: todos } = useFetch(`todos`);

  const data: IData[] = [
    { label: "All Contacts", number: contacts?.length as number },
    { label: "All Posts", number: posts?.length as number },
    { label: "All Todos", number: todos?.length as number },
  ];

  return (
    <Container>
      <CardWrapper>
        {data?.map((data, i) => (
          <Card key={i} number={data.number} text={data.label} />
        ))}
      </CardWrapper>

      <ChartContainer>
        <BarChart barData={data} />
      </ChartContainer>
    </Container>
  );
};

export default Overview;
