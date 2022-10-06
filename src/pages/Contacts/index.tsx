import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import useFetch from "../../hooks/useFetch";
import search from "../../images/search-icon.png";
import { Marginer } from "../../ui/atoms/Marginer";
import Text from "../../ui/atoms/Text";

// export interface IContactInfo {
//   id: number;
//   name: string;
//   username: string;
//   phone: number;
//   email: string;
//   website: string;
//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
//   address: {
//     suite: string;
//     street: string;
//     city: string;
//     geo: {
//       lat: string;
//       lng: string;
//     };
//   };
// }
interface IUser {
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

const Contacts = () => {
  const [searchByName, setSearchByName] = useState("");
  const { data, loading, error } = useFetch(`users`);
  if(error) console.log(error)

  return (
    <>
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
        <table className="table-auto">
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
            {loading
              ? <h1>Loading ...</h1>
              : data
                  ?.filter(
                    (user: IUser) =>
                      user.name.toLowerCase().includes(searchByName) // to filter by name
                  )
                  .map(({ id, name, phone, email, address }: IUser) => (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>
                        <Link
                          className="text-emerald-600 font-bold "
                          to={`/contacts/${id}`}
                        >
                          {name}
                        </Link>
                      </td>
                      <td>{phone}</td>
                      <td>{email}</td>
                      <td>
                        {address.suite}, {address.street}, {address.city}
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>
      </ContactContainer>
    </>
  );
};

export default Contacts;
