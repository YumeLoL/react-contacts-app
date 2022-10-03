import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Text from "../../ui/atoms/Text";
import search from "../../images/search-icon.png";
import axios from "axios";
import { Marginer } from "../../ui/atoms/Marginer";

const Container = styled.div`
  ${tw`
    w-full
    p-6
    rounded-r-3xl
    `}
`;
const TopContainer = styled.div`
  ${tw` 
    w-full
    h-auto
    flex
    justify-between
    gap-4
    `}
`;
const Left = styled.div`
  ${tw`
    w-auto
  `}
`;
const Right = styled.div`
  ${tw`
    w-auto
    flex
    items-end
    justify-end
    `}
`;
const WhiteFlexRow = styled.div`
  ${tw`
  w-auto
  border-2
  rounded
  px-3
  py-1
  `}
`;
const Searchbar = styled.div`
  ${tw`
    w-auto
    flex
    flex-row
    justify-center
    items-center
    gap-2
    `}
`;
const Image = styled.div`
  ${tw`
    w-auto h-auto self-center
    `}
`;
const ContactContainer = styled.div`
  ${tw`
    `}
`;

interface IContactInfo {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: {
    suite: string;
    street: string;
    city: string;
  };
}

const Contacts = () => {
  const [contacts, setContacts] = useState<IContactInfo[]>();
  const [searchByName, setSearchByName] = useState("");

  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await axios.get( `https://jsonplaceholder.typicode.com/users`);
        if (res) {
          setContacts(res.data);
        }
      } catch (error) {
        console.log(error)
      }
    };

    fatchData();
  }, []);

  return (
    <Container>
      <TopContainer>
        <Left>
          <Text text={"All contacts"} size={"lg"} />
          <Text
            text={"Lorem, ipsum dolor sit amet consectetur adipisicing."}
            size={"sm"}
          />
        </Left>
        <Right>
          <WhiteFlexRow>
            <Searchbar>
              <Image>
                <img width="100%" height="100%" src={search} alt="icon" />
              </Image>
              <input
                className="outline-0"
                placeholder={`Search artists`}
                onChange={(e) => setSearchByName(e.target.value)}
              />
            </Searchbar>
          </WhiteFlexRow>
        </Right>
      </TopContainer>

      <Marginer margin={24} direction="vertical" />

      <ContactContainer>
        <table className="table-fixed">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {contacts && contacts.length > 0
              ? contacts
                  .filter((user) =>
                    user.name.toLowerCase().includes(searchByName)  // to filter by name
                  ) 
                  .map(({ id, name, phone, email, address }) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td>
                        {address.suite}, {address.street}, {address.city}
                      </td>
                    </tr>
                  ))
              : "Loading..."}
          </tbody>
        </table>
      </ContactContainer>
    </Container>
  );
};

export default Contacts;
