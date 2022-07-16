import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoStyle = styled.div`
  text-align: center;

  h1 { 
    font-size: 32px;
    color: white;
    margin: 0;
  }
`;

const Logo: FC = () => {
  return (
    <LogoStyle>
      <Link to={"/"}>
        <h1>Smart Home</h1>
      </Link>
    </LogoStyle>
  );
};

export default Logo;
