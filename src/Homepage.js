import React, { useEffect, useState } from "react";
import styled from "styled-components";
import bg from "./assets/bg.mp4";

const Homepage = () => {
  const [position, setPosition] = useState({
    lat: "",
    long: "",
  });

  const getIssPosition = async () => {
    return fetch("http://api.open-notify.org/iss-now.json")
      .then((response) => response.json())
      .then((data) => {
        setPosition({
          long: data.iss_position.longitude,
          lat: data.iss_position.latitude,
        });
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getIssPosition();
    }, 2000);
    return () => clearInterval(interval);
  });

  return (
    <Wrap>
      <Background autoPlay loop muted src={bg} type="video/mp4" />
      <TextWrap>
        <Title>ISS Tracker</Title>
        <Long>Longitude: {position.long}</Long>
        <Lat>Latitude: {position.lat}</Lat>
      </TextWrap>
    </Wrap>
  );
};

const TextWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
`;

const Background = styled.video`
  width: 100%;
  height: 100%;
  position: fixed;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 10vw;
  padding: 15px;
  margin: 30px auto;
  position: relative;
  z-index: 100;
  animation: topSlide 1.5s ease-out;
  @keyframes topSlide {
    0% {
      bottom: 100%;
    }
    100% {
      bottom: 0;
    }
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
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

const Long = styled.div`
  margin: 0 auto;
  font-size: 5vw;
  padding: 15px;
  position: relative;
  z-index: 100;
  animation: rightSlide 2s ease-out;
  @keyframes rightSlide {
    0% {
      right: 100%;
    }
    100% {
      right: 0;
    }
  }
`;

const Lat = styled.div`
  margin: 0 auto;
  font-size: 5vw;
  padding: 15px;
  position: relative;
  z-index: 100;
  animation: leftSlide 2s ease-out;
  @keyframes leftSlide {
    0% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }
`;

export default Homepage;
