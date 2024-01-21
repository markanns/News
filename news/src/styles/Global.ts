import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  font-family: "Noto Sans", sans-serif;
  margin: 0;
}`;
export const Wrap = styled.div`
  width: 100%;
  max-width: 1437px;
  margin: 0 auto;
  padding: 0 20px;
`;
