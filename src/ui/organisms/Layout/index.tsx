import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../../molecules/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const MainContainer = styled.div`
background: linear-gradient(
  106.37deg,
  #ffe1bc 29.63%,
  #ffcfd1 51.55%,
  #f3c6f1 90.85%
);
  ${tw`
  w-screen
  h-screen
  flex
  justify-center
  items-center
  `}
`;
const DashboardContainer = styled.div`
box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);

  ${tw`
  min-w-[80%]
  h-5/6
  bg-white
  rounded-3xl
  `}
`

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <MainContainer>
      <DashboardContainer>
        <Sidebar />
        {children}
      </DashboardContainer>
    </MainContainer>
  );
};

export default Layout;
