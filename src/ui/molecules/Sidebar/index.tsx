import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import useMenu from "../../../hooks/useMenu";
import logo from "../../../images/logo.png";
import arrowLeft from "../../../images/arrow-left.png";
import arrowRight from "../../../images/arrow-right.png";

const Container = styled.div`
  ${tw`
    bg-stone-100
    rounded-l-3xl
    flex
    flex-col
    items-center
    relative
    `}
`;
const SidebarContainer = styled.div`
  ${tw`
    absolute top-44 left-0
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
  hover:bg-primary
  `}
`;
const Icon = styled.div`
  ${tw` w-[24px] h-[24px] self-center`}
`;
const NavMenu = styled.span`
  ${tw`
    w-24
    h-auto
    flex
    items-center
    justify-center
    text-gray-700
    overflow-hidden
  `}
`;
const ArrowButton = styled.div`
  ${tw`
  absolute
  bottom-12
  cursor-pointer
  `}
`;


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menu = useMenu();
  const navigate = useNavigate();
  const goTo = (route: string) => navigate(route);

  return (
    <Container className={isOpen ? 'w-64' : 'w-[87px]'}>
      <div  className={`w-auto h-auto absolute top-24  `} style={{display: isOpen ? 'block' : 'none'}}>
        <img src={logo} alt="YumeApp" />
      </div>

      <SidebarContainer >
        {menu.map((menu, i) => (
          <MenuWrapper
            key={i}
            className={`${menu.active ? "active" : ""}`}
            onClick={() => {
              goTo(menu.route);
            }}
          >
            <Icon>{menu.icon}</Icon>
            <NavMenu style={{display: isOpen ? 'block' : 'none'}}>{menu.label}</NavMenu>
          </MenuWrapper>
        ))}
      </SidebarContainer>

      <ArrowButton onClick={()=> setIsOpen(!isOpen)}>
        <img src={isOpen? arrowLeft: arrowRight} alt="" />
      </ArrowButton>
    </Container>
  );
};

export default Sidebar;
