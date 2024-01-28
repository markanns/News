import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNewsContext } from "../NewsContext/NewsContext";
import {
  HeaderStyle,
  HeaderHolder,
  HeaderLinks,
  NavLinkItem,
  HeaderCountries,
  CountryButton,
} from "./StyledHeader.style";
import { Wrap } from "../../styles/Global";

const Header = () => {
  const [active, setActive] = useState<number>(1);
  const { handleClickOnCountryButton } = useNewsContext();
  const { isActive } = useNewsContext();
  const { handleActiveButton } = useNewsContext();

  const handleDisableButton = () => {
    handleActiveButton();
  };
  const handleCountryChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    handleClickOnCountryButton(event);
    setActive(id);
  };

  const listOfCountries = [
    { id: 1, name: "US" },
    { id: 2, name: "GB" },
  ];

  const countryButton = listOfCountries.map((item) => (
    <CountryButton
      type="button"
      $isActive={active === item.id}
      key={item.id}
      onClick={(event) => handleCountryChange(event, item.id)}
      disabled={!isActive}
    >
      {item.name}
    </CountryButton>
  ));
  return (
    <HeaderStyle>
      <Wrap>
        <HeaderHolder>
          <HeaderLinks>
            <NavLinkItem>
              <NavLink to="/topNews" onClick={handleDisableButton}>
                Top News
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/categories" onClick={handleDisableButton}>
                Categories
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink to="/search" onClick={handleDisableButton}>
                Search
              </NavLink>
            </NavLinkItem>
          </HeaderLinks>
          <HeaderCountries>{countryButton}</HeaderCountries>
        </HeaderHolder>
      </Wrap>
    </HeaderStyle>
  );
};
export default Header;
