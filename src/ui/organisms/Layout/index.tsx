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
  bg-stone-600

  `}
`;
const DashboardContainer = styled.div`
  ${tw`
  w-full
  h-full
  xl:w-[1000px]
  xl:h-[700px]
  bg-white
  rounded-none
  xl:rounded-3xl
  overflow-hidden
  `}
`;
const ContentWrapper = styled.div`
  ${tw`
  w-full
  h-full
  flex
  `}
`;
const ChildrenContainer = styled.div`
  ${tw`
  w-full
  p-12
  rounded-r-3xl
  overflow-y-scroll
  `}
`;
const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <MainContainer>
      <DashboardContainer>
        <ContentWrapper>
          <Sidebar />
          <ChildrenContainer>
            {children}
          </ChildrenContainer>
        </ContentWrapper>
      </DashboardContainer>
    </MainContainer>
  );
};

export default Layout;
