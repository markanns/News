import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNewsContext } from "../NewsContext/NewsContext";
import {
  HeaderStyle,
  HeaderHolder,
  HeaderLinks,
  NavLinkItem,
  HeaderCountries,
} from "./StyledHeader.style";
import { Wrap } from "../../styles/Global";

const Header = () => {
  return (
    <HeaderStyle>
      <Wrap>
        <HeaderHolder>
          <HeaderLinks>
            <NavLinkItem>
              <NavLink to="/topNews">Top News</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/categories">Categories</NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/search">Search</NavLink>
            </NavLinkItem>
          </HeaderLinks>
          <HeaderCountries>
            <button>GB</button>
            <button>US</button>
          </HeaderCountries>
        </HeaderHolder>
      </Wrap>
    </HeaderStyle>
  );
};
export default Header;
