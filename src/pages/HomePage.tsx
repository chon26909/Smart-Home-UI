import { Container } from "@nextui-org/react";
import { FC, useEffect } from "react";
import styled from "styled-components";
import BatteryCharge from "../components/BatteryCharge";
import RegulatorCurcuit from "../components/RegulatorCurcuit";
import { useAppSelector } from "../hooks";
import { setTemperature } from "../store/slices/temperature";

const OverviewWidget = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  grid-gap: 1rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const WidgetItem = styled.div`

  border-radius: 10px;
  color: white;
  padding: 20px 25px;

  .name { 
    font-weight: 700;
    font-size: 1.4rem;
  }
  .value  { 
    font-size: 2rem;
    font-weight: 700;
  }
  .unit {
    font-size: 1.3rem;
  }

  &:nth-child(1) {
    background: var(--gradient-purple-blue);

  }
  &:nth-child(2) {
    background: var(--gradient-orange-yellow);

  }
  &:nth-child(3) {
    background: var(--gradient-green-yellowgreen);

  }
  &:nth-child(4) {
    background: var(--gradient-pink-orange);

  }

  @media screen and (max-width: 480px) {
    padding: 20px;

    .name { 
      font-size: 1rem;
    }
    .value  { 
      font-size: 1.6rem;
    }
  }
`;

type DataWidget = {
  name: string;
  value: number;
  unit: string;
}

const Widget = ({ name, value, unit }: DataWidget) => {
  return <WidgetItem>
    <div className="name">{name}</div>
    <div> <span className="value">{value.toFixed(2)}</span><span className="unit">  {unit}</span> </div>
  </WidgetItem>;
};

const HomePage: FC = () => {

  const { temperature, humidity, battery } = useAppSelector(store => store);
  

  let data: DataWidget[] = [
    {
      name: "Voltage",
      value: battery.voltage,
      unit: "V."
    },
    {
      name: "Current",
      value: battery.current,
      unit: "A."
    },
    {
      name: "Temperature",
      value: temperature.control,
      unit: "°C"
    },
    {
      name: "Humidity",
      value: humidity.control,
      unit: ""
    }
  ]

  return (
    <Container>
      <OverviewWidget>
        {data.map((data, index) => {
          return <Widget {...data} key={index} />;
        })}
      </OverviewWidget>
      <RegulatorCurcuit/>
      {/* <BatteryCharge />
      <BatteryCharge /> */}
    </Container>
  );
};

export default HomePage;
