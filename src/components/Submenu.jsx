import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  color: #e1e9fc;
  cursor: pointer;
  transition: all 150ms ease-out;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  cursor: pointer;
  transition: background 200ms ease;

  &:hover {
    background: #632ce4;
  }
`;

const Submenu = ({ link }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);
  };
  return (
    <>
      <SidebarLink to={link.path} onClick={link.subNav && showSubnav}>
        <div>
          {link.icon}
          <SidebarLabel>{link.title}</SidebarLabel>
        </div>
        <div>
          {link.subNav && subnav
            ? link.iconOpen
            : link.subNav
            ? link.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        link.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
