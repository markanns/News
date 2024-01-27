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
export const CountryButton = styled.button<{ $isActive: boolean, disabled: boolean }>`
  background-color: #f8f8f8;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  pointer-events: ${(props) => props.disabled && `none`};
  ${(props) => props.$isActive && `pointer-events: none; background-color: #e8e8e8;`}
`;
