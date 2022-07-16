import { FC } from "react";
import styled from "styled-components";

const Hamberger = styled.div`
  font-size: 26px;
  cursor: pointer;
  padding: 10px 10px 10px 0;
  color: black;
`;

const ToggleSidebar: FC = (): JSX.Element => {
  return (
    <Hamberger>
      <i className="fa-solid fa-left"></i>
    </Hamberger>
  );
};

export default ToggleSidebar;
