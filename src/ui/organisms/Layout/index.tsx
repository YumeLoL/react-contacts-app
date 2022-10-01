import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Sidebar from "../../molecules/Sidebar";

interface ILayout {
  children: React.ReactNode;
}

const MainContainer = styled.div`
  ${tw`
  w-screen
  h-screen
  flex
  justify-center
  items-center
  bg-stone-200
  `}
`;
const DashboardContainer = styled.div`
  ${tw`
  min-w-[80%]
  h-5/6
  bg-white
  rounded-3xl
  `}
`;
const ContentWrapper = styled.div`
    ${tw`
    w-full
    h-full
    flex
    
    `}
`
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <MainContainer>
      <DashboardContainer>
        <ContentWrapper>
          <Sidebar />
          {children}
        </ContentWrapper>
      </DashboardContainer>
    </MainContainer>
  );
};

export default Layout;
