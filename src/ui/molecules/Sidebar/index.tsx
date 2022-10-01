import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import useMenu from "../../../hooks/useMenu";
import logo from "../../../images/logo.png";


const Container = styled.div`
  ${tw`
    w-64
    bg-stone-100
    rounded-l-3xl
    flex
    flex-col
    items-center
    relative
    `}
`;
const Logo = styled.div`
  ${tw` w-auto h-auto absolute top-24 `}
`;
const SidebarContainer = styled.div`
  ${tw`
    absolute top-44
  `}
  .active {
    background-color: #b4cd93;
  }
`;
const MenuWrapper = styled.div`
  ${tw`
  flex 
  gap-2 
  px-3 
  py-2 
  m-4 
  rounded 
  cursor-pointer 

  hover:bg-primary`}
`;
const Icon = styled.div`
  ${tw` w-auto h-auto self-center`}
`;
const NavMenu = styled.span`
  ${tw`
    w-24
    h-auto
    text-lg
    flex
    items-center
    justify-center
    text-gray-700
    
  `}
`;

const Sidebar = () => {
  const menu = useMenu();
  const navigate = useNavigate();
  const goTo = (route: string) => navigate(route);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="YumeApp" />
      </Logo>

      <SidebarContainer>
        {menu.map((menu, i) => (
          <MenuWrapper
            key={i}
            className={`${menu.active ? "active" : ""}`}
            onClick={() => {
              goTo(menu.route);
            }}
          >
            <Icon>{menu.icon}</Icon>
            <NavMenu>{menu.label}</NavMenu>
          </MenuWrapper>
        ))}
      </SidebarContainer>
    </Container>
  );
};

export default Sidebar;
