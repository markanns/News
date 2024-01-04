import styled from "styled-components";

export const HeaderStyle = styled.header`
  top: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderCountries = styled.div`
  display: flex;
`;
export const HeaderLinks = styled.div`
  display: flex;
`;
export const NavLinkItem = styled.span`
  a {
    color: black;
    text-decoration: none;
    font-size: 24px;
    margin-right: 15px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
