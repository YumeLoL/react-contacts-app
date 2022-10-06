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
  lg:w-[90%]
  lg:h-[90%]
  xl:w-[80%]
  xl:h-[80%]
  bg-white
  rounded-none
  lg:rounded-3xl
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
