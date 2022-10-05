import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Text from "../../ui/atoms/Text";
import bg from "../../images/bg.png";
import { IContactInfo } from "../Contacts";

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

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}`);
        if (res) {
          setContacts(res.data);
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
          <div className="relative">
            <Img>
              <img src={bg} alt="" />
            </Img>
            <NumberColumn>
              <Content>
                <Text
                  className="text-white"
                  text={contacts && contacts.length > 0 ? contacts.length : 'null'}
                  size={"lg"}
                />
                <Text
                  className="text-white"
                  text={"All Contacts"}
                  size={"sm"}
                />
              </Content>
            </NumberColumn>
          </div>
          <div className="relative">
            <Img>
              <img src={bg} alt="" />
            </Img>
            <NumberColumn>
              <Content>
                <Text
                  className="text-white"
                  text={"xxx"}
                  size={"lg"}
                />
                <Text
                  className="text-white"
                  text={"Lorem, ipsum dolor"}
                  size={"sm"}
                />
              </Content>
            </NumberColumn>
          </div>
          <div className="relative">
            <Img>
              <img src={bg} alt="" />
            </Img>
            <NumberColumn>
              <Content>
                <Text
                  className="text-white"
                  text={"yyy"}
                  size={"lg"}
                />
                <Text
                  className="text-white"
                  text={"Lorem, ipsum dolor "}
                  size={"sm"}
                />
              </Content>
            </NumberColumn>
          </div>
        </CardWrapper>
      </Container>
    </div>
  );
};

export default Overview;
