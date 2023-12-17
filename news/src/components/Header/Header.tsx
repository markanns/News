import { Link, NavLink } from "react-router-dom";
import {
  HeaderStyle,
  HeaderHolder,
  HeaderLinks,
  NavLinkItem,
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
          </HeaderLinks>
        </HeaderHolder>
      </Wrap>
    </HeaderStyle>
  );
};
export default Header;
