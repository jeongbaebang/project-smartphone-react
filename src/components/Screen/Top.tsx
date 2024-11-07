import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const ScreenTop = () => {
  const [currentTime, setCurrentTime] = useState(getTime());

  useEffect(() => {
    const clearId = setInterval(() => {
      setCurrentTime(getTime());
    }, 1000);

    return () => clearInterval(clearId);
  }, []);

  return (
    <TopContainer>
      <MobileCarrier>LG U+ LTE</MobileCarrier>
      <Timezone>{currentTime}m</Timezone>
      <BatteryCapacity>100%</BatteryCapacity>
      <Battery />
    </TopContainer>
  );
};

const getTime = () => {
  const date = new Date();

  const padStartFunc = (dates: number[]) => {
    return dates.map((value) => String(value).padStart(2, '0'));
  };

  const [hours, minutes, seconds] = padStartFunc([
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]);

  return `${hours}:${minutes} ${seconds}`;
};

const TopContainer = styled.div`
  width: 100%;
  height: 21px;
  font-size: 11px;
  font-weight: 400;
  padding: 3px;
  padding-top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TopItem = styled.div`
  width: 38px;
  color: rgb(255 255 255);
`;

const MobileCarrier = styled(TopItem)`
  flex-grow: 1;
  text-align: left;
`;

const Timezone = styled(TopItem)`
  flex-grow: 5;
  text-align: center;
`;

const BatteryCapacity = styled(TopItem)`
  flex-grow: 0.3;
  text-align: right;
`;

const Battery = styled(TopItem)`
  display: inline;
  width: 1.1rem;
  height: 0.6rem;
  margin-left: 3px;
  border-radius: 2.5px;
  filter: blur(0.5px);
  background-color: green;
`;
