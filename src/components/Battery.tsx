import { FC } from "react";
import styled from "styled-components";

type Props = {
  no: number;
  percent: number;
};

const BatteryStyle = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 90px 1fr;
  align-items: center;
  padding: 7px 25px;
  box-shadow: 0 0 5px lightgray;
  border-radius: 5px;

  .no {
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
  }

  .percent-battery {
    font-size: 26px;
    font-weight: 700;
    line-height: 30px;
  }

  i {
    background: var(--gradient-green-yellowgreen);
    font-size: 70px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Battery: FC<Props> = ({ no, percent }) => {
  return (
    <BatteryStyle>
      <div>
        <i className="fa-solid fa-car-battery" />
      </div>
      <div>
        <div className="no">No. {no + 1}</div>
        <div className="percent-battery">{percent}%</div>
      </div>
    </BatteryStyle>
  );
};

export default Battery;
