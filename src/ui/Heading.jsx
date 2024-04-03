import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 30px;
      font-weight: 600;
    `}
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 24px;
      font-weight: 500;
    `}
    ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 18px;
      font-weight: 400;
    `}
  line-height: 1.4;
`;

export default Heading;
