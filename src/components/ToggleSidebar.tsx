import { createAction } from "@reduxjs/toolkit";
import { FC } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { toggleSidebar } from "../store/slices/sidebar";

const Hamberger = styled.div`
  font-size: 26px;
  cursor: pointer;
  padding: 10px 10px 10px 0;
  color: #151515;
`;

const ToggleSidebar: FC = (): JSX.Element => {

  const dispatch = useDispatch()

  const toggle = () => { 

    dispatch(toggleSidebar());

  }

  return (
    <Hamberger onClick={toggle}>
      <i className="fa-solid fa-bars"></i>
    </Hamberger>
  );
};

export default ToggleSidebar;
