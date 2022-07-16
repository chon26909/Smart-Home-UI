import { Container } from "@nextui-org/react";
import { FC, useEffect } from "react";
import styled from "styled-components";
import BatteryCharge from "../components/BatteryCharge";
import { useAppDispatch, useAppSelector } from "../hooks";
import { changeTemperature } from "../store/slices/temperature";

const OverviewWidget = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  grid-gap: 1rem;
`;

const WidgetItem = styled.div`

  border-radius: 10px;
  height: 125px;
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


  const dispatch = useAppDispatch();
  const { temperature, humidity } = useAppSelector(store => store);

  useEffect((): any => {

    // socket.on('temperature', ({ name, value }: { name: string, value: string }) => {
    //   console.log('temperature', name, ' ', value);
    //   // const dispatch = useAppDispatch()
    //   dispatch(changeTemperature({ name, value }))
    // })

  }, []);

  let data: DataWidget[] = [
    {
      name: "Voltage",
      value: 0.00,
      unit: "V."
    },
    {
      name: "Current",
      value: 0.00,
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
      <BatteryCharge />
      <BatteryCharge />
    </Container>
  );
};

export default HomePage;
