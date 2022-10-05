import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Text from "../../ui/atoms/Text";
import bg from "../../images/bg.png";
import { IContactInfo } from "../Contacts";
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

const Overview = () => {
  const [contacts, setContacts] = useState<IContactInfo[]>();
  const [posts, setPosts] = useState<any[]>()
  const [todos, setTodos] = useState<any[]>()

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
        const resPost = await axios.get(`${process.env.REACT_APP_API_URL}/posts`)
        const resTodo = await axios.get(`${process.env.REACT_APP_API_URL}/todos`)
        if (res) {
          setContacts(res.data);
          setPosts(resPost.data)
          setTodos(resTodo.data)
        }
      } catch (error) {
        console.log(error);
      }
    };

    fatchData();
  }, []);

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
