import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "./assets/bg.mp4"
const Homepage = (className) => {
  const [issLocation, setIssLocation] = useState([]);

  const getIssLocation = async () => {
    return fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((data) => {
        let locationArray = Object.values(data)[2];
        setIssLocation(locationArray);
      });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      getIssLocation();
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Wrap className={className}>
        <Background autoPlay loop muted src={bg} type="video/mp4"/>
        <Title>ISS Tracker</Title>
        <Coordinates className="long">
          Longitude: {issLocation.latitude}
        </Coordinates>
        <Coordinates className="lat">
          Latitude: {issLocation.longitude}
        </Coordinates>
      </Wrap>
    </>
  );
};

const Background = styled.video`
width:100%;
height:100%;
position:fixed;
object-fit:cover;`
const Title = styled.div`
  font-size: 10vw;
  padding: 15px;
  margin:30px auto;
  position: relative;
  z-index:100;
`;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  animation: fadein 1s ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Coordinates = styled.div`
margin: 0 auto;
  font-size: 5vw;
  padding: 15px;
  position: relative;
  z-index:100;
`;

export default Homepage;
