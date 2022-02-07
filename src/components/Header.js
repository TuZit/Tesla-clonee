import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

function Header() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <Container>
      <a href="ff">
        <img src="./images/logo.svg" alt="" />
      </a>
      <Menu>
        <p>
          <a href="#">Model S</a>
        </p>
        <p>
          <a href="#">Model 3</a>
        </p>
        <p>
          <a href="#">Model X</a>
        </p>
        <p>
          <a href="#">Model Y</a>
        </p>
      </Menu>
      <RightMenu>
        <p>
          <a>Shop</a>
        </p>
        <p>
          <a>Tesla Account</a>
        </p>
        <CustomMenu onClick={() => setSideNav(true)} />
      </RightMenu>

      <SideNav show={sideNav}>
        <CustomClose onClick={() => setSideNav(false)} />
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing</a>
        </li>
        <li>
          <a href="#">Existing</a>
        </li>
        <li>
          <a href="#">Existing</a>
        </li>
      </SideNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 6rem;
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  z-index: 5;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;

  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1.6rem;
    flex-wrap: no-wrap;

    a {
      font-size: 1.4rem;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 1.6rem;
    font-size: 1.4rem;
  }
`;

const SideNav = styled.ul`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  width: 30rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 3rem 3rem 3rem 4rem;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  li {
    padding: 2rem 0;
    border-bottom: 1px solid #ccc;
    transition: all 0.5s ease;
    cursor: pointer;

    a {
      font-size: 1.6rem;
      font-weight: 600;
    }
  }
  li:hover {
    transform: translateX(7px);
  }
`;

const CustomMenu = styled(MenuOutlined)`
  verical-align: bottom;
  font-size: 1.6rem;
  cursor: pointer;
`;

const CustomClose = styled(CloseOutlined)`
  font-size: 1.6rem;
  font-weight: 700;
  text-align: right;
  cursor: pointer;
`;
