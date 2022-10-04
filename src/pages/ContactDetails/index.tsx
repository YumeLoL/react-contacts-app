import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import Text from "../../ui/atoms/Text";

const Container = styled.div`
  ${tw`
    w-full
    p-6
    rounded-r-3xl
    flex
    flex-col
    gap-5
    `}
`;
const ProfileContainer = styled.div`
  ${tw` 
    w-full
    h-full
    flex
    gap-10
  `}
`;
const DetailsLeft = styled.div`
  ${tw` 
  w-1/2
  flex
  flex-col
  gap-5
  `}
`;
const CompanyRight = styled.div`
  ${tw` 
  w-1/2
  flex
  flex-col
  gap-5
  `}
`;
const Map = styled.div`
  ${tw` 
  w-full
  h-full
  `}
`;
interface IType {
  key: string;
  value: string;
}
const ContactDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<IType[]>();
  const [location, setLocation] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users?id=${id}`
        );
        const data = res.data[0];

        const value: IType[] = [
          { key: "Name", value: data.name },
          { key: "Email", value: data.email },
          { key: "Phone", value: data.phone },
          {
            key: "Address",
            value:
              data.address.suite +
              ", " +
              data.address.street +
              ", " +
              data.address.city,
          },
          { key: "Website", value: data.website },
          { key: "Company", value: data.company.name },
        ];

        setData(value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Link to={"/contacts"}>
        <Text text={"<- Contacts"} size={"lg"} className="text-secondary" />
      </Link>

      <ProfileContainer>
        <DetailsLeft>
          {data && data.length > 0
            ? data.map(({ key, value }) => (
                <div key={key}>
                  <Text
                    text={key}
                    size={"md"}
                    className="text-secondary bold"
                  />
                  <Text text={value} size={"md"} />
                </div>
              ))
            : "loading..."}
        </DetailsLeft>

        <CompanyRight>
          {data && (
            <div className="flex gap-3">
              <Text text={`${data[5].key} :`} size={"md"} className="text-secondary bold"/>
              <Text text={data[5].value} size={"md"} />
            </div>
          )}

          <Map>

          </Map>
        </CompanyRight>
      </ProfileContainer>
    </Container>
  );
};

export default ContactDetails;
