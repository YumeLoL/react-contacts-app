import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import axios from "axios";
import Text from "../../ui/atoms/Text";
import Map from "./Map";

interface IType {
  key: string;
  value: string;
}

const Container = styled.div`
  ${tw`
  w-full
  h-full
  flex
  flex-col
  gap-5
  `}
`;
const ProfileContainer = styled.div`
  ${tw` 
    w-full
    h-auto
    flex
    flex-wrap
    lg:flex-nowrap
    gap-10
  `}
`;
const DetailsLeft = styled.div`
  ${tw` 
  w-full
  h-auto
  lg:w-1/2
  flex
  flex-col
  gap-5
  `}
`;
const CompanyRight = styled.div`
  ${tw` 
  w-full
  lg:w-1/2
  flex
  flex-col
  gap-5
  `}
`;
const MapContainer = styled.div`
  ${tw` 
  w-full
  h-[450px]
  `}
`;

const ContactDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<IType[]>();
  const [geo, setGeo] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/users?id=${id}`
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

        setGeo(data.address.geo);
        setData(value);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      <Link to={"/contacts"}>
        <Text text={"<- Contacts"} size={"lg"} className="text-secondary" />
      </Link>

      <ProfileContainer>
        <DetailsLeft>
          {data && data.length > 0
            ? data.slice(0,-1).map(({ key, value }) => (
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
            <div className="flex flex-wrap break-normal gap-3">
              <Text
                text={`${data[5].key} :`}
                size={"md"}
                className="text-secondary bold"
              />
              <Text text={data[5].value} size={"md"}  className="w-full h-auto" />
            </div>
          )}

          <MapContainer>
            <Map geo={geo} width="600" height="450" frameborder="0"  allowfullscreen />
          </MapContainer>
        </CompanyRight>
      </ProfileContainer>
    </Container>
  );
};

export default ContactDetails;
